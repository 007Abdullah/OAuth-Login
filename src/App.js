import './App.css';
import LoginButton from './components/LoginButton';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...................</h1>

  return (
    <div>
      <LoginButton />
      <br />
      <Logout />
      <br />
      <Profile />
    </div>
  );
}

export default App;
