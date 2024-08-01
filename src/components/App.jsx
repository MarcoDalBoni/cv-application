import { useState } from 'react'
import Section from './Section'
import EditAnagraphics from './EditAnagraphics'
import EditEducation from './EditEducation'
import EditWorkExperience from './EditWorkExperience'
import DisplayAnagraphics from './DisplayAnagraphics'
import DisplayEducation from './DisplayEducation'
import DisplayWorkExperience from './DisplayWorkExperience'

function App() {
    const [anagraphics, setAnagraphics] = useState({
        name: "Name",
        email: "email@example.com",
        phoneNumber: "1234"
    })
    const [education, setEducation] = useState({
        schoolName: "School",
        titleOfStudy: "Degree",
        dateOfStudy: "1999-01-01"
    })
    const [workExperience, setWorkExperience] = useState({
        companyName: "Company Name",
        positionTitle: "Job Title",
        responsibilities: "Responsibilities",
        startDate: "2024-04-02",
        endDate: "2030-12-31"
    })
    const [stage, setStage] = useState('Anagraphics')
    const [nextStage, setNextStage] = useState('Education')
      
    const handleUpdateName = (e) => {
        setAnagraphics({
            ...anagraphics,
            name: e.target.value
        });
    }
      
    const handleUpdateEmail = (e) => {
        setAnagraphics({
            ...anagraphics,
            email: e.target.value
        })
    }
    
    const handleUpdatePhoneNumber = (e) => {
        setAnagraphics({
            ...anagraphics,
            phoneNumber: e.target.value
        })
    }

    const handleUpdateSchoolName = (e) => {
        setEducation({
            ...education,
            schoolName: e.target.value
        })
    }

    const handleUpdateTitleOfStudy = (e) => {
        setEducation({
            ...education,
            titleOfStudy: e.target.value
        })
    }

    const handleUpdateDateOfStudy = (e) => {
        setEducation({
            ...education,
            dateOfStudy: e.target.value
        })
    }

    const handleEditCompanyName = (e) => {
        setWorkExperience({
            ...workExperience,
            companyName: e.target.value
        })
    }

    const handleEditPositionTitle = (e) => {
        setWorkExperience({
            ...workExperience,
            positionTitle: e.target.value
        })
    }

    const handleEditResponsabilities = (e) => {
        setWorkExperience({
            ...workExperience,
            responsibilities: e.target.value
        })
    }

    const handleEditStartDate = (e) => {
        setWorkExperience({
            ...workExperience,
            startDate: e.target.value
        })
    }

    const handleEditEndDate = (e) => {
        setWorkExperience({
            ...workExperience,
            endDate: e.target.value
        })
    }

    if(stage === 'Anagraphics') {

        return (
            <EditAnagraphics 
                anagraphics={anagraphics}
                handleUpdateName={handleUpdateName}
                handleUpdateEmail={handleUpdateEmail}
                handleUpdatePhoneNumber={handleUpdatePhoneNumber}
                submit={() => {
                        if (nextStage === 'Work Experience') {
                            setStage('Education')
                        } else if (nextStage === 'Edit') {
                            setStage('Work Experience')
                        } else if (nextStage === '') {
                            setStage('Edit')
                        } else {
                            setStage(nextStage)
                            setNextStage('Work Experience')
                        }
                    }
                }
            />
        )
    } else if(stage === 'Education') {

        return (
            <>
                <DisplayAnagraphics anagraphics={anagraphics} submit={() => setStage('Anagraphics')}/>
                <EditEducation
                    education={education}
                    handleEditSchoolName={handleUpdateSchoolName}
                    handleEditTitleOfStudy={handleUpdateTitleOfStudy}
                    handleEditDateOfStudy={handleUpdateDateOfStudy}
                    submit={() => {
                            if (nextStage === 'Edit') {
                                setStage('Work Experience')
                            }else if (nextStage === '') {
                                setStage('Edit')
                            }  else {
                                setStage(nextStage)
                                setNextStage('Edit')
                            }
                        }
                    }
                />
            </>
        )
    } else if(stage === 'Work Experience'){

        return (
            <>
                <DisplayAnagraphics anagraphics={anagraphics} submit={() => setStage('Anagraphics')}/>
                <DisplayEducation education={education} submit={() => setStage('Education')}/>
                <EditWorkExperience 
                    workExperience={workExperience}
                    handleEditCompanyName={handleEditCompanyName}
                    handleEditPositionTitle={handleEditPositionTitle}
                    handleEditResponsabilities={handleEditResponsabilities}
                    handleEditStartDate={handleEditStartDate}
                    handleEditEndDate={handleEditEndDate}
                    submit={() => {
                        if (nextStage === '') {
                            setStage('Edit')
                        }  else {
                            setStage(nextStage)
                            setNextStage('')
                        }
                    }}
                />
            </>
        )
    } else {
        return (
            <>
                <DisplayAnagraphics anagraphics={anagraphics} submit={() => setStage('Anagraphics')}/>
                <DisplayEducation education={education} submit={() => setStage('Education')}/>
                <DisplayWorkExperience workExperience={workExperience} submit={() => setStage('Work Experience')}/>
            </>
        )
    }
    
}

export default App;