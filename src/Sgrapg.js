import React, { Component } from "react";
import * as graph from "./shubh.json";
import Plot from "react-plotly.js";

class Sgrapg extends Component {
  render() {
    return (
      <div>
        <Plot data={graph.data} />
      </div>
    );
  }
}

export default Sgrapg;
