
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import SignIn from './pages/signin/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>} />

                  <Route path="trends" element={<Home type="trends"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />

                  <Route path="signin" element={<SignIn />} />

                  {/* <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route> */}
                </Route>
              </Routes>
    </div>
  );
}

export default App;
