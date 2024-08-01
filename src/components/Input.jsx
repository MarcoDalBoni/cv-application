import '../styles/input.css'

function Input({ type, lableText, id, onChange, value }) {

    return (
        <div className="input-container">
            <label htmlFor={id}>{lableText}</label>
            <input className="form-input" type={type} id={id} onChange={onChange} placeholder={value}></input>
        </div>
    )
}

export default Input