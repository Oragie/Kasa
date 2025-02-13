import Logo from "../Logo";

function Footer({ name }) {
    return (
        <footer className="footer">
            <p>© 2023 {name}. Tous droits réservés.</p>
            <Logo />
        </footer>
    );
}

export default Footer;