function ProfileCard(props) {
    return(
        <div>
            <h1>{props.name}</h1>
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