import React from "react";
import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";

const Project2: React.FC = () => {
    return (
        <div className="project-page">  {/* single parent element */}
            <Header />

            <h1>Project 2</h1>

            <img src="/assets/2.jpg" alt="Project 2 image" />

            <p>
                This is a detailed description of Project 2. It includes information about the project's scope, objectives, and outcomes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ea a, ipsum reprehenderit nihil magnam sunt iure consequatur! Debitis harum commodi iusto animi modi soluta ea provident a dolore distinctio.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe reprehenderit, exercitationem commodi error laudantium facere dolore, ex sequi laboriosam optio, harum minus nostrum iure eligendi id sapiente repellendus eius pariatur?
            </p>

            <div className="navigation-buttons">
                <a href="/" className="back-link">
                    Back to Home
                </a>
                <a href="/project3" className="next-link">
                    Next Project
                </a>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}

export default Project2;