import { Link } from "react-router-dom"
import SignIn from "../../components/sign-in-form/sign-in-component"
import SignUp from "../../components/sign-up-form/sign-up-form.component"
import Button from "../../components/button-component/button.component"
import './authentication.styles.scss'
let Authentication = () => {
  return (
    <div className=' auth'>
      <div className="container" >
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}
export default Authentication