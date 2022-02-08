import React, { useContext } from 'react';
import './Collateral.scss';
import { ModalContext } from "../Context/Context";
import Approve from '../Approve/Approve';

function Collateral({ setNftModal }) {

    const {modal} = useContext(ModalContext);
    

  return (
    <div className='section'>
      <div className='collateral'>
          <div className="collateral__head">
              <h2 className="collateral__head-title">
              NFT Collateral
              <i className='bx bx-info-circle'></i>
              </h2>
              <button className="collateral__head-btn" onClick={() => setNftModal(true)}>
              <i className='bx bx-plus'></i>
              </button>
          </div>
          <button className='collateral__btn' onClick={() => setNftModal(true)}>
          Select an NFT in your wallet
          <i className='bx bxs-chevron-down'></i>
          </button>

        {modal && <div className="collateral__box">
            <img src={modal.image} alt="" />
            <p>{modal.last_name}</p>
        </div>}

      </div>
      
      <Approve element={modal} />
  </div>);
}

export default Collateral;
