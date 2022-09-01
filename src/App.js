import { BrowserRouter as Router,
Routes, 
Route } from 'react-router-dom'
import './App.css';
import 'materialize-css'
import { Container } from 'react-materialize'
import Header from './components/Header'
import FooterFunction from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Policy from './pages/Policy'
import Products from './pages/Products'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
<Router>
  
  <Header />
  <div className="content-wrapper">
  
  <Container>

<Home />

<Order />
<About /></Container>
        <Routes>
        {/* <Route path="/" element={}/> */}
                {/* <Route path="/order" element={<Order />}/> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/products" element={<Products />} />
                <Route path="/policy" element={<Policy />} />
          </Routes>

          
      </div>

      <FooterFunction />
        </Router>
        
    </div>
  );
}

export default App;
