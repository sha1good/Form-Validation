import FormInput from "./components/FormInput";
import "./app.css";
import { useState } from "react";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and  shouldn't include any special character!",
      label: "Username",
      required: true,
      pattern:"^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthDay",
      type: "date",
      placeholder: "BirthDay",
      label: "BirthDay",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      errorMessage: "Password don't match!",
      label: "ConfirmPassword",
      required: true,
      pattern: values.password
    },
  ];

  const handleSubmmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
