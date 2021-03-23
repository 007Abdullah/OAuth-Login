import './App.css';
import LoginButton from './components/LoginButton';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <br />
      <Logout />
      <br />
      <Profile />

    </div>
  );
}

export default App;
