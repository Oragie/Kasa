import './cardGrid.scss'
import Card from "../../components/Card"
import logements from "../../../public/logements.json"

function CardGrid() {

    return (
        <>
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
        </>
    )
}

export default CardGrid
