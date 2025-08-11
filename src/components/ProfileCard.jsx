import styles from './ProfileCard.css'
import placeholder from '../placeholder.png'

function ProfileCard(props) {

    function formatName (name) {
        // check fist letter capitalisation
        if (name) {
            if (!/^[A-Z]/.test(name)) {
            return name[0].toUpperCase() + name.slice(1)
            }
        }
        return name
    }

    return(
        <div className='profileCard'>
            <h1 className="name">{formatName(props.first)} {formatName(props.last)}</h1>
            <img src={placeholder}></img>
            <h2>Bio</h2>
            <p>
                {props.bio}
            </p>
        </div>
    )
}

export default ProfileCard