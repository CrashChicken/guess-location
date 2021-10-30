import { styled } from '@mui/system';
import headerLogo from '../../assets/headerLogo.svg';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
});

const HeaderMobile = () => {
  return (
    <Container>
      <div>
        <img src={headerLogo} alt="Geotagger logo" />
      </div>
    </Container>
  );
};

export default HeaderMobile;
