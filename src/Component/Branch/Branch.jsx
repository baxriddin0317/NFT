import React, { useContext } from 'react';
import Approve from '../Approve/Approve';
import { ModalContext } from '../Context/Context';
import { ProstaContext } from '../Context/ProstaContext';

function Branch() {

  const {setProsta} = useContext(ProstaContext);
  const {m} = useContext(ModalContext);

  return (
    <div className='section'>
      <div className='collateral'>
          <div className="collateral__head">
              <h2 className="collateral__head-title">
              Branch
              <i className='bx bx-info-circle'></i>
              </h2>
              <button className="collateral__head-btn" onClick={() => setProsta(true)} >
              <i className='bx bx-plus'></i>
              </button>
          </div>
          <button className='collateral__btn' onClick={() => setProsta(true)} >
          Select branch to provide liquidity for
          <i className='bx bxs-chevron-down'></i>
          </button>
      
        {m && <div className="collateral__box">
            <img src={m.image} alt="" />
            <p>{m.last_name}</p>
        </div>}
      </div>
      
      <Approve element={m} />
  </div>);
}

export default Branch;
