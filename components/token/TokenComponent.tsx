import TokenCard from "../cards/token-card/TokenCard";

const tokenData = [
  {
    color: "#",
    name: "Tomorrowland token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Banyan tree token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Noonu token",
    price: "BLT 0.20",
  },
  {
    color: "#",
    name: "Tomorrowland token",
    price: "BLT 0.20",
  },
];

const TokenComponent = () => {
  return (
    <div className="w-full">
      <h3 className="mb-4 mt-6 font-semibold">Popular Tokens</h3>
      {tokenData.map((token, index) => (
        <TokenCard key={index} token={token} />
      ))}

      <button className="text-gradient-blue-y float-right mt-4">
        View all tokens
      </button>
    </div>
  );
};

export default TokenComponent;
