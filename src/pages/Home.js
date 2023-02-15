import React from 'react';
import Image6 from '../assets/images/MyFace.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <img src={Image6} />
      <div className="about">
        <h2> Alex Clayton</h2>
        <div className="prompt">
          <p>
          Hello World, welcome to my portfolio! My name is Alex Clayton. I'm a Kansan born-and-raised and can't think of a place I'd rather be in this world. I'm fairly new to coding, but I'm learning fast and looking forward to improving my skills each and every day. I'm currently attending the KU Coding Bootcamp where I've learned the basics including how to make this webpage! I'm currently living in Overland Park with my best friend and 2 cats, Cleopatra and Achilles. In my spare time I like to play video games (primarily Rust), spend time outdoors playing soccer and cruising on a skateboard, and of course CODING! I spent the last 12 years in the hospitality industry working every job in a hotel from breakfast attendant to general manager. It was hard to say goodbye to that chapter in my life, but I was fortunate to learn a lot not just about the world but also myself, and make some lifelong friends along the way. Now I've shifted my focus to a future in web development and I'm excited to see what new adventures this will bring 😁
          </p>
          <p>test change</p>
        </div>
      </div>
    </div>
  )
}

export default Home