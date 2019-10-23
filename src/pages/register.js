import React, { useState } from 'react'
import { Input } from '../components/common/input';
import { Button } from '../components/common/button';

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleOnChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section>
      <Input value={formValues.username} onChange={handleOnChange} placeholder="username" type="text" name="username" />
      <Input value={formValues.email} onChange={handleOnChange} placeholder="email" type="email" name="email" />
      <Input value={formValues.password} onChange={handleOnChange} placeholder="password" type="password" name="password" />
      <Input value={formValues.confirmPassword} onChange={handleOnChange} placeholder="confirm password" type="password" name="confirmPassword" />
      <Button>Register</Button>
    </section>
  )
}

export default Register