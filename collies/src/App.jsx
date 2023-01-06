import "./App.scss";
import { Header } from "./Components/Partials/Header/Header";
import { Main } from "./Components/Partials/Main/Main";
import { Footer } from "./Components/Partials/Footer/Footer";
import { Nav } from "./Components/Partials/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Header pageTitle="Collies" />
      <nav className="navbar">
        <Nav />
      </nav>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
