function Reservation() {
    return (
        <div>
            <section>
                <h2 style={{ color: "#800000", textAlign: "center", fontSize: "48px" }}>Reserve a Table</h2>
                <div className="menu-line"></div>
                <p style={{ color: "#555", fontSize: "16px", marginBottom: "30px" }}>
                    Book your table at Italian Taste and enjoy an authentic Italian dining experience.
                </p>

                <form className="reservation-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Full Name" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+961 XX XXX XXX" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label>Number of Guests</label>
                            <select required>
                                <option value="" disabled>Select guests</option>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                                <option>6+ People</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <label>Time</label>
                            <select required>
                                <option value="" disabled>Select time</option>
                                <option>12:00 PM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>7:00 PM</option>
                                <option>8:00 PM</option>
                                <option>9:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label>Special Requests</label>
                        <textarea placeholder="Any dietary needs, allergies, or special occasions..."></textarea>
                    </div>

                    <button type="submit" className="reserve-btn">Confirm Reservation</button>
                </form>

                <div className="info-cards">
                    <div className="info-card"><h3>📍 Location</h3><p>123 Via Roma, Beirut, Lebanon</p></div>
                    <div className="info-card"><h3>🕐 Opening Hours</h3><p>Mon – Sun: 12:00 PM – 10:00 PM</p></div>
                    <div className="info-card"><h3>📞 Call Us</h3><p>+961 78 709 710</p></div>
                </div>
            </section>
        </div>
    );
}

export default Reservation;