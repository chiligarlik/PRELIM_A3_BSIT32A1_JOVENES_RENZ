import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./lyceum-of-alabang_logo-removebg-preview.png";
import background from "./reactbg.jpg"; // Import the background image

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Lyceum of Alabang Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          <h3 className="d-inline-block">Lyceum of Alabang</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Course
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    BSREM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSTourism
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSHM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSBA (Marketing, Financial, HRDM)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCRIM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSIT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSIE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSCPE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSPSYCH
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BSEd (English, Filipino, Math)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BTVTE
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div
      className="home-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="p-5 bg-light text-dark rounded shadow-lg w-75">
        <div className="row mt-4">
          <div className="col-md-4">
            <h3>PHILOSOPHY</h3>
            <p>
              An institution that provides quality and relevant instruction and
              innovation for the next generation to improve the lives of
              individuals; physically, emotionally, morally, and spiritually
              adhere to the principle of God.
            </p>
          </div>
          <div className="col-md-4">
            <h3>VISION</h3>
            <p>
              Lyceum of Alabang envisions becoming one of the nation’s leading
              educational institutions involved in the pursuit and advancement
              of knowledge, skills, and values for personal, community and
              national development.
            </p>
          </div>
          <div className="col-md-4">
            <h3>MISSION</h3>
            <p>
              Lyceum of Alabang shall provide world-class education and training
              through competent personnel, high-end facilities, advanced
              technology, and equipment and accredited curricula of
              industry-based courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li>Email: info@lyceumofalabang.edu.ph</li>
        <li>Phone: +63 123 456 7890</li>
        <li>Address: Alabang, Muntinlupa City, Philippines</li>
      </ul>
    </div>
  );
}

// About Us Component
function AboutUs() {
  return (
    <div className="container mt-5">
      <h2>HISTORICAL BACKGROUND</h2>
      <p>
        Dr. Danilo V. Ayap and Mr. Alfonso Borda, who shared the same passion
        for Education and Technology, well experience and highly competent
        people founded the Lyceum of Alabang on October 2003 with its original
        name as the National College of Science and Technology or NCST in Km. 88
        GNT Center, Putatan – Muntinlupa City. The Founding of the College is
        marked by a remarkable vision and the abiding faith of the founders in
        the decisive role of education and technology in raising the quality of
        life of the people. Founded as the premier institution in the south,
        Lyceum of Alabang is a non-profit organization dedicated to identifying,
        preserving, and promoting public awareness in Science and Technology.
        Bustling to be globally competitive in Education, Lyceum of Alabang
        became a part of the development of an educational institution in
        academic, sports, cultural, and social responsibility not only to the
        students but also to the whole community of Muntinlupa city. At this
        point, hearty employees support was shown on the very first term of
        operation, when 580 students enrolled after only 400 had been
        anticipated. The board immediately had to increase in teaching force.
        Two full years of CHED and TESDA programs were offered, including BSBA,
        BSIT, BSCS, BSHRM, HRD, CT, ECT, and ComSec. The industry of the board
        of trustees in the hectic days of founding the school is shown by the
        fact that several board meetings were held in the first year of
        operation, needless to say were the untiring marketing activities of the
        institution. The board members unselfishly sacrificed their time.
        Another board meeting was held and these gave Dr. Danilo V. Ayap, an
        idea to amend its seC Registration as to the form of ownership of the
        institution. Thus, from being a private corporation to a family-owned
        corporation on April 2004, with Dr. Danilo V. Ayap, as the President and
        Chairman of the Board of Trustees, Mrs. Norma M. Ayap, the Vice
        President for Administration and Directress of Basic Education
        Department, Ms. Hazel M. Ayap, as the Vice President for Finance and
        Comptroller, Mr. Fritz Gerard Ayap, the Vice President for Plans and
        Programs, and Ms. Faith Ayap as the Vice President for Technology
        Education Department. Today’s program is, in a way, was splendid to that
        of 2003, the present almost one-hectare land area with new wing building
        being built and still with an ongoing construction of facilities to meet
        the constant growth by the school: Enrolment today – and still on the
        upgrade is 2,800. During the past year the school has also been enlarged
        by being the only assessment center accredited by TESDA in the city of
        Muntinlupa, Parañaque, Las Piñas, Taguig and Pateros (MUNTIPARLAS –
        Lapat District). The new building of Lyceum of Alabang since its
        transfer on April 2012 in Km 30 Tunasan, Muntinlupa City, with an
        outdoor swimming pool adjoining, and its recreational ground and covered
        court give Lyceum of Alabang one of the finest school, from every
        standpoint in the entire city of Muntinlupa. Gearing towards global
        Education, Lyceum of Alabang continue to move forward with plans on
        accreditation level status and develop new programs which are marketable
        and feasible.
      </p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-0">&copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}

// App Component (Main)
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
