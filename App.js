import React,{useState} from 'react'
import "./css/style.css";
import "./css/bootstrap.css";
import "./fonts/fontawesome-webfont.woff";
import "./fonts/fontawesome-webfont.ttf";
import "./fonts/fontawesome-webfont.woff2";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]); // حالة لتتبع السلة
  const [showCart, setShowCart] = useState(false); // حالة لإظهار/إخفاء نافذة العربة

  const products = [
    { id: 1, name: "Alarm Systems", price: 100.99, image: "images/alarm.png" },
    { id: 2, name: "CCTV Cameras", price: 399.99, image: "images/cctv-camera.png" },
    { id: 3, name: "Security Monitoring", price: 50.99, image: "images/spyware.png" },
    { id: 4, name: "Access Control Systems", price: 200.99, image: "images/access-control.png" },
    { id: 5, name: "Motion Sensors", price: 99.99, image: "images/watch.png" },
  ];

  // دالة لإضافة المنتج إلى السلة
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
  <>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Site Metas */}
  <link rel="icon" href="images/fevicon.png" type="image/gif" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Berimbolo-security</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n    .offer_section img{\n      height: 100px;\n      margin-left: 25%;\n    }\n  "
    }}
  />
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
    rel="stylesheet"
  />
  {/* font awesome style */}
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />
  {/* header section strats */}
  <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>Berimbolo-Security</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className=""> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {" "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                {" "}
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#plans">
                {" "}
                plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  {/* end header section */}
  {/* Introduction section */}
  <section className="slider_section">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5">
                <div className="detail-box">
                  <h1>Welcome to Berimbolo-Security</h1>
                  <p>
                  Berimbolo-Security provides advanced security solutions for homes and small businesses.
                   We rely on our expertise and commitment to safety to deliver peace of mind and trust to our clients.
                   </p>
                  <div className="btn-box">
                    <a href="#contact" className="btn-1">
                      login
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7">
                <div className="img-box">
                  <img
                    src="images/Berimbolosecurity.jpg"
                    alt="Security Solutions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End introduction section */}
  <h1 style={{ textAlign: "center" }}>our service</h1>
  {/* Services Section */}
  <section
    className="offer_section "
    style={{ marginTop: "-20px" }}
    id="services"
  >
    <div className="container-fluid">
      <div className="row">
        {/* Service Box 1 */}
        <div className="col-md-7 px-0">
          <div className="box offer-box2">
            <img
              src="/images/camera.png"
              style={{ width: 300 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Security System Installation</h4>
              <p>
We deliver professional services for setting up security systems,
               including alarm systems, CCTV cameras, and access control solutions.
              </p>
            </div>
          </div>
        </div>
        {/* Service Box 2 */}
        <div className="col-md-5 px-0">
          <div className="box offer-box2">
            <img
              src="images/maintenance.png"
              style={{ width: 150, height: 100 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Security System Maintenance</h4>
              <p>
              Maintain the functionality 
              of your security systems with routine check-ups and expert repairs by our qualified technicians
              </p>
            </div>
          </div>
          {/* Service Box 3 */}
          <div className="box offer-box2">
            <img
              src="/images/support.png"
              style={{ width: 200, height: 200 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Security Consultation Services</h4>
              <p>
              Benefit from customized security 
            consultation services to analyze your requirements and propose ideal solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  {/* End Services Section */}
  <h1 style={{ textAlign: "center", marginTop: 25 }}>our plans</h1>
  {/* Plan Section */}
  <section className="offer_section" style={{ marginTop: 30 }} id="plans">
    <div className="container-fluid">
      <div className="row">
        {/* Plan Box 1 */}
        <div className="col-md-7 px-0">
          <div className="box offer-box1">
            <img
              src="/images/inventory.png"
              style={{ width: 300 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Basic Security Plan</h4>
              <p>
              The Basic Security Plan 
              provides fundamental features, 
              including alarm monitoring and standard surveillance camera setup.
              </p>
            </div>
          </div>
        </div>
        {/* Plan Box 2 */}
        <div className="col-md-5 px-0">
          <div className="box offer-box1">
            <img
              src="/images/laptop.png"
              style={{ width: 150, height: 100 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Advanced Security Plan</h4>
              <p>
              Enhance your protection 
              with our Advanced Security Plan, offering 24/7 monitoring,
               access control systems, and routine maintenance.
              </p>
            </div>
          </div>
          {/* Plan Box 3 */}
          <div className="box offer-box1">
            <img
              src="/images/customization.png"
              style={{ width: 200, height: 200 }}
              alt="Service Image"
            />
            <div className="detail-box">
              <h4>Custom Security Solutions</h4>
              <p>
              "Create a security plan tailored to your unique
               requirements with our Custom Security Solutions,
                featuring personalized advice and adaptable options."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Plan Section */}
  {/* Security Products Section */}
  <section className="product_section layout_padding" id="products">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Our Security Products</h2>
        <p>
          Discover our range of high-quality security products designed to
          safeguard your home or business.
        </p>
      </div>
      <div className="row">
        {/* Security Product Item 1: Alarm Systems */}
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/alarm.png" alt="Alarm Systems" />
            </div>
            <div className="detail-box">
              <a href="#">Alarm Systems</a>
              <div className="price_box">
                <h6 className="price_heading">
                  Starting from <span>$</span> 100.99
                  
                </h6>
               <br/> <button
                      onClick={() => addToCart(products)}
                      className="btn btn-dark" >add to cart
                    </button>
              </div>
            </div>
          </div>
        </div>
        {/* Security Product Item 2: CCTV Cameras */}
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/cctv-camera.png" alt="CCTV Cameras" />
            </div>
            <div className="detail-box">
              <a href="#">CCTV Cameras</a>
              <div className="price_box">
                <h6 className="price_heading">
                  Starting from <span>$</span> 399.99
                </h6>
               <br/> <button
                      onClick={() => addToCart(products)}
                      className="btn btn-dark" >add to cart
                    </button>
              </div>
            </div>
          </div>
        </div>
        {/* Security Product Item 3: Security Monitoring */}
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="/images/spyware.png" alt="Security Monitoring" />
            </div>
            <div className="detail-box">
              <a href="#">Security Monitoring</a>
              <div className="price_box">
                <h6 className="price_heading">
                  Starting from <span>$</span> 50.99/month
                </h6>
                 <br/> 
                 <button
                      onClick={() => addToCart(products)}
                      className="btn btn-dark" >add to cart
                <br/>    </button>
              </div>
            </div>
          </div>
        </div>
        {/* Add More Security Product Items Here */}
        {/* Example: Security Product Item 4: Access Control Systems */}
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img
                src="images/access-control.png"
                alt="Access Control Systems"
              />
            </div>
            <div className="detail-box">
              <a href="#">Access Control Systems</a>
              <div className="price_box">
                <h6 className="price_heading">
                  Starting from <span>$</span> 200.99
                </h6>
                <br/>
                <button
                      onClick={() => addToCart(products)}
                      className="btn btn-dark" >add to cart
                    </button>
              </div>
            </div>
          </div>
        </div>
        {/* Example: Security Product Item 5: Motion Sensors */}
        <div className="col-sm-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src="images/watch.png" alt="Motion Sensors" />
            </div>
            <div className="detail-box">
              <a href="#">Motion Sensors</a>
              <div className="price_box">
                <h6 className="price_heading">
                  Starting from <span>$</span> 99.99
                </h6>
             <br/>   <button
                      onClick={() => addToCart(products)}
                      className="btn btn-dark" >add to cart
                    </button>
              </div>
            </div>
          </div>
        </div>
        {/* Add more product items as needed */}
      </div>
    </div>
  </section>
      
  <div
        className="cart-icon"
        onClick={() => setShowCart(!showCart)}
      >
        <img
          src="images/LOGO.png"
          alt="Cart"
          style={{ width: "50px", height: "50px" }}
        />
        <span className="cart-count">{cart.length}</span>
      </div>

      {/* نافذة العربة */}
      {showCart && (
        <div className="cart-popup">
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                 <strong>{item.name}</strong>-${item.price.toFixed(2)
                 ?Number(item.price).toFixed(2):"NOTFOUND"}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
  {/* End Security Products Section */}
  {/* about section */}
  {/* About Us Section */}
  <section className="about_section layout_padding" id="about">
    <div className="container">
      <div className="row">
        {/* About Us Image */}
        <div className="col-md-6">
          <div className="img-box">
            <img
              src=" /images/Berimbolosecurity.jpg"
              alt="About Us Image"
            />
          </div>
        </div>
        {/* About Us Details */}
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2 style={{ color: "white" }}>About Berimbolo-Security</h2>
            </div>
            <p style={{ color: "white" }}>
            Berimbolo-Security is a top supplier of all-inclusive security solutions for small businesses and homes.
             Ensuring our clients'
             safety and security through the design and implementation of cutting-edge security solutions is our aim.
            </p>
            <p style={{ color: "white" }}>
            Among the many security services we provide is risk evaluations, sales, 
            and setup of security equipment (such CCTV cameras and alarms), 
            system upkeep, and round-the-clock surveillance of CCTV footage and alarm systems.
            </p>
            <p style={{ color: "white" }}>
            Our staff of knowledgeable experts is committed to offering individualized 
            solutions made to meet each person's specific demands client.
             Delivering superior products and services is something we take pleasure in. outstanding client support.
            </p>
            <p style={{ color: "white" }}>
            For more information on how Berimbolo-Security may 
            assist in safeguarding your assets and loved ones, get in touch with us right now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Us Section */}
  {/* end about section */}
  {/* Clients Review Section */}
  <section className="client_section" style={{ marginTop: 30 }}>
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Clients Review</h2>
        <p>what our clients have to say about us.</p>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {/* Client Review 1 */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/per1.jpeg" alt="Client Image" />
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>mark </h5>
                          <h6>Homeowner</h6>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                      <p>
                        "Berimbolo-Security provided us with excellent service. Their
                        security systems are top-notch and have given us peace
                        of mind knowing our home is protected."
                      </p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Review 2 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img
                        src="images/per2.jpeg"
                        id="t-img"
                        alt="Client Image"
                      />
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>sarah</h5>
                          <h6>Business Owner</h6>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                      <p>
                        "We've been using Berimbolo-Security for our business for years
                        now, and their systems have never let us down. Their
                        team is professional and responsive to our needs."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Review 3 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="box">
                    <div className="img-box">
                      <img src="images/client.jpg" alt="Client Image" />
                    </div>
                    <div className="detail-box">
                      <div className="client_info">
                        <div className="client_name">
                          <h5>lara</h5>
                          <h6>Property Manager</h6>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true" />
                      </div>
                      <p>
                        "Berimbolo-Security's systems are user-friendly and reliable.
                        They've made managing security for our properties much
                        easier and more efficient."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <div className="carousel_btn-box">
          <a
            className="carousel-control-prev"
            href="#customCarousel2"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#customCarousel2"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* End Clients Review Section */}
  {/* contact section */}
  <section className="contact_section layout_padding" id="contact">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
           <span>login</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-3 px-0">
          <div className=""></div>
        </div>
        <div className="col-md-6 px-0">
          <div className="form_container">
            <form action="">
              <div className="form-row">
                <div className="form-group col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input
                    type="text"
                    className="message-box form-control"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="btn_box">
                <button>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}
  {/* info section */}
  <section className="info_section " style={{ marginTop: 20 }}>
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="info_contact ">
              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="link-box">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Location : suez we suez</span>
                  </a>
                </div>
                <div className="col-md-5">
                  <a href="#" className="link-box">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Call +12367987</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" className="link-box">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>Berimbolosecurity12@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5  col-lg-3 mx-auto">
            <div className="info_form ">
              <form action="#">
                <input type="email" placeholder="Enter Your Email" />
                <button>
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="info_logo">
          <a className="navbar-brand" href="index.html">
            <span>Berimbolo-Security</span>
          </a>
        </div>
        <div className="social-box">
          <a href="">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
          <a href="">
            <i className="fa fa-youtube" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end info section */}
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <h4 style={{ color: "white" }}>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="#" style={{ color: "white" }}>
          the developer: farah garip
        </a>
      </h4>
    </div>
  </footer>
 
</>
  )
}

export default App