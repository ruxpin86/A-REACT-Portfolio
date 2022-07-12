import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar myId="hi" />
        {/* Navbar({myId: 'hi'}) */}
        <Main />
      </BrowserRouter>
      {/* BrowserRouter({children: [navbar, main], basename: '/'}) */}
    </div>
  );
}

export default App;
