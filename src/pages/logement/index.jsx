import "./logement.scss";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import { useEffect, useState } from "react";
import { fetchLogements } from "../../api/dataLoader";
import { useParams } from "react-router";
import Error from "../404";

function Logement() {
  const [logements, setLogements] = useState([]);
  const { id } = useParams(); // Récupération de l'ID depuis l'URL

  useEffect(() => {
    async function loadData() {
      const data = await fetchLogements();
      setLogements(data);
    }
    loadData();
  }, []);

  const logement = logements.find((logement) => logement.id === id);

  // Gestion d'un logement non trouvé
  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <Carousel images={logement.pictures} />
      <div className="infosLogement">
        <div className="titleLocationStarsHost">
          <div className="titleLocation">
            <h6>{logement.title}</h6>
            <p className="location">{logement.location}</p>
            <div className="tagList">
              {logement.tags.map((tag, index) => (
                <div key={index} className="tagContent">
                  <div className="tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="starsHost">
            <Rating rating={logement.rating} /> {/* Affichage des étoiles */}
            <div className="hostDetails">
              <p className="host">{logement.host.name}</p>
              <img
                className="hostImg"
                src={logement.host.picture}
                alt={`photo de ${logement.host.name}`}
              />
            </div>
          </div>
        </div>
        <div className="colapseLogement">
          <Collapse
            className="colapseLogementWidth"
            key={`${logement.id}-description`}
            title="Description"
            description={logement.description}
          />
          <Collapse
            className="colapseLogementWidth"
            key={`${logement.id}-equipments`}
            title="Équipements"
            description={logement.equipments}
          />
        </div>
      </div>
    </>
  );
}

export default Logement;
