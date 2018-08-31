import React, { Component } from 'react'
import './App.css'
import SlideSection1 from "./SlideSection1"
import SlideSection2 from "./SlideSection2"

class Growth extends Component {

  constructor(props) {
    super(props)

    this.growth = this.props.growth

  }

  render() {
    let equities = 50
    let property = 50
    let developed = 0
    let emerging = 0
    let uk = 0
    let devxuk = 0
    let growth = this.growth
    return (
      <div className="sliderSection2">
        <h2 className="section2Title">Growth</h2>
        <SlideSection1
            eq={equities}
            prop={property}
            dev={developed}
            em={emerging}
            uk={uk}
            devx={devxuk}
            growth={growth}

        />
        <SlideSection2
            uk={uk}
            devxuk={devxuk}
            emerging={emerging}
          />
      </div>
    )
  }
}

export default Growth
