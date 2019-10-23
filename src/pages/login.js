import React, { useState, useContext } from 'react'
import { Input } from '../components/common/input';
import { Button } from '../components/common/button';
import { FirebaseContext } from '../components/Firebase';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('');

  const { firebase } = useContext(FirebaseContext);


  const handleOnChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    firebase.login({
      email: formValues.email,
      password: formValues.password,
    }).catch(error => {
      console.log('Error', error);
      setErrorMessage(error.message);
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input value={formValues.email} onChange={handleOnChange} placeholder="email" type="email" name="email" />
        <Input value={formValues.password} onChange={handleOnChange} placeholder="password" type="password" name="password" />
        {errorMessage && <p>{errorMessage}</p>}
        <Button>Login</Button>
      </form>
    </section>
  )
}

export default Login