import React from 'react';
import Props_InputEmailTitle from '../../interfaces/components/Props_InputEmailTitle';
import './style/InputEmailTitle.css';

class InputEmailTitle extends React.Component <Props_InputEmailTitle> {
  render() {
    const { handleChange, inputValue } = this.props;

    return (
      <div className="box-inputEmailTitle">
        <p className="title-inputEmailTitle">Assunto:</p>
        <label htmlFor="inputEmailTitle">
          <input
            className="input-emailTitle"
            type="text"
            placeholder="Título do assunto"
            value={inputValue}
            onChange={(e) => handleChange(String(e.target.value))}
            id="inputEmailTitle"
          />
        </label>
      </div>
    );
  }
}

export default InputEmailTitle;
