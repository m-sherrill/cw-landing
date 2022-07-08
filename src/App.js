import { BrowserRouter as Router,
Routes, 
Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Policy from './pages/Policy'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
<Router>
  <Header />
  <div className="content-wrapper">


        <Routes>
                <Route path="/" element={<Order />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/policy" element={<Policy />} />
          </Routes>
      </div>
      <Footer />
        </Router>
        
    </div>
  );
}

export default App;
