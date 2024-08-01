import Section from './Section';
import Input from './Input'

function EditEducation({
    education,
    handleEditSchoolName,
    handleEditTitleOfStudy,
    handleEditDateOfStudy,
    submit
}) {    
    return (
        <Section title="Education" submit={submit} buttonText="Submit">
            <div>
                <Input
                    type="text"
                    lableText="Insert your school name:" 
                    id="schoolNameInput"
                    value={education.schoolName}
                    onChange={handleEditSchoolName}
                /><br/>
                <Input 
                    type="text"
                    lableText="Insert your title of study:" 
                    id="titleOfStudyInput"
                    onChange={handleEditTitleOfStudy}
                    value={education.titleOfStudy}
                /><br/>
                <Input 
                    type="date"
                    lableText="Insert your date of study:" 
                    id="dateOfStudyInput"
                    onChange={handleEditDateOfStudy}
                    value={education.dateOfStudy}
                />
            </div>
        </Section>
    )
}

export default EditEducation