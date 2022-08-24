import NavigationBar from "./components/nav-bar";
import LogoBA from "./components/logo-ba";

function ListEmployees() {
  return (
    <div>
      <NavigationBar />
      <LogoBA />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default ListEmployees;
