import { ReactComponent as CrownLogo } from '../../assets/87 - crown.svg'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
let Navigation = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={'/'}><CrownLogo /></Link>
        </div>
      </div>
    </div>
  )
}
export default Navigation