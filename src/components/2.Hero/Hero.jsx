import React, {useState, useEffect} from "react";
import "./Hero.css";

const images = [
    {
   src: "/assets/1.jpg",
   title: "Quality Construction Services",
   subtitle: "We Build with Excellence",
    description: "Building your dreams with precision and care.", 
link:"/project1",
    },

    {
   src: "/assets/2.jpg",
   title: "Innovative Designs",
    subtitle: "Creating Spaces that Inspire",
    description: "Transforming ideas into reality with cutting-edge designs.", 
link:"/project2",
    },
    {
   src: "/assets/3.jpg",
   title: "Reliable Partnerships",
    subtitle: "Your Trusted Construction Partner",
    description: "Committed to delivering projects on time and within budget.", 
link:"/project3",
    },
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentImageIndex ? "active" : ""}`} 
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <div className="hero-description">
                          <p> {image.description}</p>
                          <a href={image.link} className="details-button">View Details</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`hero-dot ${index === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></span>
                ))}
            </div>
<div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Planning for the future, building for a lifetime
                </h1>
                <p className="hero-subtitle">
                    ABS Construction - Excellence in Every Brick
                </p>
                <a
                    href="#contact"
                    className="cta-button"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
}

export default Hero;


            
