import { auth } from "../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="p-2 my-1">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="p-2 my-1">
        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
