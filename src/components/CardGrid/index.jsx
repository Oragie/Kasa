import "./cardGrid.scss";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { fetchLogements } from "../../api/dataLoader";

function CardGrid() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchLogements();
      setLogements(data);
    }
    fetchData();
  }, []);

  return (
    <div className="cardContent">
      {logements.map((logement) => (
        <Card
          key={logement.id} // Clé unique pour chaque Card
          id={logement.id}
          title={logement.title}
          image={logement.cover}
        />
      ))}
    </div>
  );
}

export default CardGrid;
