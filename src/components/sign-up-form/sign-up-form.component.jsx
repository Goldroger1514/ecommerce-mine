import Button from "../button-component/button.component"
import FormInput from "../form-input/form-input.component"
import { useState, useEffect } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
let defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
let SignUp = () => {
  let [fields, setFields] = useState(defaultFields)
  let { displayName, email, password, confirmPassword } = fields
  let onInputValueChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value })
  }
  let handleSubmit = async () => {
    try {
      let response = await createAuthUserWithEmailAndPassword(email, password)
      let user = response.user
      let userDocRef = await createUserDocumentFromAuth(user, { displayName })

      setFields({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.log(error.code)
    }
  }
  return (
    <form action="" onSubmit={(event) => {
      event.preventDefault()
      handleSubmit()
    }}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <FormInput label='Name' inputInfo={{ onChange: onInputValueChange, value: displayName, type: 'text', name: 'displayName', required: true }} />
      <FormInput label='Email' inputInfo={{ onChange: onInputValueChange, value: email, type: 'email', name: 'email', required: true }} />
      <FormInput label='Password' inputInfo={{ onChange: onInputValueChange, value: password, type: 'password', name: 'password', required: true }} />
      <FormInput label='Confirm Password' inputInfo={{ onChange: onInputValueChange, value: confirmPassword, type: 'password', name: 'confirmPassword', required: true }} />
      <div className="buttons-container">
        <Button buttonType='' buttonOptions={{ type: 'submit' }} >Sign Up</Button>
      </div>
    </form>
  )
}
export default SignUp