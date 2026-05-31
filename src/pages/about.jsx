function About() {
    return (
        <div>
            <section>
                <h2 style={{ color: "#800000", fontSize: "48px" }}>About Us</h2>
                <p>Italian Taste brings you authentic Italian cuisine with passion, tradition, and high-quality ingredients.</p>

                <h2 style={{ color: "#800000" }}>Contact Us</h2>
                <p>Email: info@italiantaste.com</p>
                <p>Phone: +961 78 709 710</p>

                <h2 style={{ color: "#800000" }}>Send Feedback</h2>
                <form>
                    <input type="text" placeholder="Your Name" /><br />
                    <input type="email" placeholder="Your Email" /><br />
                    <textarea placeholder="Your Message"></textarea><br />
                    <button>Send</button>
                </form>
            </section>
        </div>
    );
}

export default About;