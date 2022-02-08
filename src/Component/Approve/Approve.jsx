import React from 'react';
import './Approve.scss';

function Approve({element}) {

  return <div className='app'>
      <h2>Loan Option</h2>
      <label htmlFor="appBtn">Branch</label>
      <button className='app__btn' id='appBtn'>Select a branch to get a loan from <i className='bx bx-chevron-down'></i></button>
      <label htmlFor="appBtn">Loan Amount</label>
      <button className='app__btn' id='appBtn'><i className='bx bx-menu-alt-left'></i> 000 <i>MAX</i></button>
    
    <div>
        <p>NFT Collateral Value</p>
        <span>{element ? element.money + "ETH" : "0,00 ETH"}</span>
    </div>
    <div>
        <p>Interest Rate</p>
        <span>{element ? element.precent + "%" : "0%"}</span>
    </div>
    <div>
        <p>Loan Duration</p>
        <span>{element ? element.sana : "0 days"}</span>
    </div>

    <button className='app__button'>Approve your NFT</button>
  </div>;
}

export default Approve;
