import React from "react"
import PropTypes from 'prop-types';
import FooterSvg from "../assets/footer.svg";
import "./footer.scss";
import SocialLink from "./simple/socialLink";
import Title from "./simple/title";

const Footer = ({
  externalLinks,
  alecHead
}) => (
  <footer className="footer">
    <div className="common--max-width">
      <div className="footer--row">
        <div className="footer--column footer--index">
          <Title invert={true} variant="h2">Alec Di Vito</Title>
          <ul className="footer__list">{externalLinks.map(s => <li key={s.id} className="footer__list__item"><SocialLink className="footer__list__item--social" invert {...s} /></li>)}</ul>
        </div>
        <div className="footer--column footer--index">
          <Title invert={true} variant="h4">Software Developer</Title>
          <Title invert={true} variant="h4" className="footer__email--mobile">
            <span className="footer__email">
              View my resume for my email
            </span>
          </Title>
        </div>
        <div className="footer--index footer__bottom">
          <div className="footer__bottom--head">{alecHead}</div>
          <p style={{ zIndex: 300 }}>Made with <span role="img" aria-label="love">❤️</span> by <a className="link--plain" href="https://val-z.com">Valeriia Zub</a> and <a className="link--plain" href="https://alecdivito.github.io">Alec Di Vito</a></p>
        </div>
      </div>
    </div>
    <div className="footer--curve">
      <FooterSvg />
    </div>
  </footer>
)

Footer.propTypes = {
  externalLinks: PropTypes.arrayOf(PropTypes.exact({
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
}

export default Footer;