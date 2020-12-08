import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import ToastComponent from './components/ToastComponent';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastComponent />

    <GlobalStyle />
  </>
);

export default App;
