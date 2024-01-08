import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & Components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        {/* all pages and components must be container within the BrowserRouter component */}
        <BrowserRouter>
        <Navbar></Navbar>
        
        <div className="pages">
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }  
                />
            </Routes>
                
              

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
