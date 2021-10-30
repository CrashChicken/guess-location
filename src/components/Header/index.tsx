import { useMediaQuery, useTheme } from '@mui/material';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';

const Header = () => {
  const theme = useTheme();
  const desktopScreen = useMediaQuery(theme.breakpoints.up('sm'));
  if (desktopScreen) return <HeaderDesktop />;
  return <HeaderMobile />;
};

export default Header;
