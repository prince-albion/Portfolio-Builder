import React, { Component } from 'react'
import './App.css'
import PieChart from './PieChart'

{/*Canvas 'island' for allocation chart*/}
class AllocCanvas extends Component {
   render() {
      return (
        <div className="backgrndGrowth2">
            <PieChart />
        </div>
      )
   }
}
export default AllocCanvas
