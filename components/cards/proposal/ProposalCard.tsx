import { FunctionComponent } from "react";
import Image from "next/image";

interface ProposalDetail {
  title: string;
  creator: string;
  minimum: number;
  value: number;
  coin: string;
}

const ProposalCard: FunctionComponent<ProposalDetail> = (props) => {
  return (
    <div className="rounded-xl p-4 bg-white flex flex-col gap-y-4">
      <div className="w-full overflow-hidden rounded-xl relative h-60">
        <Image src="/assets/temp/nike.jpg" layout="fill" objectFit="cover" />
        <div className="absolute left-2 px-3 py-1 rounded-full text-xl top-2 bg-primary-hover text-white">
          Ends 11/23/2021 at 9.00PM
        </div>
      </div>
      <div>
        <h2>{props.title}</h2>
        <h4>{props.creator}</h4>
      </div>
      <div>
        <h5>
          Valued at {props.value.toFixed(2)} {props.coin}{" "}
        </h5>
        <h5>
          Voting minimum {props.minimum.toFixed(2)} {props.coin}{" "}
        </h5>
      </div>
    </div>
  );
};

export default ProposalCard;
