import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/jekaterinavaleviciene/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jekaterina Valeviciene
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/JK932-coder/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://dictionary-jk.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}