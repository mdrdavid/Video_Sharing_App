
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Menu from './components/sidemenu/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Menu/> */}

      <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  {/* <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route> */}
                </Route>
              </Routes>
    </div>
  );
}

export default App;
