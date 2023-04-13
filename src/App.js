import logo from "./logo.svg";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <header className={style.app_header}>
        <img src={logo} className={style.app_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.app_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
