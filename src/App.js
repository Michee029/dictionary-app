import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by <strong>Michelle Soriano</strong> and is{" "}
            <a
              href="https://github.com/Michee029/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
