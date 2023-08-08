import Project from "./Project"

export default function Portfolio() {
    const projects = [
        {
            name: "project 1",
            description: "HTML/JS/CSS",
            link: "https://heroku.com",
            repo: "https://github.com/p1",
            image: "project2.png",
        },
        {
            name: "project 2",
            description: "NRG Stack",
            link: "https://heroku.com/",
            repo: "https://github.com/p2",
            image: "project2.png",
        },
    ];
    return (
        <div className="d-flex">
            {projects.map((project) => (
                <Project project={project} key={"project=" + project.name} />
            ))}
        </div>
    )
}

