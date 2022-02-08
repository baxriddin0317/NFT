import React, { useRef, useState, useContext } from 'react';
import './Modal.scss';
import { ModalContext } from "../Context/Context";
import Baza from "../../Assets/Data/MOCK_DATA.json";


function Moda({ setNftModal }) {
    const [ appState, changeState ] = useState({
        activeObject: null,
        Data: Baza
    });
    const btnRef = useRef();

    // ======= context =====

    const { setModal } = useContext(ModalContext);

    const toggleActive = (index) => {
        if(appState.activeObject === appState.Data[index]){
            return "item-active";
        }else{
            return "";
        }
    }

  return (
  <div className='modal' onClick={(e) => {
    if (e.target.className === "modal") 
        setNftModal(false);
  }}>
      <div className="modal__content">
          <div className="modal__content-head">
              <h2 className="modal__content-title">
              My NFT`s
              </h2>
              <button className="modal__content-btn">
              Select a Collection
              <i className='bx bxs-chevron-down'></i>
              </button>
          </div>

        {appState.Data.length > 0 && <ul className='modal__list'>
                {appState.Data.map((d, index) => (
                    <li key={d.id} id={d.id} className={`modal__list-item ${toggleActive(index)}`} >
                        <img src={d.image} alt={d.last_name} />
                        <button className='modal__list-btn' onClick={() => {
                            setModal(d);
                            btnRef.current.classList.add("btn-active");
                            
                            changeState({...appState, activeObject: appState.Data[index]});
                        }}>{d.last_name}
                        <i className='bx bx-chevron-right'></i>
                        </button>
                    </li>
                ))}
        </ul>}

        <button ref={btnRef} className='modal__btn' onClick={() => setNftModal(false)}>See Loan  Details  0.2 ETH</button>
      </div>
  </div>
  );
}

export default Moda;
