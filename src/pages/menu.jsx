function Menu() {
    return (
        <div>
            <section>
                <h2 style={{ color: "#800000", textAlign: "center", fontSize: "48px" }}>Our Menu</h2>
                <div className="menu-line"></div>

                <h3 className="category">Pizza</h3>
                <div className="menu-grid">
                    <div className="card"><img src="/images22/Margaritta.png" /><h3>Margherita</h3><p>Rich Tomatoes, Creamy Mozzarella, Fresh Basil</p><p>$12</p></div>
                    <div className="card"><img src="/images22/Pepperoni.png" /><h3>Pepperoni</h3><p>Rich Tomato Sauce, Melted Mozzarella, Savory Pepperoni Slices</p><p>$16</p></div>
                    <div className="card"><img src="/images22/Vegterian.png" /><h3>Vegetarian</h3><p>Signature Sauce, Melted Mozzarella, Mix Vegetable</p><p>$16</p></div>
                    <div className="card"><img src="/images22/Formaggi.png" /><h3>Quattro Formaggi</h3><p>Mix Of Premium Cheese (Mozzarella, Cheddar, Parmesan)</p><p>$20</p></div>
                </div>

                <h3 className="category">Pasta</h3>
                <div className="menu-grid">
                    <div className="card"><img src="/images22/Alfredo.png" /><h3>Alfredo</h3><p>Tagliatelle Tossed In A Creamy Chicken And Mushroom Alfredo Sauce</p><p>$17</p></div>
                    <div className="card"><img src="/images22/Bolognese.png" /><h3>Bolognese</h3><p>Spaghetti With Traditional Italian Bolognese Sauce</p><p>$15</p></div>
                    <div className="card"><img src="/images22/Pesto.png" /><h3>Pesto</h3><p>Homemade Gnocchi With Grilled Chicken, Enriched With Our Signature Pesto Sauce</p><p>$16</p></div>
                    <div className="card"><img src="/images22/Lasagna.png" /><h3>Lasagna</h3><p>Classic Italian Pasta Baked With A Rich Bolognese Sauce</p><p>$16</p></div>
                </div>

                <h3 className="category">Desserts</h3>
                <div className="menu-grid">
                    <div className="card"><img src="/images22/Tiramisu.jpg" /><h3>Tiramisu</h3><p>Espresso-Soaked Layers And Creamy Mascarpone</p><p>$10</p></div>
                    <div className="card"><img src="/images22/Panna Cotta.jpg" /><h3>Panna Cotta</h3><p>Silky Vanilla Cream Topped With A Vibrant Berry Glaze</p><p>$8</p></div>
                    <div className="card"><img src="/images22/Gelato.jpg" /><h3>Gelato</h3><p>Rich, Velvety Italian Ice Cream In Seasonal Artisan Flavors</p><p>$7</p></div>
                    <div className="card"><img src="/images22/Cannoli.jpg" /><h3>Cannoli</h3><p>Crispy Pastry Shells Filled With Sweet, Whipped Ricotta Cream</p><p>$9</p></div>
                </div>

                <h3 className="category">Drinks</h3>
                <div className="menu-grid">
                    <div className="card"><img src="/images22/Soft drinks.jpg" /><h3>Soft Drinks</h3><p>Coca-Cola, Sprite, Fanta</p><p>$2</p></div>
                    <div className="card"><img src="/images22/Perrier.jpg" /><h3>Sparkling Water</h3><p>Carbonated Mineral Water</p><p>$2</p></div>
                    <div className="card"><img src="/images22/Water.jpg" /><h3>Mineral Water</h3><p>Natural Water</p><p>$1</p></div>
                    <div className="card"><img src="/images22/Fresh Juice.jpg" /><h3>Fresh Juice</h3><p>Orange, Apple, Mixed Fruits</p><p>$3</p></div>
                </div>
            </section>
        </div>
    );
}

export default Menu;