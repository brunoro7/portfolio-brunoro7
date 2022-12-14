import React from 'react';
import Props_BtnNavigateBase from '../../interfaces/components/Props_BtnNavigateBase';

import './style/BtnNavigateBase.css';

class BtnNavigateBase extends React.Component <Props_BtnNavigateBase> {
  render() {
    const { handleClick, name, iconBtn } = this.props;

    return (
      <button
        type="button"
        className="box-btnBase text-btnName"
        onClick={handleClick}
      >
        <img
          className="iconBtn"
          src={iconBtn}
          alt="iconBtn"
        />
        {name}
      </button>
    );
  }
}

export default BtnNavigateBase;
