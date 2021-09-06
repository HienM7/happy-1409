/* eslint-disable jsx-a11y/alt-text */
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import "./styles.css";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="20px" height="20px" />
      </a>
    );
  };

  return (
    <>
      <div className="footer-container">
        <Container>
          <div className="icon-social">
            <SocialLink href="https://github.com" src="github.svg" />
            <SocialLink href="https://twitter.com" src="twitter.svg" />
            <SocialLink href="https://www.linkedin.com/" src="linkedin.svg" />
            <SocialLink href="https://medium.com" src="medium.svg" />
          </div>
          <div className="note">
            Made by Helios
            <img
              src="/img/svg/cat.png"
              width="15px"
              style={{ position: "relative", bottom: 2, left: 5 }}
            />
          </div>
          <div className="info">© 2021</div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
