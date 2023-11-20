import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
    const [accessToken, setAccessToken] = useState("");
    const handleTokenChange = (token) => {
        setAccessToken(token);
    };

    return (
        <>
            <div className="app-container">
            <Nav />
            <main>
                <MiApi onTokenChange={handleTokenChange} />
                <Buscador accessToken={accessToken} />
            </main>
            <footer>
            <Footer />
            </footer>
        </div>
        </>
    );
}

export default App;
