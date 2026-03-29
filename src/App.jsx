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
  gap: 12px;
  width: 100%;
`;

const LinkButton = styled(motion.a)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 13px 18px;
  background: #e8e8e8;
  border-radius: 14px;
  box-shadow: 5px 5px 10px #c5c5c5, -5px -5px 10px #ffffff;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:active {
    box-shadow: inset 3px 3px 7px #c5c5c5, inset -3px -3px 7px #ffffff;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding: 8px;
  background: #e8e8e8;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #c5c5c5, -3px -3px 6px #ffffff;
`;

const LinkTitle = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #333;
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
