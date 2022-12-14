import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnNavigateBase from '../btnNavigateBase/BtnNavigateBase';
import iconBtnHome from './assets/iconBtnHome.svg';
import iconBtnProjetos from './assets/iconBtnProjetos.svg';
import iconBtnContato from './assets/iconBtnContato.svg';

import './style/HeaderNav.css';

function HeaderNav() {
  const navigate = useNavigate();
  return (
    <div className="box-Navigation">

      <BtnNavigateBase
        name="Página Inicial"
        iconBtn={iconBtnHome}
        handleClick={() => navigate('/home')}
      />
      <BtnNavigateBase
        name="Projetos"
        iconBtn={iconBtnProjetos}
        handleClick={() => navigate('/projects')}
      />
      <BtnNavigateBase
        name="Contato"
        iconBtn={iconBtnContato}
        handleClick={() => navigate('/contact')}
      />
    </div>
  );
}

export default HeaderNav;
