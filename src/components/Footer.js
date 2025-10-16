import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <LogoIcon>🍽️</LogoIcon>
            <LogoText>Mocca House</LogoText>
          </FooterLogo>
          <FooterDescription>
            Kahvenin sadece bir içecek değil, bir deneyim olduğuna inananların buluşma noktası.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
            <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
            <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
            <SocialLink href="#" aria-label="YouTube">📹</SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hızlı Erişim</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">Anasayfa</FooterLink>
            <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
            <FooterLink to="/menu">Menü</FooterLink>
            <FooterLink to="/galeri">Galeri</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hizmetler</FooterTitle>
          <FooterLinks>
            <FooterLink to="/online-siparisler">Online Sipariş</FooterLink>
            <FooterLink to="/subeler">Şubeler</FooterLink>
            <FooterLink to="/iletisim">İletişim</FooterLink>
            <FooterLinkExternal href="#">Kariyer</FooterLinkExternal>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>İletişim</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>İstanbul, Türkiye</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactText>+90 (212) 555 0123</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>✉️</ContactIcon>
              <ContactText>info@moccahouse.com</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>🕐</ContactIcon>
              <ContactText>Pzt-Paz: 08:00 - 23:00</ContactText>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <CopyrightText>
          © {currentYear} Mocca House. Tüm hakları saklıdır.
        </CopyrightText>
        <DeveloperCredit>
          Designed & Developed by <CreditName>Esra Derici</CreditName>
        </DeveloperCredit>
      </FooterBottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 100%;
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 20px 20px;
    gap: 30px;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`

const LogoIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
`

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const FooterDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 25px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding-left: 0;
  
  &:hover {
    color: white;
    padding-left: 10px;
  }
`

const FooterLinkExternal = styled.a`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding-left: 0;
  
  &:hover {
    color: white;
    padding-left: 10px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const ContactIcon = styled.span`
  font-size: 1.2rem;
  margin-top: 2px;
`

const ContactText = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    text-align: center;
  }
`

const CopyrightText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`

const DeveloperCredit = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`

const CreditName = styled.span`
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

export default Footer
