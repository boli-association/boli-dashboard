import { QueriesStore, QueriesWithCosmos, AccountWithCosmos, AccountStore } from '@keplr-wallet/stores';
import { IndexedDBKVStore } from '@keplr-wallet/common';
import { ChainStore } from './chain';
import { ChainInfo } from '@keplr-wallet/types';
import { EmbedChainInfos } from '../config';
import { prettifyTxError } from './prettify-tx-error';
import { KeplrWalletConnectV1 } from '@keplr-wallet/wc-client';
import { ConnectWalletManager } from '../dialogs/connect-wallet';

export class RootStore {
	public readonly chainStore: ChainStore;
	public readonly accountStore: AccountStore<AccountWithCosmos>;
	public readonly queriesStore: QueriesStore<QueriesWithCosmos>;

	public readonly connectWalletManager: ConnectWalletManager;

	constructor() {
	    this.chainStore = new ChainStore(EmbedChainInfos, EmbedChainInfos[0].chainId);
	    this.connectWalletManager = new ConnectWalletManager(this.chainStore);

	    this.queriesStore = new QueriesStore(
	        new IndexedDBKVStore('store_web_queries'),
	        this.chainStore,
	        this.connectWalletManager.getKeplr,
	        QueriesWithCosmos
	    );

	    this.accountStore = new AccountStore<AccountWithCosmos>(
	        window,
	        AccountWithCosmos,
	        this.chainStore,
	        this.queriesStore,
	        {
	            defaultOpts: {
	                prefetching: false,
	                suggestChain: true,
	                autoInit: false,
	                getKeplr: this.connectWalletManager.getKeplr,
	                suggestChainFn: async (keplr, chainInfo) => {
	                    if (keplr.mode === 'mobile-web') {
	                        // Can't suggest the chain on mobile web.
	                        return;
	                    }

	                    if (keplr instanceof KeplrWalletConnectV1) {
	                        // Can't suggest the chain using wallet connect.
	                        return;
	                    }

	                    // Fetching the price from the pool's spot price is slightly hacky.
	                    // It is set on the custom coin gecko id start with "pool:"
	                    // and custom price store calculates the spot price from the pool
	                    // and calculates the actual price with multiplying the known price from the coingecko of the other currency.
	                    // But, this logic is not supported on the Keplr extension,
	                    // so, delivering this custom coingecko id doesn't work on the Keplr extension.
	                    const copied = JSON.parse(JSON.stringify(chainInfo.raw)) as ChainInfo;
	                    if (copied.stakeCurrency.coinGeckoId?.startsWith('pool:')) {
	                        // @ts-ignore
	                        delete copied.stakeCurrency.coinGeckoId;
	                    }
	                    for (const currency of copied.currencies) {
	                        if (currency.coinGeckoId?.startsWith('pool:')) {
	                            // @ts-ignore
	                            delete currency.coinGeckoId;
	                        }
	                    }
	                    for (const currency of copied.feeCurrencies) {
	                        if (currency.coinGeckoId?.startsWith('pool:')) {
	                            // @ts-ignore
	                            delete currency.coinGeckoId;
	                        }
	                    }

	                    await keplr.experimentalSuggestChain(copied);
	                },
	            },
	            chainOpts: this.chainStore.chainInfos.map(chainInfo => {
	                let gas = 500_000;
	                if (chainInfo.chainId.startsWith('osmosis-')) {
	                    gas = 1_350_000;
	                } else if (chainInfo.chainId.startsWith('secret-')) {
	                    gas = 30_000;
	                }

	                return {
	                    chainId: chainInfo.chainId,
	                    msgOpts: { ibcTransfer: { gas } },
	                    preTxEvents: {
	                        onBroadcastFailed: (e?: Error) => {
	                            let message: string = 'Unknown error';
	                            if (e instanceof Error) {
	                                message = e.message;
	                            } else if (typeof e === 'string') {
	                                message = e;
	                            }

	                            try {
	                                message = prettifyTxError(message, chainInfo.currencies);
	                            } catch (e) {
	                                // eslint-disable-next-line no-console
	                                console.log(e);
	                            }
	                        },
	                        onBroadcasted: (txHash: Uint8Array) => {},
	                        onFulfill: (tx: any) => {},
	                    },
	                };
	            }),
	        }
	    );
	    this.connectWalletManager.setAccountStore(this.accountStore);
	}
}

export function createRootStore() {
    return new RootStore();
}
