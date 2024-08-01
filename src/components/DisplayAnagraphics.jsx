import Section from "./Section";

function DisplayAnagraphics({ submit, anagraphics }) {
    return(
        <Section title="Anagraphics" buttonText="Edit" submit={submit}>
            <div>
                <p><b>Name:</b> {anagraphics.name}</p>
                <p><b>Email:</b> {anagraphics.email}</p>
                <p><b>Phone Number:</b> {anagraphics.phoneNumber}</p>
            </div>
        </Section>
    )
}

export default DisplayAnagraphics;