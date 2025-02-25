import logo from "../../assets/img/logo.svg"; // Importation de l'image du logo

function Logo() {
  return <img src={logo} alt="Logo Icon" className="logoIcon" />;
}

function LogoFooter() {
  return <img src={logo} alt="Logo Icon" className="logoIconFooter" />;
}

export default Logo;
export { LogoFooter };
