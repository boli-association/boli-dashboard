const TokenCard = ({ token }) => {
  return (
    <div className="border border-btn-secondary rounded-xl mb-2 items-center px-3 py-2 flex gap-x-4">
      <div className="w-10 h-10 rounded-xl bg-red-400"></div>
      <div>
        <h4 className="font-semibold">{token.name}</h4>
        <p className="text-lg text-primary">{token.price}</p>
      </div>
    </div>
  );
};

export default TokenCard;
