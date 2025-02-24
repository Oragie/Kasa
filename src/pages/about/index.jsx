import "./about.scss";
import Banner from "../../components/Banner";
import AboutBanner from "../../assets/img/aboutBanner.png";
import { useEffect, useState } from "react";
import { fetchApropos } from "../../api/dataLoader";
import Collapse from "../../components/Collapse";

function About() {
  const [apropos, setApropos] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchApropos();
      setApropos(data);
    }
    loadData();
  }, []);

  return (
    <>
      <Banner title="" image={AboutBanner} opacity={0.3} />
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
  );
}

export default About;
