import "./Service.css";

const Service = () => {
  const services = [
    {
      title: "Construction services",
      description:
        "We offer a wide range of construction services to meet the needs of our clients.",
        image: "assets/1.jpg"
        
    },
    {
      title: "Demolition services",
      description:
        "Our demolition services are safe, efficient, and environmentally friendly.",
        image: "assets/2.jpg"
    },
    {
      title: "Architectural design",
      description:
        "Our team of architects can help you design the perfect building for your needs.",
        image: "assets/3.jpg"
    },
  ];

  return (
    <section id="service" className="service">
      <h2 className="service_title">Our Services</h2>
      <div className="service_grid">
        {services.map((service, index) => (
          <div className="service_item" key={index}>
            <h3 className="service_name">{service.title}</h3>
            <p className="service_description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;