import React, { useContext } from 'react';
import Data from "../../Assets/Data/MOCK_DATA.json";
import { ModalContext } from '../Context/Context';
import { ProstaContext } from '../Context/ProstaContext';
import "./Listmodal.scss";

function Listmodal() {
    const {setProsta} = useContext(ProstaContext);
    const {setM} = useContext(ModalContext);
  return <div className='listmodal' onClick={(e) => {
    if (e.target.className === "listmodal") 
        setProsta(false);
  }}>
      <div className="listmodal__content">
          <div className="listmodal__head">
              <h2>Branches</h2>
              <div>
                  <button className='listmodal__head-btn'>Weekly Volume <i className='bx bx-chevron-down-circle'></i></button>
                  <button className='listmodal__head-close' onClick={() => setProsta(false)}><i className='bx bx-x'></i></button>
              </div>
          </div>

            {/* ====== Data render ====== */}
            {Data.length > 0 && <ul className="listmodal__list">
                {Data.map(d => (
                    <li className="listmodal__item" key={d.id} onClick={() => {
                        setM(d);
                        setProsta(false);
                    }}>
                        <div>
                            <img src={d.image} alt="" />
                            <h3 className="listmodal__item-title">
                                {d.last_name}
                            </h3>
                        </div>
                        <div>
                            <span>
                                {d.money}EHT
                            </span>
                            <i className='bx bx-chevron-down'></i>
                        </div>
                    </li>
                ))}
          </ul>}
      </div>

  </div>;
}

export default Listmodal;
