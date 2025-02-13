import Banner from "../../components/Banner"
import homeBanner from "../../assets/img/homeBanner"

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} opacity={0.6}/>
            
        </>
    )
  }
  
export default Home