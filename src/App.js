import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Planner from './components/Planner';
import Work from './components/Work';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReloaded: sessionStorage.getItem('hasReloaded') === 'true',
    };
  }

  componentDidMount() {
    if (!this.state.hasReloaded) {
      sessionStorage.setItem('hasReloaded', 'true');
      this.setState({ hasReloaded: true });
    }
  }

  render() {
    return (
      <Router>
        <div>
        {window.location.pathname !== '/planner' && <Navbar />} {/* for making navbar not visible to planner page */}
          <Routes>
            <Route path="/body" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/work" element={<Work />} />
            {/* Add more routes as needed */}
            
          </Routes>
          {window.location.pathname !== '/planner' && <Footer />}
          {!this.state.hasReloaded && <Navigate to="/body" replace />}
        </div>
       
      </Router>
    );
  }
}

export default App;