import { useState } from 'react';
import { mix_swap_backend } from 'declarations/mix_swap_backend';
import {NavContext} from "./context/navContext.js";
import {ChainContextProvider} from "./context/ChainContext.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <main>
        <ChainContextProvider>
            <NavContext.Provider value={{ isMenuOpen, handleIsMenuOpen }}>
                <div className="montserrat">
                    <Dashboard/>
                </div>
            </NavContext.Provider>
        </ChainContextProvider>
    </main>
  );
}

export default App;
