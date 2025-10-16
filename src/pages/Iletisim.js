import React, { useState } from 'react'
import styled from 'styled-components'

const Iletisim = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            
            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(''), 3000)
        }, 2000)
    }

    return (
        <Container>
            <HeroSection>
                <HeroOverlay>
                    <HeroContent>
                        <HeroTitle>İletişim</HeroTitle>
                        <HeroSubtitle>Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız</HeroSubtitle>
                    </HeroContent>
                </HeroOverlay>
            </HeroSection>

            <MainContent>
                <ContactGrid>
                    <ContactFormSection>
                        <SectionBadge>İletişim Formu</SectionBadge>
                        <FormTitle>Mesajınızı Gönderin</FormTitle>
                        <FormDescription>
                            Sorularınız, önerileriniz veya rezervasyon talepleriniz için bizimle iletişime geçin. 
                            En kısa sürede size dönüş yapacağız.
                        </FormDescription>
                        
                        <Form onSubmit={handleSubmit}>
                            <FormRow>
                                <InputGroup>
                                    <Label htmlFor="name">Ad Soyad *</Label>
                                    <Input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Adınızı ve soyadınızı giriniz"
                                        required
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label htmlFor="email">E-posta *</Label>
                                    <Input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="ornek@email.com"
                                        required
                                    />
                                </InputGroup>
                            </FormRow>
                            
                            <FormRow>
                                <InputGroup>
                                    <Label htmlFor="phone">Telefon</Label>
                                    <Input 
                                        type="tel" 
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+90 5XX XXX XX XX"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Label htmlFor="subject">Konu</Label>
                                    <Select 
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Konu seçiniz</option>
                                        <option value="genel">Genel Bilgi</option>
                                        <option value="rezervasyon">Rezervasyon</option>
                                        <option value="sikayet">Şikayet</option>
                                        <option value="oneriler">Öneriler</option>
                                        <option value="diger">Diğer</option>
                                    </Select>
                                </InputGroup>
                            </FormRow>
                            
                            <InputGroup>
                                <Label htmlFor="message">Mesajınız *</Label>
                                <TextArea 
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Mesajınızı buraya yazınız..."
                                    rows="5"
                                    required
                                />
                            </InputGroup>
                            
                            <SubmitButton type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                            </SubmitButton>
                            
                            {submitStatus === 'success' && (
                                <SuccessMessage>
                                    ✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                </SuccessMessage>
                            )}
                        </Form>
                    </ContactFormSection>

                    <ContactInfoSection>
                        <SectionBadge>İletişim Bilgileri</SectionBadge>
                        <InfoTitle>Bizimle İletişime Geçin</InfoTitle>
                        <InfoDescription>
                            Mocca House'a gelmek, rezervasyon yapmak veya herhangi bir sorunuz için 
                            aşağıdaki bilgileri kullanabilirsiniz.
                        </InfoDescription>

                        <ContactCards>
                            <ContactCard>
                                <ContactIcon>📞</ContactIcon>
                                <ContactInfo>
                                    <ContactLabel>Telefon</ContactLabel>
                                    <ContactValue>+90 532 345 45 45</ContactValue>
                                    <ContactSubtext>Pazartesi - Pazar: 08:00 - 22:00</ContactSubtext>
                                </ContactInfo>
                            </ContactCard>

                            <ContactCard>
                                <ContactIcon>✉️</ContactIcon>
                                <ContactInfo>
                                    <ContactLabel>E-posta</ContactLabel>
                                    <ContactValue>MoccaHouse@hotmail.com</ContactValue>
                                    <ContactSubtext>24 saat içinde yanıt veriyoruz</ContactSubtext>
                                </ContactInfo>
                            </ContactCard>

                            <ContactCard>
                                <ContactIcon>📍</ContactIcon>
                                <ContactInfo>
                                    <ContactLabel>Adres</ContactLabel>
                                    <ContactValue>Kadıköy/İstanbul</ContactValue>
                                    <ContactSubtext>Metro ve otobüs duraklarına yakın</ContactSubtext>
                                </ContactInfo>
                            </ContactCard>

                            <ContactCard>
                                <ContactIcon>🕒</ContactIcon>
                                <ContactInfo>
                                    <ContactLabel>Çalışma Saatleri</ContactLabel>
                                    <ContactValue>Her Gün: 08:00 - 22:00</ContactValue>
                                    <ContactSubtext>Özel günlerde değişiklik olabilir</ContactSubtext>
                                </ContactInfo>
                            </ContactCard>
                        </ContactCards>

                        <SocialSection>
                            <SocialTitle>Sosyal Medya</SocialTitle>
                            <SocialLinks>
                                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                                    <SocialIcon>📘</SocialIcon>
                                    <span>Facebook</span>
                                </SocialLink>
                                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                                    <SocialIcon>📷</SocialIcon>
                                    <span>Instagram</span>
                                </SocialLink>
                                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                                    <SocialIcon>🐦</SocialIcon>
                                    <span>Twitter</span>
                                </SocialLink>
                            </SocialLinks>
                        </SocialSection>
                    </ContactInfoSection>
                </ContactGrid>

                <MapSection>
                    <SectionBadge>Konum</SectionBadge>
                    <MapTitle>Bizi Ziyaret Edin</MapTitle>
                    <MapDescription>
                        Kadıköy'deki merkezi konumumuzda sizi ağırlamaktan mutluluk duyarız.
                    </MapDescription>
                    <MapContainer>
                        <MapPlaceholder>
                            <MapIcon>🗺️</MapIcon>
                            <MapText>Harita Yükleniyor...</MapText>
                            <MapAddress>Kadıköy, İstanbul</MapAddress>
                        </MapPlaceholder>
                    </MapContainer>
                </MapSection>
            </MainContent>
        </Container>
    )
}

// Container and Layout
const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
`

const HeroSection = styled.section`
    position: relative;
    height: 60vh;
    min-height: 400px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeroContent = styled.div`
    text-align: center;
    color: white;
    padding: 20px;
    max-width: 800px;
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
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const HeroSubtitle = styled.p`
    font-size: 1.3rem;
    font-weight: 300;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const MainContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 40px;
    
    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin-bottom: 80px;
    
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`

// Form Section
const ContactFormSection = styled.div`
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
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

const FormTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`

const FormDescription = styled.p`
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 30px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 8px;
`

const Input = styled.input`
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8fafc;
    
    &:focus {
        outline: none;
        border-color: #667eea;
        background: white;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
        color: #a0aec0;
    }
`

const Select = styled.select`
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8fafc;
    cursor: pointer;
    
    &:focus {
        outline: none;
        border-color: #667eea;
        background: white;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
`

const TextArea = styled.textarea`
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8fafc;
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
    
    &:focus {
        outline: none;
        border-color: #667eea;
        background: white;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
        color: #a0aec0;
    }
`

const SubmitButton = styled.button`
    padding: 16px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    align-self: flex-start;
    
    &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
    }
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
`

const SuccessMessage = styled.div`
    padding: 15px 20px;
    background: #f0fff4;
    border: 2px solid #68d391;
    border-radius: 10px;
    color: #22543d;
    font-weight: 600;
    margin-top: 10px;
    animation: slideIn 0.3s ease-out;
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

// Contact Info Section
const ContactInfoSection = styled.div`
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`

const InfoTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`

const InfoDescription = styled.p`
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 30px;
`

const ContactCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
`

const ContactCard = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 15px;
    transition: all 0.3s ease;
    
    &:hover {
        background: #edf2f7;
        transform: translateX(5px);
    }
`

const ContactIcon = styled.div`
    font-size: 2rem;
    min-width: 60px;
    text-align: center;
`

const ContactInfo = styled.div`
    flex: 1;
`

const ContactLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 5px;
`

const ContactValue = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 5px;
`

const ContactSubtext = styled.div`
    font-size: 0.85rem;
    color: #718096;
`

const SocialSection = styled.div`
    border-top: 2px solid #e2e8f0;
    padding-top: 30px;
`

const SocialTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
`

const SocialLinks = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: #f8fafc;
    border-radius: 25px;
    text-decoration: none;
    color: #4a5568;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }
`

const SocialIcon = styled.span`
    font-size: 1.2rem;
`

// Map Section
const MapSection = styled.section`
    text-align: center;
    margin-top: 40px;
`

const MapTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`

const MapDescription = styled.p`
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

const MapContainer = styled.div`
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    height: 400px;
`

const MapPlaceholder = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
    color: #4a5568;
`

const MapIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 20px;
`

const MapText = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
`

const MapAddress = styled.div`
    font-size: 1rem;
    color: #718096;
`


export default Iletisim
