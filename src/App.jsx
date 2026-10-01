
import burger from "./assets/food/burger.jpg";
import pizza from "./assets/food/pizza.jpg";
import roll from "./assets/food/roll.jpg";
import fries from "./assets/food/fries.jpg";
import coffee from "./assets/food/coffee.jpg";
import cake from "./assets/food/cake.jpg";
import "./App.css";
function App() {
    const menuItems = [
    {
      name: "Classic Burger",
      description: "Fresh vegetables, cheese and crispy patty.",
      price: 129,
      image : burger,
    },
    {
      name: "Cheese Pizza",
      description: "Loaded with cheese and fresh toppings.",
      price: 199,
      image: pizza,
    },
    {
      name: "Veg Roll",
      description: "Fresh vegetables wrapped in a delicious roll.",
      price: 79,
      image: roll,
    },
    {
      name: "French Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 89,
      image: fries,
    },
    {
      name: "Cold Coffee",
      description: "Creamy chilled coffee with a smooth flavour.",
      price: 99,
      image: coffee,
    },
    {
      name: "Chocolate Cake",
      description: "Soft and rich chocolate cake for dessert lovers.",
      price: 149,
      image: cake,
    },
  ];

  const orderOnWhatsApp = (item) => {
    const phoneNumber = "919905094123";

    const message = `Hello UrbanBite! I would like to order ${item.name} (₹${item.price}).`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">UrbanBite</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tagline">
            FRESH • FAST • DELICIOUS
          </p>

          <h1>
            Good Food,
            <br />
            Good Mood.
          </h1>

          <p className="hero-description">
            Delicious food prepared fresh every day.
            Order your favourite meals and enjoy them
            at home.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-btn">
              View Menu
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>

        </div>


        {/* Food Visual */}
        <div className="hero-visual">

          <div className="food-circle">
            🍔
          </div>

          <div className="floating-card card-one">
            ⭐ 4.9 Rating
          </div>

          <div className="floating-card card-two">
            🔥 Fresh & Hot
          </div>

        </div>

      </section>


      {/* Menu */}
     <section className="menu-section" id="menu">

  <p className="section-label">
    OUR MENU
  </p>

  <h2>
    Popular Dishes
  </h2>

  <p className="menu-subtitle">
    Freshly prepared favourites made for every craving.
  </p>

  <div className="menu-grid">

    {menuItems.map((item) => (

      <div className="food-card" key={item.name}>

        <div className="food-image">
            <img src={item.image} alt={item.name} />
        </div>

        <div className="food-info">

          <div className="food-title-row">
            <h3>{item.name}</h3>

            <span className="food-price">
              ₹{item.price}
            </span>
          </div>

          <p>
            {item.description}
          </p>

          <button
            className="order-btn"
            onClick={() => orderOnWhatsApp(item)}
          >
            Order Now →
          </button>

        </div>

      </div>

    ))}

  </div>

</section>


      {/* About */}
      <section className="about-section" id="about">

        <div className="about-content">

          <p className="section-label">
            ABOUT US
          </p>

          <h2>
            Made Fresh.
            <br />
            Served With Love.
          </h2>

          <p>
            At UrbanBite, we believe great food should
            be fresh, affordable and full of flavour.
            Our goal is to make delicious food accessible
            to everyone.
          </p>

        </div>

      </section>
      {/* Reviews */}
<section className="reviews-section">

  <p className="section-label">
    CUSTOMER REVIEWS
  </p>

  <h2>
    What Our Customers Say
  </h2>

  <div className="reviews-grid">

    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        "The burger was fresh and delicious.
        Really good food at a reasonable price!"
      </p>

      <h3>Rahul S.</h3>
      <span>Local Customer</span>
    </div>


    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        "Loved the pizza! The ordering process
        was quick and the food arrived fresh."
      </p>

      <h3>Ananya K.</h3>
      <span>Local Customer</span>
    </div>


    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        "Affordable, tasty and great service.
        I will definitely order again."
      </p>

      <h3>Vikash M.</h3>
      <span>Local Customer</span>
    </div>

  </div>

</section>


     {/* Contact */}
<section className="contact-section" id="contact">

  <div className="contact-content">

    <p className="section-label">
      GET IN TOUCH
    </p>

    <h2>
      Visit UrbanBite
    </h2>

    <p className="contact-intro">
      Fresh food, great taste and friendly service.
      Come visit us or place your order online.
    </p>


    <div className="contact-grid">

      <div className="contact-card">
        <div className="contact-icon">📍</div>

        <h3>Our Location</h3>

        <p>
          Tatisilwai chowk Ranchi,
          <br />
          Ranchi, Jharkhand
        </p>
      </div>


      <div className="contact-card">
        <div className="contact-icon">📞</div>

        <h3>Call Us</h3>

        <p>
          +91 9905094123
        </p>

        <a href="tel:+919905094123">
          Call Now
        </a>
      </div>


      <div className="contact-card">
        <div className="contact-icon">🕐</div>

        <h3>Opening Hours</h3>

        <p>
          Monday – Sunday
          <br />
          10:00 AM – 10:00 PM
        </p>
      </div>

    </div>


    <a
      href="https://wa.me/919905094123"
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
    >
      💬 Order on WhatsApp
    </a>

  </div>

</section>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919905094123"
  className="floating-whatsapp"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
>
  💬
</a>



      {/* Footer */}
      <footer>
        <p>
          © 2026 UrbanBite. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;