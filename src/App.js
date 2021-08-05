import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import About from './pages/About';
import AuthenticatedHome from './pages/AuthenticatedHome';


function App() {
  return (
    <>
      <Router>
        <div className="pages">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mail" component={AuthenticatedHome} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
