import LineChart from "./LineChart";

const chartData = [
  {
    title: "Issuance",
    amount: "10,000",
  },
  {
    title: "Issuance",
    amount: "10,000",
  },
  {
    title: "Total supply",
    amount: "100,000,000",
  },
  {
    title: "Staking ratio",
    amount: "25.00%",
  },
];

const ChartComponent = () => {
  return (
    <div
      className="rounded-xl p-4 w-full text-white flex flex-col items-center bg-custom-green-dark"
    >
      <h2 className="font-semibold">Universal Music Group</h2>
      <h5 className="font-semibold text-10 mb-4">UMGT</h5>

      <LineChart />

      <div className="grid grid-cols-2 mt-6 w-full gap-4">
        {chartData.map((data, index) => (
          <div
            key={index}
            className="rounded-xl px-4 py-2 text-xl bg-white bg-opacity-10"
          >
            <h4>{data.title}</h4>
            <p>{data.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;
