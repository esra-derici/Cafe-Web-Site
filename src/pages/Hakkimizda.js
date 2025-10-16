import React from 'react'
import styled from 'styled-components'
import aboutimg from '../assets/img/about-img.jpg'
import fotograf1 from '../assets/img/1.jpg'
import fotograf2 from '../assets/img/2.jpg'
import fotograf3 from '../assets/img/3.jpg'
import fotograf4 from '../assets/img/4.jpg'

const Hakkımızda = () => {
  return (
    <Section>
        <Container>
            <Baslik>Hakkımızda</Baslik>
            <AltBaslik>Bu Sayfadan Bizim Hakkımızda Detaylı Bilgi Edinebilirsiniz</AltBaslik>
            
            <Row>
                <ContentCard>
                    <CardBaslik>MoccaHouse</CardBaslik>
                    <CardParagraf>
                        MoccaHouse olarak, 2015 yılından beri İstanbul'un çeşitli noktalarında 
                        kahve severlere hizmet vermekteyiz. Kaliteli kahve deneyimi sunmayı ilke 
                        edinerek, özenle seçilmiş kahve çekirdekleri ile hazırladığımız içeceklerimiz 
                        ve lezzetli atıştırmalıklarımızla müşterilerimize unutulmaz anlar yaşatmayı 
                        hedefliyoruz.
                    </CardParagraf>
                    <CardParagraf>
                        Modern ve sıcak ortamımızda, hem iş toplantılarınız hem de arkadaşlarınızla 
                        keyifli vakit geçirebileceğiniz bir atmosfer sunuyoruz. Deneyimli barista 
                        ekibimiz ve kaliteli ürünlerimizle, her ziyaretinizde size en iyi hizmeti 
                        vermeyi amaçlıyoruz.
                    </CardParagraf>
                </ContentCard>
                <ImageCard>
                    <Img src={aboutimg} alt="MoccaHouse" />
                </ImageCard>
            </Row>

            <EkipSection>
                <Baslik>Ekibimiz</Baslik>
                <AltBaslik>Deneyimli ve Dinamik Bir Ekibe Sahibiz</AltBaslik>
                
                <TeamRow>
                    <TeamCard>
                        <TeamImg src={fotograf1} alt="Ekip Üyesi 1" />
                        <TeamInfo>
                            <TeamName>Ahmet Yılmaz</TeamName>
                            <TeamRole>Baş Barista</TeamRole>
                        </TeamInfo>
                    </TeamCard>

                    <TeamCard>
                        <TeamImg src={fotograf2} alt="Ekip Üyesi 2" />
                        <TeamInfo>
                            <TeamName>Ayşe Kaya</TeamName>
                            <TeamRole>Şef Barista</TeamRole>
                        </TeamInfo>
                    </TeamCard>

                    <TeamCard>
                        <TeamImg src={fotograf3} alt="Ekip Üyesi 3" />
                        <TeamInfo>
                            <TeamName>Mehmet Demir</TeamName>
                            <TeamRole>Barista</TeamRole>
                        </TeamInfo>
                    </TeamCard>

                    <TeamCard>
                        <TeamImg src={fotograf4} alt="Ekip Üyesi 4" />
                        <TeamInfo>
                            <TeamName>Zeynep Şahin</TeamName>
                            <TeamRole>Barista</TeamRole>
                        </TeamInfo>
                    </TeamCard>
                </TeamRow>
            </EkipSection>
        </Container>
    </Section>
  )
}

const Section = styled.section`
    padding: 40px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const Baslik = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 700;
`

const AltBaslik = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 40px;
`

const Row = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 60px;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ContentCard = styled.div`
    flex: 1;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const ImageCard = styled.div`
    flex: 1;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const CardBaslik = styled.h2`
    color: #8b4513;
    font-size: 2rem;
    margin-bottom: 20px;
`

const CardParagraf = styled.p`
    color: #555;
    line-height: 1.8;
    font-size: 1rem;
    margin-bottom: 15px;
    text-align: justify;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const EkipSection = styled.div`
    margin-top: 60px;
`

const TeamRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 30px;
`

const TeamCard = styled.div`
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }
`

const TeamImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`

const TeamInfo = styled.div`
    padding: 20px;
    text-align: center;
`

const TeamName = styled.h3`
    color: #2c3e50;
    font-size: 1.3rem;
    margin-bottom: 5px;
`

const TeamRole = styled.p`
    color: #8b4513;
    font-size: 1rem;
    font-weight: 500;
`

export default Hakkımızda
