import './button.styles.scss'
let BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  '': ''
}
let Button = ({ children, clickHandler, buttonType = '', buttonOptions }) => {
  return (
    <button className={`${BUTTON_TYPES_CLASSES[buttonType]}`} onClick={typeof clickHandler == 'function' ? clickHandler : () => { }} {...buttonOptions}>{children}</button>
  )
}
export default Button