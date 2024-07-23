import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import News from './components/News';
import Footer from './components/Footer';
import AboutAs from './components/AboutAs';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Slider />
                <AboutAs />
                <div className="content">
                    <News />   
                </div>
            </main>
            <br/>
            <Footer />
        </div>
    );
};

export default App;
