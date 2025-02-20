import './collapseGallery.scss'
import apropos from "../../../public/apropos.json"
import Collapse from '../Collapse'

function CollapseGallery() {

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