import Section from "./Section";

function DisplayEducation({ education, submit }) {
    return(
        <Section title="Education" buttonText="Edit" submit={submit}>
            <div>
                <p><b>School Name:</b> {education.schoolName}</p>
                <p><b>Title of Study:</b> {education.titleOfStudy}</p>
                <p><b>Date of Study:</b> {education.dateOfStudy}</p>
            </div>
        </Section>
    )
}

export default DisplayEducation;