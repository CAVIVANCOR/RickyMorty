import styles from './Form.module.css';
import React, { useState } from 'react';
import validarCampos from './validation';

export default function Form(props) {
  const [userData, setUserData]=useState({ username: '', password: '' });
  const [errors, setErrors]=useState({ username: '', password: '' });
  const handleInputChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value});
    setErrors(validarCampos({...userData,[event.target.name]:event.target.value}));
  };
  return (
    <div className={styles.login}>
        <form onSubmit={()=>{props.login(userData)}}>
          <div className={styles.campo}>
            <div>
              <label>Usuario:</label>
            </div>
            <div className={errors.username ? styles.warning : null}>
              <input 
              name='username'
              value={userData.username}
              onChange={(e)=>{handleInputChange(e)}}
              type="text" />
            </div>
          </div>
          <div>
              {errors.username?<p className={styles.danger}>{errors.username}</p>:null}
            </div>
          <div className={styles.campo}>
            <div>
              <label>Password:</label>
            </div>
            <div className={errors.password ? styles.warning : null}>
              <input 
              name='password'
              value={userData.password}
              onChange={(e)=>{handleInputChange(e)}}
              type="password" />
            </div>
          </div>
          <div>
              {errors.password?<p className={styles.danger}>{errors.password}</p>:null}
          </div>
          {Object.values(errors).length === 0 ? <button className={styles.boton}>Login</button> :null}
            
        </form>
    </div>
  )
}
