// components/Contact.tsx


const Contact: React.FC = () => {
  return (
    <section >
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
