import { useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useRouteMatch } from 'react-router-dom';
import footerLogo from '../../assets/footerLogo.svg';

const Container = styled('div')({
  background: 'linear-gradient(90deg, #669F89 50%, #9FC181 128%)',
  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '35px 35px 0px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  color: 'white',
  padding: '16px 30px',
});

const Title = styled('span')({
  fontSize: 'large',
  fontWeight: 600,
});

const Link = styled('a')({
  color: 'white',
  textDecoration: 'none',
});

const Footer = () => {
  const theme = useTheme();
  const desktopScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const hide = !useRouteMatch({ path: '/(register|login)', exact: true });
  return (
    <>
      {hide && (
        <Container>
          {desktopScreen ? (
            <Title>Geotagger</Title>
          ) : (
            <img src={footerLogo} alt="Geotagger logo"></img>
          )}
          <span>
            All Rights Reserved | <Link href="https://skillupmentor.com">skillupmentor.com</Link>
          </span>
        </Container>
      )}
    </>
  );
};

export default Footer;
