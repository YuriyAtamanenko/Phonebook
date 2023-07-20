import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/operations';
import Layout from 'components/Layout';

import { Container, Box } from './App.styled';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Container>
    </Box>
  );
}
