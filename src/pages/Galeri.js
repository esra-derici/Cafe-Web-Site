import React, { useState } from 'react'
import styled from 'styled-components'
import hero1 from '../assets/img/hero1.jpg'
import about1 from '../assets/img/about1.jpg'
import hero2 from '../assets/img/hero2.jpg'
import about2 from '../assets/img/about2.jpg'
import hero3 from '../assets/img/hero3.jpg'
import about3 from '../assets/img/about3.jpg'
import hero4 from '../assets/img/hero4.jpg'
import about4 from '../assets/img/about4.jpg'

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')

    const images = [
        { id: 1, src: hero1, category: 'interior', title: 'Modern Atmosfer' },
        { id: 2, src: hero2, category: 'interior', title: 'Şık Mekan' },
        { id: 3, src: hero3, category: 'interior', title: 'Rahat Ortam' },
        { id: 4, src: hero4, category: 'interior', title: 'Zarif Tasarım' },
        { id: 5, src: about1, category: 'food', title: 'Lezzetli Yemekler' },
        { id: 6, src: about2, category: 'food', title: 'Özel Tarifler' },
        { id: 7, src: about3, category: 'food', title: 'Taze Ürünler' },
        { id: 8, src: about4, category: 'food', title: 'Premium Kahve' },
    ]

    const filteredImages = activeFilter === 'all' 
        ? images 
        : images.filter(img => img.category === activeFilter)

    const openLightbox = (image) => {
        setSelectedImage(image)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
    }

    return (
        <Container>
            <Header>
                <Title>Galeri</Title>
                <Subtitle>Mocca House'dan Görsel Anlar</Subtitle>
            </Header>

            <FilterSection>
                <FilterButton 
                    active={activeFilter === 'all'} 
                    onClick={() => setActiveFilter('all')}
                >
                    Tümü
                </FilterButton>
                <FilterButton 
                    active={activeFilter === 'interior'} 
                    onClick={() => setActiveFilter('interior')}
                >
                    Mekan
                </FilterButton>
                <FilterButton 
                    active={activeFilter === 'food'} 
                    onClick={() => setActiveFilter('food')}
                >
                    Lezzetler
                </FilterButton>
            </FilterSection>

            <GalleryGrid>
                {filteredImages.map((image) => (
                    <GalleryItem key={image.id} onClick={() => openLightbox(image)}>
                        <GalleryImage src={image.src} alt={image.title} />
                        <ImageOverlay>
                            <ImageTitle>{image.title}</ImageTitle>
                            <ViewIcon>🔍</ViewIcon>
                        </ImageOverlay>
                    </GalleryItem>
                ))}
            </GalleryGrid>

            {selectedImage && (
                <Lightbox onClick={closeLightbox}>
                    <LightboxContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={closeLightbox}>✕</CloseButton>
                        <LightboxImage src={selectedImage.src} alt={selectedImage.title} />
                        <LightboxTitle>{selectedImage.title}</LightboxTitle>
                    </LightboxContent>
                </Lightbox>
            )}
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 40px 20px;
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 50px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    max-width: 1400px;
    margin: 0 auto 50px;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 2px;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 300;
`

const FilterSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 50px;
    flex-wrap: wrap;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
`

const FilterButton = styled.button`
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
    color: ${props => props.active ? 'white' : '#333'};
    box-shadow: ${props => props.active ? '0 8px 25px rgba(102, 126, 234, 0.4)' : '0 4px 15px rgba(0, 0, 0, 0.1)'};
    transform: ${props => props.active ? 'translateY(-2px)' : 'none'};
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(102, 126, 234, 0.5);
    }
`

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    }
`

const GalleryItem = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    aspect-ratio: 1;
    background: white;
    
    &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }
    
    &:hover > div {
        opacity: 1;
    }
`

const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${GalleryItem}:hover & {
        transform: scale(1.1);
    }
`

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
`

const ImageTitle = styled.h3`
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const ViewIcon = styled.span`
    font-size: 3rem;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`

const Lightbox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const LightboxContent = styled.div`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: scaleIn 0.3s ease;
    
    @keyframes scaleIn {
        from {
            transform: scale(0.8);
        }
        to {
            transform: scale(1);
        }
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: -50px;
    right: 0;
    background: white;
    color: #333;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    
    &:hover {
        transform: rotate(90deg) scale(1.1);
        background: #e53e3e;
        color: white;
    }
    
    @media (max-width: 768px) {
        top: -60px;
    }
`

const LightboxImage = styled.img`
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`

const LightboxTitle = styled.h2`
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 25px;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`

export default Galeria
