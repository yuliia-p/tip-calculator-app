import React, { useState } from 'react';

export default function TipCalc() {
  const [amount, setAmount] = useState(0);

  function getAmount(e) {
    setAmount(e.target.value);
  }
  function calculator(e) {
    e.preventDefault();
    // console.log('amount', amount);
    // console.log(e.target);
  }
  return (
    <div className='container'>
      <h1>Tip calculator app!</h1>
      <form onSubmit={calculator}>
        <div className='row'>
          <div className='column-half'>
            <p>Bill</p>
            <p>{amount}</p>
            <input onChange={getAmount} id="bill-amount" type="text" placeholder="Bill Amount"></input>
            <p>Select Tip %</p>
            <select id="tip-options">
              <option value="0.05">5%</option>
              <option value="0.1">10%</option>
              <option value="0.15">15%</option>
              <option value="0.25">25%</option>
              <option value="0.5">50%</option>
            </select>

            <p>Number of People</p>
            <input id="number-people" type="text" placeholder="0"></input>
          </div>
          <div className='column-half'>
            <p>Tip Amount<span>$0.00</span></p>
            <p>/ person</p>
            <p>Total<span>$0.00</span></p>
            <p>/ person</p>
            <button>Reset</button>
          </div>
        </div>

      </form>

    </div>
  );
}
