function Home() {
return (
<div>
    <header className="hero">
        <div className="overlay">
            <h1 className="title">
                <span className="green">Italian</span>{" "}
                <span className="white">Taste</span>
            </h1>
            <div className="flag"></div>
            <p className="tagline">A journey to Italy in every bite.</p>
            <a href="/menu" className="btn">Discover Our Menu</a>
        </div>
    </header>

    <section className="welcome">
        <h2>Benvenuti!</h2>
        <p>Where tradition meets passion and every detail tells a story.</p>
    </section>
</div>
);
}

export default Home;