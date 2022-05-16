import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="flowers" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/veronicabets/dictionary-project">
              Veronicabets
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
