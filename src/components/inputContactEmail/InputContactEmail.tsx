import React from 'react';
import Props_InputContactEmail from '../../interfaces/components/Props_InputContacEmail';
import './style/InputContactEmail.css';

class InputContactEmail extends React.Component <Props_InputContactEmail> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputContactEmail">
        <p className="title-inputContactEmail">Email:</p>
        <label htmlFor="inputContactEmail">
          <input
            className="input-contactEmail"
            type="text"
            placeholder="Digite seu email"
            value={inputValue}
            onChange={(e) => handleChange(String(e.target.value))}
            id="inputContactEmail"
          />
        </label>
      </div>
    );
  }
}

export default InputContactEmail;
