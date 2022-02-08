import React, { useContext, useState } from 'react';
import './Main.scss'
import Fixed from "../../Assets/Img/fixed.png";
import Header from '../../Component/Herader/Header';
import { Route, Routes } from 'react-router-dom';
import Collateral from '../../Component/Collateral/Collateral';
import Moda from '../../Component/Modal/Moda';
import Branch from '../../Component/Branch/Branch';
import Listmodal from '../../Component/listModal/Listmodal';
import { ProstaContext } from '../../Component/Context/ProstaContext';

function Main() {
    const [ nftModal, setNftModal ] = useState(false);
    const {prosta} = useContext(ProstaContext);

  return <div className='main'>
      <div className="main__head">
          <img src={Fixed} alt="fixed" />
      </div>
      <h2 className="main__title">
      Choose an NFT you want to take a loan against
      </h2>
      <p className="main__text">
      GET A LOAN IN ETHEREUM FOR COLLATERALIZING YOUR NFT’S
      </p>

      {/* ======= header componet add ====== */}
      <Header />

      {/* ====== routes ====== */}
      <Routes>
          <Route path='/' element={<Collateral setNftModal={setNftModal} />} />
          <Route path='/loans' element={<p>Bu page maketda keltirilmagan :) !!</p>} />
          <Route path='/liquidity' element={<Branch />} />
      </Routes>

      {/* ===== nftModal ==== */}
      {nftModal && <Moda setNftModal={setNftModal} />}

      {/* ===== branchModal ====== */}
      {prosta && <Listmodal />}
  </div>;
}

export default Main;
