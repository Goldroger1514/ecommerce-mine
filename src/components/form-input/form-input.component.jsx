import './input.styles.scss'
let FormInput = ({ label, inputInfo }) => {
  return (
    <div className="input-container" >
      <input {...inputInfo} />
      <label className={`${inputInfo.value.length > 0 ? 'shrink' : ''}`} >{label}</label>
    </div>
  )
}
export default FormInput