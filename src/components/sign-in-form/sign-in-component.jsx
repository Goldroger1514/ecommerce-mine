import Button from "../button-component/button.component"
import FormInput from "../form-input/form-input.component"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import { signInWithEmailAndPassword } from "firebase/auth";
let defaultFields = {
  email: '',
  password: ''
}
let SignIn = () => {
  const navigate = useNavigate(); // Get the navigate function
  let [fields, setFields] = useState(defaultFields)
  let { email, password } = fields
  let onInputValueChange = (event) => {
    console.log(event.target.name)
    setFields({ ...fields, [event.target.name]: event.target.value })
  }
  let signInWithGoogle = async () => {
    try {
      let response = await signInWithGooglePopup()
      if (response.user.accessToken) {
        let userDocRef = await createUserDocumentFromAuth(response.user)
        navigate('/Home'); // Navigate to "/Home" URL
      }
    } catch (error) {
      console.log(error)
    }
  }
  let handleSubmit = async (event) => {
    try {
      let response = await signInAuthUserWithEmailAndPassword(email, password)
      if (response.user.accessToken)
        navigate('/Home')
    } catch (error) {
      console.log(error.code)
    }
  }
  return (
    <form action="" onSubmit={async (event) => {
      event.preventDefault()
      handleSubmit()
    }}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <FormInput label={'Email'} inputInfo={{ value: email, type: "email", name: "email", required: true, onChange: onInputValueChange }} />
      <FormInput label={'Password'} inputInfo={{ value: password, type: "password", name: "password", required: true, onChange: onInputValueChange }} />
      <div className="buttons-container">
        <Button buttonOptions={{ type: 'submit' }}>Sign In</Button>
        <Button clickHandler={signInWithGoogle} buttonType='google' buttonOptions={{ type: 'button' }}>Google Sign In</Button>
      </div>
    </form>
  )
}
export default SignIn