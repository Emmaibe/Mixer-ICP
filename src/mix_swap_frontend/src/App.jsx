import { useState } from 'react';
import { mix_swap_backend } from 'declarations/mix_swap_backend';
import {NavContext} from "./context/navContext.js";
import {ChainContextProvider} from "./context/ChainContext.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
  // const [greeting, setGreeting] = useState('');
  //
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   mix_swap_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

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
