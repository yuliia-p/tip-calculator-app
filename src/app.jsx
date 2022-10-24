import React from 'react';

export default class TipCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
      numberOfPeople: 0,
      tipPercent: 0.05,
      tipAmount: 0,
      tipDisplay: 'none'
    };
    this.getAmount = this.getAmount.bind(this);
    this.getNumberOfPeople = this.getNumberOfPeople.bind(this);
    this.getTipPercent = this.getTipPercent.bind(this);
    this.tipCalculator = this.tipCalculator.bind(this);
  }

  getAmount(e) {
    this.setState({ totalAmount: e.target.value });
  }

  getNumberOfPeople(e) {
    this.setState({ numberOfPeople: e.target.value });
  }

  getTipPercent(e) {
    this.setState({ tipPercent: e.target.value });
  }

  tipCalculator() {
    const { totalAmount, numberOfPeople, tipPercent } = this.state;
    if (
      !isNaN(totalAmount) &&
      !isNaN(numberOfPeople) &&
      !isNaN(tipPercent)
    ) {
      if (totalAmount > 0) {
        if (numberOfPeople > 0) {
          let tipAmount = (totalAmount * tipPercent / numberOfPeople);
          tipAmount = tipAmount.toFixed(2);
          this.setState({
            tipAmount,
            tipDisplay: 'block'
          });
        }
      }
    }
  }

  render() {

    const { getTipPercent, getAmount, getNumberOfPeople, tipCalculator } = this;
    return (
      <div className='container'>
        <h1>Tip Calculator:</h1>
        <div className='row'>
          <div className='column-half'>
            <p>Bill</p>
            <input className='border-radius padding-left'onChange={getAmount} id="bill-amount" type="text" placeholder="Bill Amount"></input>
            <p>Select Tip %</p>
            <select className='border-radius padding-left' onChange={getTipPercent} id="tip-options">
              <option value="0.05">5%</option>
              <option value="0.1">10%</option>
              <option value="0.15">15%</option>
              <option value="0.25">25%</option>
              <option value="0.5">50%</option>
            </select>
            <p>Number of People</p>
            <input className='border-radius padding-left' onChange={getNumberOfPeople} id="number-people" type="text" placeholder="0"></input>
            <h3 style={{ display: this.state.tipDisplay }}>Tip Amount ${this.state.tipAmount} / per person</h3>
          </div>
          <div className='button-holder'>
            <button onClick={tipCalculator}>Calculate!</button>
            {/* <button >Reset</button> */}
          </div>

        </div>
      </div>
    );
  }

}
