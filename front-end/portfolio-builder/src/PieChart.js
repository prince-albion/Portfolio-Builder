import React, { Component } from 'react';
import './App.css';
import { Pie } from '@vx/shape'

function Label({ x, y, children }) {
  return (
    <text
      fill="white"
      textAnchor="middle"
      x={x}
      y={y}
      dy=".33em"
      fontSize={9}
    >
      {children}
    </text>
  );
}

class PieChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = [
        { x: "UK - Market", y: 9.14 },
        { x: "UK - Small", y: 7.16 },
        { x: "UK - Value", y: 14.31 },
        { x: "Developed (exc. UK) - Market", y: 23.52 },
        { x: "Developed (exc. UK) - Small", y: 9.2 },
        { x: "Developed (exc. UK) - Value", y: 18.4 },
        { x: "Emerging - Market", y: 13.63 },
        { x: "Emerging - Small", y: 5.36 },
        { x: "Emerging - Value", y: 10 }

      ];
    const margins = { top: 20, right: 20, bottom: 100, left: 60 }
    const dimensions = { width: 480, height: 480 }
    const maxVal = 500

    const radius = Math.min(dimensions.width, dimensions.height) / 2

    return (
      <svg className="Graph" width={"100%"} height={dimensions.height} >

        <rect
          x={0}
          y={0}
          rx={14}
          width={dimensions.width}
          height={dimensions.height}
          fill="url('#gradients')"
        />

        <Pie
          top={dimensions.height / 2}
          left={dimensions.width / 2 - 20}
          data={data}
          pieValue={d => d.y}
          outerRadius={radius - 75}
          innerRadius={radius - 120}
          fill="brown"
          fillOpacity={d => 1 / (d.index + 2) }
          cornerRadius={3}
          padAngle={0}
          centroid={(centroid, arc) => {
              const [x, y] = centroid;
              const { startAngle, endAngle } = arc;
              return <Label x={x} y={y}>{arc.data.x}</Label>;
          }}
        />
      </svg>
    )
  }
}

export default PieChart
