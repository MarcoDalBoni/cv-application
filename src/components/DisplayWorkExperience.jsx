import Section from "./Section";

function DisplayWorkExperience({ workExperience, submit }) {

    return (
        <Section title="Work Experience" buttonText="Edit" submit={submit}>
            <div>
                <p><b>Company Name: </b> {workExperience.companyName}</p>
                <p><b>Position title: </b> {workExperience.positionTitle}</p>
                <p><b>Responsabilities: </b> {workExperience.responsabilities}</p>
                <p><b>Start date: </b> {workExperience.startDate}</p>
                <p><b>End date: </b> {workExperience.endDate}</p>
            </div>
        </Section>
    )
}

export default DisplayWorkExperience;