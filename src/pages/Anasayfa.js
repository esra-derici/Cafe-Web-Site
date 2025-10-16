import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero from '../assets/img/hero.jpg'
import about from '../assets/img/about.jpg'

const Anasayfa = () => {
  return (
    <Container>
      <HeroSection>
        <HeroImage src={hero} alt="Mocca House" />
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Mocca House'a Hoş Geldiniz</HeroTitle>
            <HeroSubtitle>Kahvenin büyülü dünyasında unutulmaz bir deneyim</HeroSubtitle>
            <HeroButtons>
              <PrimaryButton to="/menu">Menümüzü Keşfedin</PrimaryButton>
              <SecondaryButton to="/online-siparisler">Online Sipariş</SecondaryButton>
            </HeroButtons>
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      <AboutSection>
        <AboutImageWrapper>
          <AboutImage src={about} alt="Hakkımızda"/>
          <ImageBadge>
            <BadgeText>2024'ten Beri</BadgeText>
            <BadgeSubtext>Kaliteli Hizmet</BadgeSubtext>
          </ImageBadge>
        </AboutImageWrapper>
        
        <AboutContent>
          <SectionBadge>Hakkımızda</SectionBadge>
          <AboutTitle>Mocca House</AboutTitle>
          <AboutText>
            Mocca House, kahvenin sadece bir içecek değil, bir deneyim olduğuna inananların buluşma noktasıdır. Dünyanın en seçkin çekirdekleri özenle harmanlanır, her fincanda sizi benzersiz bir yolculuğa çıkarır.
          </AboutText>
          <AboutText>
            Modern ve şık atmosferiyle Mocca House, günün koşturmacasında kendinize ayıracağınız en değerli mola alanıdır. İster dostlarınızla sohbet edin, ister tek başınıza ilham dolu anlar yakalayın; size sıcak bir ev konforu sunar.
          </AboutText>
          <AboutText>
            Lezzetli kahvelerimizin yanı sıra özenle hazırlanmış tatlılarımız ve atıştırmalıklarımız da deneyiminizi tamamlar. Her fincan, sizi biraz daha kendinize, biraz daha hayata yaklaştırır.
          </AboutText>
          <LearnMoreButton to="/hakkimizda">Daha Fazla Bilgi</LearnMoreButton>
        </AboutContent>
      </AboutSection>

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>☕</FeatureIcon>
          <FeatureTitle>Premium Kahve</FeatureTitle>
          <FeatureText>Dünya çapında seçilmiş özel çekirdekler</FeatureText>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🍰</FeatureIcon>
          <FeatureTitle>Taze Tatlılar</FeatureTitle>
          <FeatureText>Her gün taze hazırlanan lezzetler</FeatureText>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🏠</FeatureIcon>
          <FeatureTitle>Sıcak Atmosfer</FeatureTitle>
          <FeatureText>Kendinizi evinizde hissedin</FeatureText>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🚀</FeatureIcon>
          <FeatureTitle>Hızlı Servis</FeatureTitle>
          <FeatureText>Online sipariş ve hızlı teslimat</FeatureText>
        </FeatureCard>
      </FeaturesSection>

      <SloganSection>
        <SloganContent>
          <SloganTitle>Kahveden Fazlası, Bir Yaşam Tarzı</SloganTitle>
          <SloganText>
            Mocca House, sadece bir kahve evi değil, şehirde kendinize ait küçük ama değerli bir yaşam alanıdır
          </SloganText>
          <SloganButton to="/iletisim">Bizi Ziyaret Edin</SloganButton>
        </SloganContent>
      </SloganSection>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  min-height: 600px;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 900px;
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: 300;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`

const PrimaryButton = styled(Link)`
  padding: 16px 40px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }
`

const SecondaryButton = styled(Link)`
  padding: 16px 40px;
  background: transparent;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-3px);
  }
`

const AboutSection = styled.section`
  display: flex;
  gap: 60px;
  max-width: 1400px;
  margin: 100px auto;
  padding: 0 40px;
  align-items: center;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    margin: 60px auto;
  }
`

const AboutImageWrapper = styled.div`
  flex: 1;
  position: relative;
`

const AboutImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`

const ImageBadge = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const BadgeText = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
`

const BadgeSubtext = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`

const AboutContent = styled.div`
  flex: 1;
`

const SectionBadge = styled.span`
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
`

const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 25px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 20px;
`

const LearnMoreButton = styled(Link)`
  display: inline-block;
  padding: 14px 35px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  margin-top: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
  }
`

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 80px auto;
  padding: 0 40px;
`

const FeatureCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 15px;
`

const FeatureText = styled.p`
  font-size: 1rem;
  color: #718096;
  line-height: 1.6;
`

const SloganSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 40px;
  margin: 80px 0 0 0;
`

const SloganContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: white;
`

const SloganTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 25px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SloganText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const SloganButton = styled(Link)`
  display: inline-block;
  padding: 16px 45px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }
`

export default Anasayfa
