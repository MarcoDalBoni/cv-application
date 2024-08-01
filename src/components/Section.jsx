import '../styles/section.css'

function Section({ title, children, buttonText, submit }) {

    return (
        <div className="container">
            <h2>{title}</h2>
            {children}
            <button onClick={submit}>{buttonText}</button>
        </div>
    )
}

export default Section;