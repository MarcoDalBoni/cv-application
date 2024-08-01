import Section from './Section';
import Input from './Input';

function EditAnagraphics({
    anagraphics,
    handleUpdateName,
    handleUpdateEmail,
    handleUpdatePhoneNumber,
    submit
}) {

    return (
        <Section title="Anagraphics" submit={submit} buttonText="Submit">
            <div>
                <Input 
                    type="text"
                    lableText="Insert your name:" 
                    id="nameInput"
                    value={anagraphics.name}
                    onChange={handleUpdateName}
                /><br/>
                <Input 
                    type="text"
                    lableText="Insert your email:"
                    id="emailInput"
                    value={anagraphics.email}
                    onChange={handleUpdateEmail}
                /><br/>
                <Input 
                    type="text"
                    lableText="Insert your phone number:"
                    id="phoneNumberInput"
                    value={anagraphics.phoneNumber}
                    onChange={handleUpdatePhoneNumber}
                />
            </div>
        </Section>
    )
}

export default EditAnagraphics;