import { auth, googleProvider } from "../firebase.config.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  }

  async function signInWithGoogle() {
    try {
      signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
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
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
