      // Define data
      const data = [4, 8, 15, 16, 23, 42];
      
      // Define SVG container
      const svg = d3.select("svg");
      
      // Define scales
      const xScale = d3.scaleBand()
                       .domain(d3.range(data.length))
                       .range([0, 400])
                       .padding(0.1);
      const yScale = d3.scaleLinear()
                       .domain([0, d3.max(data)])
                       .range([0, 300]);
      
      // Create bars
      svg.selectAll("rect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", (d, i) => xScale(i))
         .attr("y", (d) => 300 - yScale(d))
         .attr("width", xScale.bandwidth())
         .attr("height", (d) => yScale(d))
         .attr("fill", "steelblue");