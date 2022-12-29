import React from 'react';
import Props_TxtAreaEmailContent from '../../interfaces/components/Props_TxtAreaEmailContent';
import './style/TxtAreaEmailContent.css';

class TxtAreaEmailContent extends React.Component <Props_TxtAreaEmailContent> {
  render() {
    const { handleChange, inputValue } = this.props;

    const placeholderTxtArea01 = 'Descreva, brevemente, sobre o que deseja conversar.';
    const placeholderTxtArea02 = ' E se possível, acrescente mais contatos.';

    return (
      <div className="box-txtAreaEmailContent">
        <p className="title-txtAreaEmailContent">Conteúdo do email:</p>
        <label htmlFor="txtAreaEmailContent">
          <textarea
            className="txtArea-emailContent"
            placeholder={placeholderTxtArea01 + placeholderTxtArea02}
            value={inputValue}
            onChange={(e) => handleChange(String(e.target.value))}
            id="txtAreaEmailContent"
            rows={10}
            cols={30}
          />
        </label>
      </div>
    );
  }
}

export default TxtAreaEmailContent;
