import React, { useState, useEffect } from "react";
import "./App.css";
import NavBars from "./components/NavBars";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Header from './components/Header'
function App() {
  const [loading, setLoading] = useState(false);
  const overide = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          Loading={loading}
          color={"#3d2514"}
          css={overide}
          size={40}
        />
      ) : (
        <>
          <NavBars />
          <Header/>
        </>
      )}
    </div>
  );
}

export default App;
