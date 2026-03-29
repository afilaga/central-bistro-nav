import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Utensils, 
  Gift, 
  Star, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const App = () => {
  const links = [
    {
      title: 'Наш сайт',
      url: 'https://bistro-central.ru/',
      icon: <Globe size={20} />,
      color: '#4A90E2'
    },
    {
      title: 'Меню',
      url: 'https://menu.bistro-central.ru/',
      icon: <Utensils size={20} />,
      color: '#E67E22'
    },
    {
      title: 'Система лояльности',
      url: 'https://form.p-h.app/3b4ab0b7a86caeeb780d9386f45f43fa',
      icon: <Gift size={20} />,
      color: '#D4AF37'
    },
    {
      title: 'Оставить отзыв на Яндекс',
      url: 'https://ya.cc/t/59BI2R2U8LbGQQ',
      icon: <Star size={20} />,
      color: '#FFCC00'
    },
    {
      title: 'Оставить отзыв на 2ГИС',
      url: 'https://2gis.ru/reviews/70000001104625701/addReview?utm_source=lk',
      icon: <MapPin size={20} />,
      color: '#28A745'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/central.bistro.sochi/',
      icon: <InstagramIcon size={20} />,
      color: '#E1306C'
    }
  ];

  return (
    <Container>
      <Header>
        <LogoWrapper
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo src="/logo.png" alt="Central Bistro Logo" />
        </LogoWrapper>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Central Bistro
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Добро пожаловать в наше уютное бистро!
        </Subtitle>
      </Header>

      <LinksContainer>
        {links.map((link, index) => (
          <LinkButton
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 5), duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper style={{ color: link.color }}>
              {link.icon}
            </IconWrapper>
            <LinkTitle>{link.title}</LinkTitle>
            <ArrowWrapper>
              <ExternalLink size={16} opacity={0.3} />
            </ArrowWrapper>
          </LinkButton>
        ))}
      </LinksContainer>

      <Footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Сочи, go.bistro-central.ru
      </Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`;

const LogoWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: #e8e8e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  margin-bottom: 4px;
  padding: 8px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Title = styled(motion.h1)`
  font-family: 'Varela Round', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0;
  letter-spacing: -0.3px;
`;

const Subtitle = styled(motion.p)`
  font-size: 14px;
  color: #666;
  margin: 0;
  opacity: 0.8;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

const LinkButton = styled(motion.a)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 70%;
  padding: 11px 20px;
  background-color: #e0e0e0;
  border-radius: 50px;
  box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
  border: 2px solid rgb(206, 206, 206);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff,
      2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
  }

  &:active {
    box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
    transform: scale(0.97);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: inherit;
`;

const LinkTitle = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #4d4d4d;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled(motion.div)`
  margin-top: 8px;
  font-size: 11px;
  color: #999;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export default App;
