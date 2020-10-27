import logo from "./logo.svg";
import "./App.css";
import Footer from "svelte-to-x";
import { useEffect, useRef } from "react";

function App() {
  const target = useRef(null);
  useEffect(() => {
    if (!target.current) return;

    const footerFromSvelte = new Footer({
      target: target.current,
      props: {
        name: "world",
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <div ref={target} />
    </div>
  );
}

export default App;
