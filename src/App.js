import "./styles.css";
import Home from './Home'
import Products from './Products'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './Header'

export default function App() {
  return (
    <div style={{homePage}} className="App">
      <Header />
      <Home />

    </div>
  );
}

const homePage = {
  width:"100%"
}