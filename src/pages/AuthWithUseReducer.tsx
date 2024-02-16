import { ChangeEvent, FormEvent, useReducer, useState } from "react";

type Credential = {
  email: string;
  password: string;
};

function reducer(
  state: Credential, 
  action: {type: "CHANGE_EMAIL" | "CHANGE_PASSWORD", payload: string}
) {
  switch (action.type) {
    case ("CHANGE_EMAIL"):
      return { ...state, email: action.payload}
    case ("CHANGE_PASSWORD"):
      return { ...state, password: action.payload}
    default:
      return state
  }
}

export default function AuthWithUseReducer() {
  const email = 'yuta519@localhost';
  const password = 'password';

  const [credential, dispatch] = useReducer(reducer, {email: "", password: ""});
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent) => {
    const target = (event.target) as HTMLInputElement
    if (target.name === 'email') 
      dispatch({type: "CHANGE_EMAIL", payload: target.value})
    if (target.name === 'password') 
      dispatch({type: "CHANGE_PASSWORD", payload: target.value})
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!credential.email.length) return setError("Email is empty");
    if (!credential.password.length) return setError("Password is empty");
    if (email !== credential.email && password !== credential.password)
      return setError("Email or Password are wrong");

    setError("");
    console.log('Login Success');
  }

  return (
    <>
      { !!error.length && (<div style={{color: "red"}}>{error}</div>) }
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label>Email</label>
          <input name="email" value={credential.email} onChange={handleChange} /> 
        </div>
        <div className="password">
          <label>Password</label>
          <input name="password" value={credential.password} onChange={handleChange} /> 
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}