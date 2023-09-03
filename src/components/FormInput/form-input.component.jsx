let FormInput = ({ label, attributes }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input {...attributes} />
    </div>
  )
}
export default FormInput