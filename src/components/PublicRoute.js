import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
}
