import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/HomePage/Home';
import { Products } from './components/pages/Products/Products';
import { News } from './components/pages/News/News';
import { Contact } from './components/pages/Contact/Contact';
import { ProductDetail } from './components/pages/ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}> 
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/news" exact component={News}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/product-detail" component={ProductDetail}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
