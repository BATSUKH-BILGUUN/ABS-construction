import "./Project.css";

const ProjectData = [
    {
        id: "project1",
        title: "Modern Apartment Complex",
        description: "A state-of-the-art apartment complex featuring modern amenities and sustainable design.",
        image: "assets/project1.jpg",
        link: "/project1"
    },
    {
        id: "project2",
        title: "Luxury Villa",
        description: "A luxurious villa with stunning architecture and high-end finishes.",
        image: "assets/project2.jpg",
        link: "/project2"
    },
    {
        id: "project3",
        title: "Commercial Office Building",
        description: "A sleek and functional office building designed for productivity and collaboration.",
        image: "assets/project3.jpg",
        link: "/project3"
    },
];

const Project = () => {
    return ( 
        <section id="project" className="project">
            <h2 className="project-title">Our Projects</h2>
            {ProjectData.map((project, index) => (
                <div key={project.id} id={project.id} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="project-item-content">
                        <img src={project.image} alt={project.title} className="project-image" />
                    </div>

                    <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-button">Read more</a>
                    </div>
                </div>
            ))}
        </section>
     );
}

export default Project;
          