import styles from './ProfileCard.css'

function ProfileCard(props) {

    function formatName (name) {
        // check fist letter capitalisation
        if (!/^[A-Z]/.test(name)) {
            return name[0].toUpperCase() + name.slice(1)
        }
        return name
    }

    return(
        <div>
            <h1 className="name">{formatName(props.first)} {formatName(props.last)}</h1>
            <img src="placeholder.jpg"></img>
            <h2>Bio</h2>
            <p>
                I work as an implementation engineer at Craneware Group and hold a masters degree in Statistics & Data Science from
                the University of Edinburgh. My key cnompetencies include Machine Learning and AI. I aim to use my full-stack web development skills to
                build scalable AI-driven applications. Besides that I like voleyball and cross-country running.
            </p>
        </div>
    )
}

export default ProfileCard