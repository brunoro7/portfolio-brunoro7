import React from 'react';
import Props_CardRepo from '../../interfaces/components/Props_CardRepo';
// import BtnRepoRedirect from '../BtnRepoRedirect/BtnRepoRedirect';
import './style/CardRepo.css';

class CardRepo extends React.Component <Props_CardRepo> {
  render() {
    const { name, description, topics, created_at, updated_at,
      svn_url } = this.props;
    console.log(svn_url);

    return (
      <div className="box-cardRepo">
        <div className="cardRepo-name">
          <p className="title-name">Nome do Projeto:</p>
          <p className="content-name">{name}</p>
        </div>
        <div className="cardRepo-description">
          <p className="title-description">Descrição:</p>
          <p className="content-description">{description}</p>
        </div>

        <div className="cardRepo-datas">
          <div className="cardRepo-created">
            <p className="title-created">Data de Criação:</p>
            <p className="content-created">{created_at}</p>
          </div>
          <div className="cardRepo-updated">
            <p className="title-updated">Última Atualização:</p>
            <p className="content-updated">{updated_at}</p>
          </div>
        </div>

        <div className="cardRepo-languages">
          <p className="title-languages">Linguagens e Ferramentas:</p>
          <div className="box-fakeBtn-languages">
            {topics.map((item) => (
              <div key={item} className="content-languages">
                <p className="languages-font">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cardRepo-LinkRepo">
          <p className="title-LinkRepo">Acesso ao repositório:</p>
          {/* <BtnRepoRedirect name="Clique aqui" svn_url={svn_url} /> */}
        </div>
      </div>
    );
  }
}

export default CardRepo;
