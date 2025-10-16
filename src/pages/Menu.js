import React, { useState } from 'react'
import styled from 'styled-components'

const Menü = () => {
  const menuData = {
    coffee: [
      { name: 'Single Espresso', price: '200', desc: 'Klasik tek shot espresso' },
      { name: 'Double Espresso', price: '300', desc: 'Çift shot güçlü espresso' },
      { name: 'Ristretto', price: '200', desc: 'Yoğun ve aromatik' },
      { name: 'Single Macchiato', price: '300', desc: 'Süt köpüğüyle tatlandırılmış espresso' },
      { name: 'Double Macchiato', price: '400', desc: 'Çift shot macchiato' },
      { name: 'Espresso Con Panna', price: '300', desc: 'Krem şantiyle servis' },
      { name: 'Cortado', price: '200', desc: 'İspanyol tarzı kahve' },
      { name: 'Flat White', price: '400', desc: 'Kadifemsi süt ve espresso' },
      { name: 'Cappuccino', price: '200', desc: 'Klasik İtalyan kahvesi' },
      { name: 'Cafe Latte', price: '300', desc: 'Kremamsı süt kahvesi' },
      { name: 'Americano', price: '200', desc: 'Sade ve güçlü' },
      { name: 'Iced Americano', price: '300', desc: 'Buzlu americano' },
      { name: 'Iced Latte', price: '300', desc: 'Ferahlatıcı soğuk latte' },
      { name: 'Iced Flat White', price: '200', desc: 'Soğuk flat white' },
      { name: 'Iced Cappucino', price: '200', desc: 'Buzlu cappuccino' },
      { name: 'Turkish Coffee', price: '200', desc: 'Geleneksel Türk kahvesi' },
    ],
    sandwich: [
      { name: 'Elvis Sandwich', price: '400', desc: 'Fıstık ezmesi ve muz' },
      { name: 'Cubono Sandwich', price: '500', desc: 'Küba usulü lezzetli' },
      { name: 'Jambon Sandwich', price: '400', desc: 'Klasik jambon-peynir' },
      { name: 'Caprese Sandwich', price: '500', desc: 'Mozzarella ve fesleğen' },
      { name: 'Monte Cristo Sandwich', price: '700', desc: 'Kızarmış özel sandwich' },
      { name: 'Club Sandwich', price: '500', desc: 'Üç katlı klasik' },
      { name: 'Choripan Sandwich', price: '400', desc: 'Arjantin sosisli' },
      { name: 'Banh Mi Sandwich', price: '600', desc: 'Vietnam tarzı' },
      { name: 'Lomo Sandwich', price: '800', desc: 'Bonfile ekmek arası' },
      { name: 'Casus Sandwich', price: '600', desc: 'Gizli tarifli' },
      { name: 'Çoripan Sandwich', price: '700', desc: 'Baharatlı sosis' },
      { name: 'Tost Skagen', price: '800', desc: 'İsveç karidesi' },
      { name: 'İtalyan Sandwich', price: '900', desc: 'İtalyan lezzetleri' },
      { name: 'Fransız Sandwich', price: '600', desc: 'Baget ekmeğinde' },
      { name: 'Etli Sandwich', price: '1000', desc: 'Özel et karışımı' },
      { name: 'Panini Sandwich', price: '400', desc: 'Izgara panini' },
    ],
    dessert: [
      { name: 'Tiramisu', price: '900', desc: 'İtalyan klasiği' },
      { name: 'Cheesecake', price: '1000', desc: 'Kremalı peynir tatlısı' },
      { name: 'Creme Brûlée', price: '800', desc: 'Karamelize krema' },
      { name: 'Macaron', price: '900', desc: 'Renkli Fransız tatlısı' },
      { name: 'Baklava', price: '1000', desc: 'Antep fıstıklı' },
      { name: 'Profiterol', price: '1000', desc: 'Çikolata soslu' },
      { name: 'Brownie', price: '700', desc: 'Sıcak çikolatalı' },
      { name: 'Gelato', price: '1000', desc: 'İtalyan dondurması' },
      { name: 'Apple Pie', price: '900', desc: 'Elmalı turta' },
      { name: 'Künefe', price: '700', desc: 'Sıcak peynirli tatlı' },
      { name: 'Eclair', price: '900', desc: 'Çikolata kaplı pasta' },
      { name: 'Tres Leches Cake', price: '800', desc: 'Üç sütlü kek' },
      { name: 'Gulab Jamun', price: '600', desc: 'Hint tatlısı' },
      { name: 'Sacher Torte', price: '900', desc: 'Viyana pastası' },
      { name: 'Cannoli', price: '800', desc: 'Sicilya tatlısı' },
      { name: 'Medovik', price: '1000', desc: 'Ballı Rus pastası' },
    ]
  }

  const [activeCategory, setActiveCategory] = useState('coffee')

  return (
    <MenuContainer>
      <HeroSection>
        <MainTitle>Menümüz</MainTitle>
        <SubTitle>Lezzetle hazırlanmış özel tariflerimizi keşfedin</SubTitle>
      </HeroSection>

      <CategoryTabs>
        <TabButton 
          active={activeCategory === 'coffee'} 
          onClick={() => setActiveCategory('coffee')}
        >
          Kahveler
        </TabButton>
        <TabButton 
          active={activeCategory === 'sandwich'} 
          onClick={() => setActiveCategory('sandwich')}
        >
          Sandviçler
        </TabButton>
        <TabButton 
          active={activeCategory === 'dessert'} 
          onClick={() => setActiveCategory('dessert')}
        >
          Tatlılar
        </TabButton>
      </CategoryTabs>

      <MenuGrid>
        {menuData[activeCategory].map((item, index) => (
          <MenuItem key={index}>
            <ItemHeader>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price} ₺</ItemPrice>
            </ItemHeader>
            <ItemDescription>{item.desc}</ItemDescription>
            <PriceTag>
              <span>{item.price} ₺</span>
            </PriceTag>
          </MenuItem>
        ))}
      </MenuGrid>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const SubTitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`

const TabButton = styled.button`
  padding: 15px 35px;
  font-size: 1.1rem;
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
  
  &:active {
    transform: translateY(-1px);
  }
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MenuItem = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    
    &:before {
      transform: scaleX(1);
    }
  }
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 15px;
`

const ItemName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  flex: 1;
  line-height: 1.3;
`

const ItemPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #667eea;
  white-space: nowrap;
`

const ItemDescription = styled.p`
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
`

const PriceTag = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 18px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${MenuItem}:hover & {
    opacity: 1;
  }
`

export default Menü
