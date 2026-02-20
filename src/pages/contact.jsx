import { Form } from "react-router-dom";

export const Contact = () => {
  const handleFormData = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <section className="contact-section">
      <div className="container">
        <div className="common-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="form">
          <form action={handleFormData} className="form-fields">
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
