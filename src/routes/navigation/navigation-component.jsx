import { Link } from "react-router-dom"
import { ReactComponent as CorwnLogo } from '../../assets/87 - crown.svg'
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import './navigation.styles.scss'
let Navigation = () => {
  return (
    <Fragment>
      <header>
        <div className="container" >
          <div className="logo">
            <Link className="logo-container" to={'/Home'}><CorwnLogo /></Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={'/Home/Test'} >Test</Link>
              </li>
              <li>
                <Link to={'/'} >Sign Out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </Fragment>
  )
}
export default Navigation