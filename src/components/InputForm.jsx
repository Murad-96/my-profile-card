import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import ContactInfo from "./ContactInfo";
import ProfileCard from "./ProfileCard";
import styles from "./InputForm.css"

export default function InputForm() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [textarea, setTextarea] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [LinkedIn, setLinkedIn] = useState("");
    const [x, setX] = useState("");

    function isValidEmail(email) {
        if (email === "")
            return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phoneRegex = /^[0-9.]*$/;
        return phoneRegex.test(phone);
    }

     const handleChange = (event) => {
        setTextarea(event.target.value)
     }

    return(
        <div>
            <div>
                <h2>Input your info to generate a profile card below</h2>
                <h3>Your name</h3>
                <label>First:
                <input 
                    className="first"
                    type="text" 
                    value={first} 
                    onChange={(e) => setFirst(e.target.value)}/>
                </label>
                <br/>
                <label>Last:
                <input 
                    className="last"
                    type="text" 
                    value={last} 
                    onChange={(e) => setLast(e.target.value)}/>
                </label>
                <br/>
                <h3>Your bio</h3>
                <textarea value={textarea} onChange={handleChange} />
                <br/>
                <h3>Your contact details</h3>
                <label> Phone:
                    <input 
                      className="phone"
                      type="text" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}/>
                </label>
                {!isValidPhoneNumber(phone) && <p className="emailWarn">phone number invalid</p>}
                <br/>
                <label>Email:
                    <input
                      className="email"
                      type="text"
                      value={email}
                      onChange={(e) => {setEmail(e.target.value)}}
                      />
                </label>
                {!isValidEmail(email) && <p className="emailWarn">please enter a vaid email</p>}
                <h3>Social Media profiles</h3>
                <label>LinkedIn:
                    <input
                      className="ln"
                      type="text"
                      value={LinkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                    />
                </label>
                <br/><br/>
                <label> X:
                    <input
                      className="x"
                      type="text"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                </label>
                <br/>
            
            <br/><br/>
            </div>
            <div className="profileCard">
                <ProfileCard first = {first} last = {last} bio = {textarea} />
                <br/>
                <ContactInfo 
                  phone={phone} 
                  email={email} 
                  x={x} 
                  linkedin={LinkedIn} />
            </div>
            
        </div>
        

    )
}