import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const YearValidation = () => {
  const [year, setYear] = useState("");
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleValidation = () => {
    const parsedYear = parseInt(year);
    if (parsedYear >= 2000 && parsedYear <= 2023) {
      setAlertType("success");
      setMessage("Success! Year entered is within the valid range.");
    } else {
      setAlertType("danger");
      setMessage(
        "Error! Year is outside the valid range, please enter a year between 2000-2023 only."
      );
    }
  };

  return (
    <Container className="mt-5">
      <h1>Year Validation</h1>
      <Form>
        {/* Year input field */}
        <Form.Group>
          <Form.Label>Please enter a valid year between 2000-2023</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter year"
            value={year}
            onChange={handleYearChange}
          />
          {/* Range input for year selection */}
          <input
            type="range"
            min="2000"
            max="2023"
            value={year}
            onChange={handleYearChange}
            className="form-range" // Apply Bootstrap styling classes
            style={{
              width: "80%",
              height: "5px",
            }}
          />
        </Form.Group>
        {/* Validation button */}
        <Button className="mt-3" variant="primary" onClick={handleValidation}>
          Validate
        </Button>
      </Form>
      {/* Display the validation result as an alert */}
      {alertType && message && (
        <Alert variant={alertType} className="mt-3">
          {message}
        </Alert>
      )}
    </Container>
  );
};

export default YearValidation;
