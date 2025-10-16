import React from 'react'
import styled from 'styled-components'

const Subeler = () => {
    const subeler = [
        {
            id: 1,
            isim: "Ataşehir Şubesi",
            adres: "Barbaros Mah. Mor Sümbül Sk. No:7/A Ataşehir, İstanbul",
            telefon: "(0216) 470 45 45",
            email: "atasehir@moccahouse.com",
            calisma: "Pazartesi - Pazar: 08:00 - 23:00",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2637798574744!2d29.116686776530845!3d40.98437297135771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5ff013f5197%3A0xb59c129e51d7b8b8!2zQXRhxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1728747383256!5m2!1str!2str"
        },
        {
            id: 2,
            isim: "Kalamış Şubesi",
            adres: "Caferağa Mah. Moda Cad. No:128 Kadıköy, İstanbul",
            telefon: "(0216) 338 22 33",
            email: "kalamis@moccahouse.com",
            calisma: "Pazartesi - Pazar: 08:00 - 23:00",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.0854877547895!2d29.02582937652978!3d40.96802427135929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9d32a8e0b25%3A0x7c9a8f4d2e0c8a4f!2sKalam%C4%B1%C5%9F%2C%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1728747483256!5m2!1str!2str"
        },
        {
            id: 3,
            isim: "Bağdat Caddesi Şubesi",
            adres: "Suadiye Mah. Bağdat Cad. No:432/A Kadıköy, İstanbul",
            telefon: "(0216) 385 55 66",
            email: "bagdat@moccahouse.com",
            calisma: "Pazartesi - Pazar: 08:00 - 23:00",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.594869785463!2d29.062894376529463!3d40.95753337136033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8f0c5b3e8c5%3A0x7d8a9e1f3c4b5d6e!2zQmHEn2RhdCBDZC4sIEthZMSxa8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1728747583256!5m2!1str!2str"
        }
    ]

    return (
        <Section>
            <Container>
                <Baslik>ŞUBELERİMİZ</Baslik>
                <AltBaslik>İstanbul'un farklı noktalarında sizlere hizmet veriyoruz</AltBaslik>
                
                <Row>
                    {subeler.map((sube) => (
                        <Card key={sube.id}>
                            <CardHeader>
                                <SubeIsim>{sube.isim}</SubeIsim>
                            </CardHeader>
                            
                            <MapContainer>
                                <iframe 
                                    src={sube.mapUrl}
                                    height="250" 
                                    allowFullScreen="" 
                                    style={{ width: '100%', border: 0, borderRadius: '8px' }} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={sube.isim}
                                ></iframe>
                            </MapContainer>
                            
                            <CardBody>
                                <InfoItem>
                                    <Icon>📍</Icon>
                                    <InfoText>{sube.adres}</InfoText>
                                </InfoItem>
                                
                                <InfoItem>
                                    <Icon>📞</Icon>
                                    <InfoText>{sube.telefon}</InfoText>
                                </InfoItem>
                                
                                <InfoItem>
                                    <Icon>✉️</Icon>
                                    <InfoText>{sube.email}</InfoText>
                                </InfoItem>
                                
                                <InfoItem>
                                    <Icon>🕐</Icon>
                                    <InfoText>{sube.calisma}</InfoText>
                                </InfoItem>
                            </CardBody>
                        </Card>
                    ))}
                </Row>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding: 60px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
`

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`

const Baslik = styled.h1`
    color: white;
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const AltBaslik = styled.p`
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 50px;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
    }
`

const CardHeader = styled.div`
    background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
    padding: 20px;
`

const SubeIsim = styled.h3`
    color: white;
    font-size: 1.5rem;
    margin: 0;
    font-weight: 600;
`

const MapContainer = styled.div`
    width: 100%;
    height: 250px;
    background: #f0f0f0;
`

const CardBody = styled.div`
    padding: 25px;
`

const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    
    &:last-child {
        margin-bottom: 0;
    }
`

const Icon = styled.span`
    font-size: 1.2rem;
    margin-right: 12px;
    min-width: 25px;
`

const InfoText = styled.p`
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
`

export default Subeler
