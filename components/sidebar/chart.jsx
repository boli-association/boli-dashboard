// import { FunctionComponent } from "react";
import * as d3 from "d3";
import { useD3 } from "../../hooks/react-d3";

const data = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
];

const Chart = () => {
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
      .attr("stroke", "steelblue")
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
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    ></svg>
  );
};

export default Chart;
