import { useState } from 'react'

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
        </section>
    );
}

export default ContactInfo