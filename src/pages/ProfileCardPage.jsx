import ProfileCard from '../components/ProfileCard'
import ContactInfo from '../components/ContactInfo';

export default function ProfileCardPage() {
    return (
        <div>
            <ProfileCard first="my" last="name"/>
            <ContactInfo 
                email="muradmagdiyev@gmail.com" 
                phone="+447538720079" 
                className="contacts"
                linkedin="https://www.linkedin.com/in/murad-magdiyev/"
                x="https://x.com/murad_227"
            />
        </div>
    )
}
