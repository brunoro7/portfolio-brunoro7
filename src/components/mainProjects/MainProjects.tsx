import { useEffect, useState } from 'react';
import getReposByUpdate_at from '../../api/githubServices/getReposByUpdate_at';
import convertDate from '../../helpers/convertDate';
import Props_CardRepo from '../../interfaces/components/Props_CardRepo';
import CardRepo from '../cardRepo/CardRepo';

import './style/MainProjects.css';

function MainProjects() {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    const handleApi = async () => {
      const responseAPI: any = await getReposByUpdate_at();

      setReposList(responseAPI.data);
    };
    handleApi();
  }, []);

  console.log('RENDERIZOU');

  return (
    <div className="box-ListCardsRepo">
      {
        reposList.map((repo: Props_CardRepo) => {
          const created = convertDate(repo.created_at);
          const updated = convertDate(repo.updated_at);

          return (
            (
              <CardRepo
                key={repo.id}
                id={repo.id}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
                created_at={created}
                updated_at={updated}
                svn_url={repo.svn_url}
              />
            )
          );
        })
      }
    </div>
  );
}

export default MainProjects;
