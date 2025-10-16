import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <Nav>
      <Container>
        <Logo to="/">
          <LogoIcon>🍽️</LogoIcon>
          <LogoText>Restaurant</LogoText>
        </Logo>

        <Hamburger onClick={toggleMenu} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>

        <MenuWrapper isOpen={isOpen}>
          <Ul>
            <Li>
              <NavLink to="/" active={isActive('/')} onClick={() => setIsOpen(false)}>
                Anasayfa
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/hakkimizda" active={isActive('/hakkimizda')} onClick={() => setIsOpen(false)}>
                Hakkımızda
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/menu" active={isActive('/menu')} onClick={() => setIsOpen(false)}>
                Menü
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/online-siparisler" active={isActive('/online-siparisler')} onClick={() => setIsOpen(false)}>
                Online Sipariş
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/galeri" active={isActive('/galeri')} onClick={() => setIsOpen(false)}>
                Galeri
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/subeler" active={isActive('/subeler')} onClick={() => setIsOpen(false)}>
                Şubeler
              </NavLink>
            </Li>
            <Li>
              <NavLink to="/iletisim" active={isActive('/iletisim')} onClick={() => setIsOpen(false)}>
                İletişim
              </NavLink>
            </Li>
          </Ul>
        </MenuWrapper>
      </Container>
    </Nav>
  )
}

const Nav = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const LogoIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
`

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  z-index: 1001;
  
  span {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  ${props => props.isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(8px, -8px);
    }
  `}
  
  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuWrapper = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
`

const Ul = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 0;
    width: 100%;
  }
`

const Li = styled.li`
  @media (max-width: 768px) {
    width: 100%;
  }
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  
  &:before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 2px;
    background: white;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    
    &:before {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding: 15px 20px;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      transform: translateY(0);
      background: rgba(255, 255, 255, 0.15);
      padding-left: 30px;
    }
  }
`

export default Navbar
