import './collapseGallery.scss'
import { useEffect, useState } from 'react';
import { getApropos } from '../../api/api';
import Collapse from '../Collapse'

function CollapseGallery() {

    const [apropos, setApropos] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const data = await getApropos();
        setApropos(data);
      }
      fetchData();
    }, []);

    return (
      <>
          <div className="collapseContent">
              {apropos.map((apropo) => ( 
                <Collapse 
                  key={apropo.id} // Clé unique pour chaque Collapse
                  title={apropo.title}
                  description={apropo.description}
                />
              ))}
          </div>
      </>
  )
  }

  export default CollapseGallery