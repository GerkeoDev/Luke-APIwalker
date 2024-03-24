
import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { PeopleDetails } from './pages/PeopleDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<PeopleDetails />}/>
      </Routes>
      
    </div>
  );
}

export default App;
