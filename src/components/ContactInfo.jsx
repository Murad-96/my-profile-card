import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from './ContactInfo.css'

function ContactInfo(props) {
    const [showContacts, setShowContacts] = useState(false);

    function handleShowMore() {
        setShowContacts(!showContacts);
    }

    return (
        <section className='contacts'>
            <button onClick={handleShowMore}>
                {showContacts ? 'Hide' : 'Show'} contacts
            </button>
            {showContacts && <div className="ContactInfo">
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>}
            {showContacts && 
            <div className="SM">
                <SocialIcon className='x' url={props.x}/>
                <SocialIcon className='ln' url={props.linkedin}/>    
            </div>}
        </section>
    );
}

export default ContactInfo