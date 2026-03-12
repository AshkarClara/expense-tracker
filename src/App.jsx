import { useState } from "react";
import "./App.css";
// import "../public/js/script.js";
import { numbersOnly } from "./js/script";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !amount) {
      console.log("all fields are required");
      return;
    }
    const newExpenses = [...expenses, { title, amount }];
    setExpenses(newExpenses);
    setTitle("");
    setAmount("");
  }

  function handleDelete(index) {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  }
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="heading">
            <h1>Expense Tracker</h1>
          </div>
          <div className="expense-form">
            <form onSubmit={handleSubmit}>
              <div className="title">
                <label htmlFor="title">
                  Title<span className="error">*</span>
                </label>
                <input
                  type="text"
                  className="form-control title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                />
              </div>

              <div className="amount">
                <label htmlFor="amount">
                  Amount<span className="error">*</span>
                </label>
                <input
                  type="text"
                  onInput={(e) => numbersOnly(e, 1, 4)}
                  className="form-control amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="submit-btn">
                <button className="form-control btn">Submit</button>
              </div>
            </form>
          </div>

          <div className="expense-list">
            <table>
              <tbody>
                {expenses.map((expense, index) => {
                  return (
                    <tr key={index}>
                      <td>{expense.title}</td>
                      <td>&#8377; {expense.amount}</td>
                      <td
                        onClick={() => handleDelete(index)}
                        style={{ color: "red", cursor: "pointer" }}
                      >
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
