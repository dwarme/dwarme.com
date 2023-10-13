import Section from "../../layout/Section/Section";

interface FooterProps {
    copyright: string;
    legalLinks: {
        title: string;
        link: string;
    }[];
    //Choose language, country or region
    localeLink: {
        title: string;
        link: string;
        linkTitle?: string;
        onClick?: Function;
    }
}

const Footer: React.FC<FooterProps> = ({ copyright, legalLinks, localeLink }) => {
    return (

        <footer className="ks-footer">
            <Section>
                <Section.Content>

                    <div className="ks-footer-locale">
                        <a className="ks-footer-locale-link" href={localeLink.link} title={localeLink.linkTitle} >{localeLink.title}</a>
                    </div>
                    <div className="ks-footer-legal">
                        <div className="ks-footer-legal-copyright">{copyright}</div>
                        <ul className="ks-footer-legal-links">
                            {legalLinks.map(legal =>
                                <li className="ks-footer-legal-links-item" >
                                    <a
                                        className="ks-footer-legal-link"
                                        href={legal.link}
                                    >
                                        {legal.title}
                                    </a>
                                </li>
                            )}

                        </ul>
                    </div>
                </Section.Content>
            </Section>
        </footer>

    );
}

export default Footer;