import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <main className="app-main">
      <Switch>
        <Route path="/contact" component={ Contact } />
        <Route path="/projects" component={ Projects } />
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <Header />
    </main>
  );
}

export default App;
