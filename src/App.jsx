import { useState } from "react";
import "./App.css";
import "../public/js/script.js";

function App() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="heading">
            <h1>Expense Tracker</h1>
          </div>
          <div className="expense-form">
            <form>
              <div className="title">
                <label htmlFor="title">
                  Title<span className="error">*</span>
                </label>
                <input type="text" className="form-control title" id="title" />
              </div>

              <div className="amount">
                <label htmlFor="amount">
                  Amount<span className="error">*</span>
                </label>
                <input
                  type="text"
                  onInput={(e) => numbersOnly(e, 1, 2)}
                  className="form-control amount"
                  id="amount"
                />
              </div>

              <div className="submit-btn">
                <button className="form-control btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
