import React from 'react';
import Props_BtnRepoRedirect from '../../interfaces/components/Props_BtnRepoRedirect';
import IconBtnRepoRedirect from './assets/iconBtnRepoRedirect.svg';

import './style/BtnRepoRedirect.css';

class BtnRepoRedirect extends React.Component <Props_BtnRepoRedirect> {
  render() {
    const { name, svn_url } = this.props;

    return (
      <button
        type="button"
        className="box-btnRepoRedirect text-btnRepoRedirectName"
      >
        <img
          className="iconBtnRepoRedirect"
          src={IconBtnRepoRedirect}
          alt="iconBtn"
        />
        <a
          className="text-btnRepoRedirectName"
          href={svn_url}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </button>
    );
  }
}

export default BtnRepoRedirect;
