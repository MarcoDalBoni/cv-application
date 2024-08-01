import Section from './Section';
import Input from './Input'

function EditWorkExperience({
    workExperience,
    handleEditCompanyName,
    handleEditPositionTitle,
    handleEditResponsabilities: handleEditResponsibilities,
    handleEditStartDate,
    handleEditEndDate,
    submit
}) {
    return(
        <Section title="Work Experience" submit={submit} buttonText="Submit">
            <div>
                <Input
                    type="text"
                    lableText="Insert your company name:" 
                    id="companyNameInput"
                    value={workExperience.companyName}
                    onChange={handleEditCompanyName}
                /><br />
                <Input
                    type="text"
                    lableText="Insert your position title:" 
                    id="positionTitleInput"
                    value={workExperience.positionTitle}
                    onChange={handleEditPositionTitle}
                /><br />
                <Input
                    type="text"
                    lableText="Insert your responsabilities:" 
                    id="responsabilitiesInput"
                    value={workExperience.responsabilities}
                    onChange={handleEditResponsibilities}
                /><br />
                <Input
                    type="date"
                    lableText="Insert your job start date:" 
                    id="startDateInput"
                    value={workExperience.startDate}
                    onChange={handleEditStartDate}
                /><br />
                <Input
                    type="date"
                    lableText="Insert your job end date:" 
                    id="endDateInput"
                    value={workExperience.endDate}
                    onChange={handleEditEndDate}
                /><br />
            </div>
        </Section>
    )
}

export default EditWorkExperience