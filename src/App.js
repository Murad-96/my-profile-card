import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard'
import ContactInfo from './ContactInfo';
import ContactButton from './Button';

function App() {
  return (
    <div>
      <ProfileCard name="Murad Magdiyev"/>
      <ContactInfo email="muradmagdiyev@gmail.com" phone="+447538720079" className="contacts"/>
    </div>
  );
}

export default App;
