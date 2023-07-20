import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
}
