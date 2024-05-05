import React from "react";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import "./gideprofile.css";
import Navber from '../Navbar/Navbar'
// Header
const Header = ({ guide, initialRating }) => {
  const [ratingValue, setRatingValue] = React.useState(initialRating);

  return (
    <div className="header">
      <img src={guide.imageUrl} alt={guide.name} className="profile-photo" />
      <h1 className="guide-name">{guide.fullName}</h1>
      <div className="guide-rating">
        <Rating
          onClick={setRatingValue}
          ratingValue={ratingValue}
          size={20}
          fillColor="orange"
          emptyColor="gray"
        />
      </div>
      <p className="guide-title">{guide.title}</p>
    </div>
  );
};

// Languages
const Languages = ({ languages }) => (
  <div className="language-container">
    {languages.map((lang) => (
      <div key={lang.name} className="language-box">
        <h4>{lang.name}</h4>
        <Rating
          ratingValue={lang.rating * 20}
          size={20}
          fillColor="orange"
          emptyColor="gray"
          readonly
        />
      </div>
    ))}
  </div>
);

// SocialMediaLinks
const SocialMediaLinks = ({ links }) => (
  <div className="social-media-links">
    <a
      href={links.facebook}
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a
      href={links.instagram}
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
      href={`https://wa.me/${links.whatsapp}`}
      aria-label="WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
    <a
      href={links.twitter}
      aria-label="Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </div>
);

// About Me
const About = ({ guide }) => (
  <div className="about-container">
    <div className="about-bio">
      <h2>About Me</h2>
      <p>{guide.bio}</p>
    </div>
    <div className="personal-info">
      <h2>Personal Information</h2>
      <ul>
        <li>
          <strong>City of Birth:</strong> {guide.cityOfBirth}
        </li>
        <li>
          <strong>City of Work:</strong> {guide.cityOfWork}
        </li>
        <li>
          <strong>Birthday:</strong> {guide.birthday}
        </li>
        <li>
          <strong>Email:</strong> {guide.email}
        </li>
      </ul>
    </div>
    <Languages languages={guide.languages} />
  </div>
);

// Main
function App() {
  const guideInfo = {
    fullName: "Emma Wilson",
    title: "Professional Tour Guide",
    imageUrl:
      "https://cdn-production.checkfront.com/wp-content/uploads/2022/06/tour-guide-rules.jpg",
    languages: [
      { name: "English", rating: 5 },
      { name: "Spanish", rating: 4.5 },
      { name: "French", rating: 4 },
    ],
    bio: "With over a decade of experience guiding tourists around the world's most beautiful and historic sites, Emma ensures every tour is informative and unforgettable.",
    cityOfBirth: "London, UK",
    cityOfWork: "Rome, Italy",
    birthday: "April 10, 1985",
    email: "emma@example.com",
    socialLinks: {
      facebook: "https://facebook.com/emma.wilson",
      instagram: "https://instagram.com/emma.wilson",
      whatsapp: "1234567890",
      twitter: "https://twitter.com/emma_wilson",
    },
  };

  return (
    <div>
      <Navber />
      <div className="profile-container">
        <Header guide={guideInfo} initialRating={100} />
        <About guide={guideInfo} />
        <SocialMediaLinks links={guideInfo.socialLinks} />
      </div>
    </div>
  );
}
export default App;
