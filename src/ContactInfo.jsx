import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

function ContactInfo(props) {
    const [showContacts, setShowContacts] = useState(false);

    function handleShowMore() {
        setShowContacts(!showContacts);
    }

    return (
        <section>
            <button onClick={handleShowMore}>
                {showContacts ? 'Hide' : 'Show'} contacts
            </button>
            {showContacts && <div className="ContactInfo">
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>}
            {showContacts && 
            <div className="SM">
                <SocialIcon url={props.x}/>
                <SocialIcon url={props.linkedin}/>    
            </div>}
        </section>
    );
}

export default ContactInfo