import React from 'react';
import Props_InputContactName from '../../interfaces/components/Props_InputContactName';
import './style/InputContactName.css';

class InputContactName extends React.Component <Props_InputContactName> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputContactName">
        <p className="title-inputContactName">Nome:</p>
        <label htmlFor="inputContactName">
          <input
            className="input-contactName"
            type="text"
            placeholder="Digite seu nome"
            value={inputValue}
            onChange={(e) => handleChange(String(e.target.value))}
            id="inputContactName"
          />
        </label>
      </div>
    );
  }
}

export default InputContactName;
