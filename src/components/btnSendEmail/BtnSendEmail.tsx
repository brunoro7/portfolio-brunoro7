import React from 'react';
import Props_BtnSendEmail from '../../interfaces/components/Props_BtnSendEmail';

import './style/BtnSendEmail.css';

class BtnSendEmail extends React.Component <Props_BtnSendEmail> {
  render() {
    const { name } = this.props;

    return (
      <button
        type="submit"
        className="box-btnSendEmail text-btnSendEmail"
      >
        {/* <img
          className="iconBtnRepoRedirect"
          src={IconBtnRepoRedirect}
          alt="iconBtn"
        /> */}
        {name}
      </button>
    );
  }
}

export default BtnSendEmail;
