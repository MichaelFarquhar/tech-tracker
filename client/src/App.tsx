import './styles/main.scss';
import { Router } from '@reach/router';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Home path="/" />
                <About path="/about" />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
