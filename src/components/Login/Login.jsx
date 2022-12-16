import styles from './Login.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className={styles.login}>
        <form action="">
            <label>Usuario:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <button>Login</button>
        </form>
    </div>
  )
}
