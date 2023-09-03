import SignIn from "../../components/SignInForm/sign-in.component"
import SignUp from "../../components/SignUpForm/sign-up.component"
let Authentication = () => {
  return (
    <div className="authentication">
      <div className="container">
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}
export default Authentication