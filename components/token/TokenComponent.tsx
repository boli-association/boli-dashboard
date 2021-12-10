import TokenCard from "./TokenCard";

const tokenData = [
  {
    color: "#",
    name: "Noonu Boli",
    price: "❖ 0.20",
  },
  {
    color: "#",
    name: "Banyan Tree Boli",
    price: "❖ 0.20",
  },
  {
    color: "#",
    name: "Eco Boli",
    price: "❖ 0.20",
  },
  {
    color: "#",
    name: "Kudafari Boli",
    price: "❖ 0.20",
  },
];

const TokenComponent = () => {
  return (
    <div className="w-full">
      <h3 className="mb-4 mt-10 font-semibold h3-heading">Popular Tokens</h3>
      {tokenData.map((token, index) => (
        <TokenCard key={index} token={token} />
      ))}

      <button className="text-gradient-blue-y float-right mt-4 blue-btn">
        View all tokens
      </button>
    </div>
  );
};

export default TokenComponent;
