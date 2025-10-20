import React, {useEffect} from "react"; 
import "./Ceomessage.css";

const scrollToTop = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Ceomessage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#ceomessage') {
            scrollToElement(hash.substring(1));
        }
    }, []);

    return (
        <section id="ceomessage" className="ceo-message-section">
            <div className="ceo-content">
                <img src="/assets/person.jpg" alt="CEO" className="ceo-image" />
                <p className="ceo-name">ABS Construction CEO:</p>
                <p className="ceo-signature">Beeboop</p>
                </div>
                <div className="ceo-text">
                <h2 className="ceo-title">Message from the CEO</h2>
                <p className="ceo-description">
                    Welcome to our company! We are dedicated to providing the best services and products to our customers. <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nobis adipisci aliquam dignissimos cupiditate ea ipsa, delectus dolore doloremque fugiat officia incidunt expedita, cumque natus optio, distinctio molestias recusandae consequuntur!Our team works tirelessly to innovate and improve, ensuring that we stay ahead in the industry. <strong>Thank you for being a part of our journey.</strong>
                </p>
                <button className="ceo-button" onClick={() => {
                    const element = document.getElementById("contact");
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                }
                }>Contact Us</button>
            </div>
        </section>
    );
}
export default Ceomessage;
        