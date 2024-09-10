import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import emailjs
import Navbar from "../components/Navbar"; 
import "../styles/MainPage.css"; 

// Import team member images
import ababuImage from "../assets/manu13.jpg";
import brianImage from "../assets/brian.jpeg";
import olivesImage from "../assets/matei.jpeg";
import Image1 from "../assets/b1.jpeg";
import Image2 from "../assets/b2.jpeg";
import Image3 from "../assets/b3.jpeg";

// ContactForm component
function ContactForm() {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_r1zv3bl", // Replace with your EmailJS service ID
        "template_txfnbce", // Replace with your EmailJS template ID
        form.current,
        "CS_INveP27gCJnZvk" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    // Clear the form after submission
    e.target.reset();
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <Navbar /> {/* Include the Navbar */}
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to RETChain</h1>
        <p>Your gateway to innovative blockchain solutions for real estate tokenization.</p>
        <p>Invest in real estate with confidence and security through our innovative tokenization platform. You will get an opportunity for fractional, tokenized ownership. Become a shareholder in Real Estate Investments, powered by Blockchain Technology.</p>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="div1">
            <h2 className="about2">About RETChain</h2>
            <p className="about1">
              RETChain is revolutionizing the real estate market by leveraging blockchain technology
              to tokenize properties, enhancing transparency, liquidity, and security. Our platform
              allows investors to easily buy, sell, trade property and become a shareholder, making real estate
              investment more accessible and efficient. Join us in transforming the future of real
              estate with cutting-edge blockchain solutions.
            </p>
          </div>
          <motion.div
            className="div2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={Image1} alt="Blockchain" className="blockchain-image" />
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="team3">
            <h1>Our Team</h1>
            <p className="team1">
              RETChain is a union of seasoned Real Estate Tokenization and blockchain industry experts, <br />
              along with marketing and technology experts. Together, we are executing our collective vision to create a Real Estate Ownership Experience and also to ensure Liquidity.
            </p>
          </div>
          <div className="team">
            <div className="member">
              <img src={ababuImage} alt="Ababu Oturi" className="team-image" />
              <h4>Ababu Oturi - CEO</h4>
              <p>Ababu leads the team with a passion for blockchain innovation and has background knowledge in Frontend Development.</p>
            </div>
            <div className="member">
              <img src={brianImage} alt="Brian Kimathi" className="team-image" />
              <h4>Brian Kimathi - CTO</h4>
              <p>Kimathi is a blockchain expert with extensive experience in Backend Development.</p>
            </div>
            <div className="member">
              <img src={olivesImage} alt="Olives Matei" className="team-image" />
              <h4>Olives Matei - CFO</h4>
              <p>Olives is a Financial expert with extensive experience and has expertise in API development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="solution-content">
          <motion.div
            className="div9"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={Image2} alt="Property" className="solution-image" />
          </motion.div>
          <div className="div8">
            <h2>Our Solutions</h2>
            <p>
              RETChain offers blockchain-based real estate tokenization services,
              improving liquidity, transparency, and security for property investments.
            </p>
            <ul>
              <li>Tokenize real estate assets</li>
              <li>Secure, decentralized transactions</li>
              <li>Increased liquidity through fractional ownership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section className="tokenization">
        <h1>Real Estate Tokenization</h1>
        <p>
        Real estate tokenization is transforming how investors access and participate in real estate markets, making property investment more democratic, liquid, and efficient.
        </p>
        <h2>How It Works</h2>
        <ul>
          <li>Choose a property to tokenize.</li>
          <ul>
            <li>A property owner selects a real estate asset, such as a residential or commercial building, for tokenization. This can be any type of real estate, from individual homes to large developments.</li>
            <li>The property’s value is assessed and divided into smaller, manageable units to allow fractional ownership.</li>
          </ul>

          <li>Divide the property into digital tokens.</li>
          <ul>
            <li>Once the property is chosen, it is digitally divided into a certain number of tokens, where each token represents a fraction of ownership in the property. For example, if a property is valued at $1 million, it could be divided into 1 million tokens, each worth $1.</li>
            <li>These digital tokens are created and issued on a blockchain, ensuring transparency and security through decentralized ledger technology.</li>
          </ul>

          <li>Investors can buy and sell these tokens, representing ownership.</li>
          <ul>
            <li>Investors can buy tokens representing fractional ownership in the property. They don’t need to purchase the entire property; they can own a small fraction based on the number of tokens they buy.</li>
            <li>Tokens can be traded on specialized platforms or secondary markets, giving investors liquidity that is traditionally hard to achieve in real estate.</li>
            <li>Investors benefit from owning a portion of the property and can sell their tokens at any time without needing to go through a lengthy process of selling the property itself.</li>
          </ul>

          <li>Smart Contracts and Blockchain</li>
          <ul>
            <li>The tokens are governed by smart contracts, which are self-executing agreements coded into the blockchain. These contracts ensure that ownership rights, profit-sharing (if applicable), and other terms are automatically enforced.</li>
            <li>The blockchain maintains a secure and immutable record of transactions, making it nearly impossible for unauthorized changes or fraud to occur.</li>
          </ul>

         <li>Ownership and Profit Distribution</li>
         <ul>
            <li>Token holders become fractional owners of the property, with rights to profits (like rental income) and any appreciation in the property’s value.</li>
            <li>Profit distributions (e.g., rental income, dividends) are managed through smart contracts, ensuring automated and timely payments to token holders.</li>
         </ul>

         <li>Security and Transparency</li>
         <ul>
            <li>Blockchain ensures that all transactions are secure, transparent, and immutable. Every transaction related to the tokens is recorded on the blockchain, which can be verified by anyone.</li>
            <li>The use of blockchain also reduces the need for intermediaries, such as brokers or banks, lowering costs and speeding up transactions.</li>
         </ul>
        </ul>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h1>Our Blogs</h1>
        <h2>Blockchain Insights</h2>
        <p>Explore our blog for the latest insights on blockchain and real estate tokenization.</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-content">
          <div className="div6">
            <h2>Contact Us</h2>
            <p>Get in touch with us, we help you with the Investment Journey.</p>
            {/* Use the ContactForm component */}
            <ContactForm />
          </div>
          <motion.div
            className="div7"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={Image3} alt="Contact" className="contact-image" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
