import { Nav } from "../Nav/Nav";
const Header = (props) => {
  return (
    <header>
      <h1>{props.pageTitle}</h1>
      <nav className="headerNav">
        <Nav />
      </nav>
    </header>
  );
};

export { Header };
