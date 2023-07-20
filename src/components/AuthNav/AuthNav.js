import { StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/login">LogIn</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </div>
  );
}
