import './App.css';
import './assets/scss/animation.scss';
import './assets/scss/extras.scss';
import './assets/scss/menu.scss';
import Extras from './components/Extras';
import Menu from './components/Menu';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Menu />
      <Extras />
     <Profile />
    </div>
  );
}

export default App;
