export const Contact = () => {
  const FormSubmit = (formData) => {
    const FormInputData = Object.fromEntries(formData.entries());
    console.log(FormInputData);
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-flex">
          <h2>Contact Us</h2>
          <form action={FormSubmit} className="contact-flex">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="username"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
            />
            <textarea
              placeholder="Enter Your Message"
              name="message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
