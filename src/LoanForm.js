import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  let btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  function handleBtnClick(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number format is incorrect ");
    }
    setShowModal(true);
  }
  return (
    <div className="form" onClick={handleDivClick}>
      <form id="loan" className="form" style={{ marginBottom: "40px" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />
        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
          type="checkbox"
        />
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <button
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleBtnClick}
        >
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
