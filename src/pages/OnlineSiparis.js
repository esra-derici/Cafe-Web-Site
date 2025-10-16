import React, { useState } from 'react'
import styled from 'styled-components'

const OnlineSipariş = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  })

  const menuData = {
    coffee: [
      { id: 1, name: 'Single Espresso', price: 200, category: 'coffee' },
      { id: 2, name: 'Double Espresso', price: 300, category: 'coffee' },
      { id: 3, name: 'Cappuccino', price: 200, category: 'coffee' },
      { id: 4, name: 'Cafe Latte', price: 300, category: 'coffee' },
      { id: 5, name: 'Americano', price: 200, category: 'coffee' },
      { id: 6, name: 'Flat White', price: 400, category: 'coffee' },
      { id: 7, name: 'Turkish Coffee', price: 200, category: 'coffee' },
      { id: 8, name: 'Iced Latte', price: 300, category: 'coffee' },
    ],
    sandwich: [
      { id: 9, name: 'Club Sandwich', price: 500, category: 'sandwich' },
      { id: 10, name: 'Caprese Sandwich', price: 500, category: 'sandwich' },
      { id: 11, name: 'Monte Cristo Sandwich', price: 700, category: 'sandwich' },
      { id: 12, name: 'İtalyan Sandwich', price: 900, category: 'sandwich' },
      { id: 13, name: 'Etli Sandwich', price: 1000, category: 'sandwich' },
      { id: 14, name: 'Panini Sandwich', price: 400, category: 'sandwich' },
    ],
    dessert: [
      { id: 15, name: 'Tiramisu', price: 900, category: 'dessert' },
      { id: 16, name: 'Cheesecake', price: 1000, category: 'dessert' },
      { id: 17, name: 'Brownie', price: 700, category: 'dessert' },
      { id: 18, name: 'Profiterol', price: 1000, category: 'dessert' },
      { id: 19, name: 'Baklava', price: 1000, category: 'dessert' },
      { id: 20, name: 'Künefe', price: 700, category: 'dessert' },
    ]
  }

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId)
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleInputChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert('Sepetiniz boş! Lütfen ürün ekleyin.')
      return
    }
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      alert('Lütfen tüm zorunlu alanları doldurun.')
      return
    }
    alert('Siparişiniz alındı! En kısa sürede size ulaşacağız.')
    setCart([])
    setOrderForm({ name: '', phone: '', address: '', note: '' })
  }

  return (
    <Container>
      <Header>
        <Title>Online Sipariş</Title>
        <Subtitle>Sevdiğiniz lezzetleri kapınıza kadar getirelim</Subtitle>
      </Header>

      <MainContent>
        <ProductsSection>
          <CategoryTabs>
            <CategoryTab
              active={activeCategory === 'coffee'}
              onClick={() => setActiveCategory('coffee')}
            >
              Kahveler
            </CategoryTab>
            <CategoryTab
              active={activeCategory === 'sandwich'}
              onClick={() => setActiveCategory('sandwich')}
            >
              Sandviçler
            </CategoryTab>
            <CategoryTab
              active={activeCategory === 'dessert'}
              onClick={() => setActiveCategory('dessert')}
            >
              Tatlılar
            </CategoryTab>
          </CategoryTabs>

          <ProductGrid>
            {menuData[activeCategory].map((item) => (
              <ProductCard key={item.id}>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>{item.price} ₺</ProductPrice>
                <AddButton onClick={() => addToCart(item)}>
                  Sepete Ekle +
                </AddButton>
              </ProductCard>
            ))}
          </ProductGrid>
        </ProductsSection>

        <OrderSection>
          <CartHeader>
            <CartTitle>Sepetim ({cart.length})</CartTitle>
            <CartIcon onClick={() => setShowCart(!showCart)}>
              🛒
            </CartIcon>
          </CartHeader>

          <CartContent show={showCart}>
            {cart.length === 0 ? (
              <EmptyCart>Sepetiniz boş</EmptyCart>
            ) : (
              <>
                <CartItems>
                  {cart.map((item) => (
                    <CartItem key={item.id}>
                      <ItemInfo>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>{item.price} ₺</ItemPrice>
                      </ItemInfo>
                      <QuantityControls>
                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          -
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </QuantityButton>
                      </QuantityControls>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        ✕
                      </RemoveButton>
                    </CartItem>
                  ))}
                </CartItems>

                <TotalSection>
                  <TotalLabel>Toplam:</TotalLabel>
                  <TotalPrice>{getTotalPrice()} ₺</TotalPrice>
                </TotalSection>

                <OrderFormSection>
                  <FormTitle>Teslimat Bilgileri</FormTitle>
                  <OrderFormElement onSubmit={handleSubmitOrder}>
                    <FormGroup>
                      <Label>Ad Soyad *</Label>
                      <Input
                        type="text"
                        name="name"
                        value={orderForm.name}
                        onChange={handleInputChange}
                        placeholder="Adınız ve soyadınız"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Telefon *</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={orderForm.phone}
                        onChange={handleInputChange}
                        placeholder="0555 555 5555"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Adres *</Label>
                      <TextArea
                        name="address"
                        value={orderForm.address}
                        onChange={handleInputChange}
                        placeholder="Teslimat adresiniz"
                        rows="3"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Sipariş Notu</Label>
                      <TextArea
                        name="note"
                        value={orderForm.note}
                        onChange={handleInputChange}
                        placeholder="Özel istekleriniz (opsiyonel)"
                        rows="2"
                      />
                    </FormGroup>
                    <SubmitButton type="submit">
                      Siparişi Tamamla
                    </SubmitButton>
                  </OrderFormElement>
                </OrderFormSection>
              </>
            )}
          </CartContent>
        </OrderSection>
      </MainContent>
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
`

const MainContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const ProductsSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const CategoryTabs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`

const CategoryTab = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  box-shadow: ${props => props.active ? '0 5px 15px rgba(102, 126, 234, 0.3)' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`

const ProductCard = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
`

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 10px;
`

const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 15px;
`

const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`

const OrderSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
  
  @media (max-width: 968px) {
    position: static;
  }
`

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
`

const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
`

const CartIcon = styled.span`
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  
  @media (min-width: 969px) {
    display: none;
  }
`

const CartContent = styled.div`
  @media (max-width: 968px) {
    display: ${props => props.show ? 'block' : 'none'};
  }
`

const EmptyCart = styled.p`
  text-align: center;
  color: #718096;
  padding: 40px 20px;
  font-size: 1.1rem;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 3px;
  }
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
`

const ItemInfo = styled.div`
  flex: 1;
`

const ItemName = styled.div`
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 5px;
`

const ItemPrice = styled.div`
  color: #667eea;
  font-weight: 700;
`

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: #667eea;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    background: #764ba2;
  }
`

const Quantity = styled.span`
  font-weight: 700;
  min-width: 25px;
  text-align: center;
`

const RemoveButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    transform: scale(1.1);
    background: #c53030;
  }
`

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  margin-bottom: 25px;
`

const TotalLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
`

const TotalPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
`

const OrderFormSection = styled.div``

const FormTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 20px;
`

const OrderFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-weight: 600;
  color: #4a5568;
  font-size: 0.95rem;
`

const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const SubmitButton = styled.button`
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
`

export default OnlineSipariş
