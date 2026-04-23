import { useState } from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const info = [
    { icon: <FaPhone />, text: "+91 98765 43210" },
    { icon: <FaEnvelope />, text: "youremail@gmail.com" },
    { icon: <FaMapMarkerAlt />, text: "Madurai, Tamil Nadu" },
  ];

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Must be 10 digits";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Message Sent Successfully 🚀");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="title-contact">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        
        {/* INFO */}
        <div className="contact-info">
          {info.map((item, i) => (
            <div className="info-box" key={i}>
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="error">{errors.phone}</small>}

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small className="error">{errors.message}</small>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;