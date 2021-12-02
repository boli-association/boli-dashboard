// import { FunctionComponent } from "react";
import * as d3 from "d3";
import { FunctionComponent } from "react";
import { useD3 } from "../../hooks/react-d3";

const data = [
  { year: 1980, efficiency: 1, sales: 20 },
  { year: 1985, efficiency: 2, sales: 24 },
  { year: 1990, efficiency: 3, sales: 22 },
  { year: 1991, efficiency: 4, sales: 30 },
  { year: 1992, efficiency: 9, sales: 35 },
];

const LineChart = ({ strokeColor = "white" }) => {
  const ref = useD3((svg) => {
    const height = 50;
    const width = 200;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    var x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.efficiency))
      .range([0, width]);

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (data, (d) => d.sales))])
      .range([height, 0]);
    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", strokeColor)
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.efficiency);
          })
          .y(function (d) {
            return y(d.sales);
          })
      );
  }, []);

  return (
    <svg
      ref={ref}
      style={{
        height: 50,
        // backgroundColor: 'gray',
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></svg>
  );
};

export default LineChart;
