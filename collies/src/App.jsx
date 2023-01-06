import "./App.scss";
import { Header } from "./Components/Partials/Header/Header";
import { Main } from "./Components/Partials/Main/Main";
import { Footer } from "./Components/Partials/Footer/Footer";
import { Nav } from "./Components/Partials/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Header pageTitle="Collies" />
      <div className="sideNav">
        <nav className="navbar">
          <Nav />
        </nav>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
