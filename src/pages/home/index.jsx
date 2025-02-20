import Banner from "../../components/Banner"
import homeBanner from "../../assets/img/homeBanner"
import CardGrid from "../../components/CardGrid"

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} opacity={0.6}/>
            <CardGrid />
        </>
    )
  }
  
export default Home