import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard'
import ContactInfo from './ContactInfo';

function App() {
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
  );
}

export default App;
