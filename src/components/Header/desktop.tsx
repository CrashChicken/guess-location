import { styled } from '@mui/system';
import headerLogo from '../../assets/headerLogo.svg';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
});

const HeaderDesktop = () => {
  return (
    <Container>
      <div>
        <img src={headerLogo} alt="Geotagger logo" width="50px" height="50px" />
        <span>Geotagger</span>
      </div>
    </Container>
  );
};

export default HeaderDesktop;
