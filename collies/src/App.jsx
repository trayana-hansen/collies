import "./App.scss";
import { Header } from "./Components/Partials/Header/Header";
import { Main } from "./Components/Partials/Main/Main";
import { Footer } from "./Components/Partials/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header pageTitle="Collies" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
