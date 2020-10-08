import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights } from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/signin">Submit Video</FooterLink>
                <FooterLink to="/signin">Ambassadors</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Influencers</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Destinations</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">YouTube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

          </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>dolla</SocialLogo>
                    <WebsiteRights>dolla <span>&copy;</span> { new Date().getFullYear() } All rights reversed</WebsiteRights>
                    
                    <SocialIcons>
                      <SocialIconLink href="/" target="_blank" aria-label="Facebook" >
                        <FaFacebook />
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                        <FaInstagram />
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="YouTube" >
                        <FaYoutube />
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Twiiter" >
                        <FaTwitter />
                      </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
