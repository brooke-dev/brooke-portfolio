import React, {useState, useEffect} from 'react';
import './Home.css'
import headshot from './headshot.jpg'

function Home() {
  // Hobbies state and useEffect
  const [currentHobby, setCurrentHobby] = useState(0)
  const hobbies = ['an avid foodie🍓', 'a plant mom to 60 plants and growing 🌱', 'an adventurist at heart ⛰️','a rock climber always striving to send a harder project! 🪨 ', 'a guitarist, pianist, percussionist, oboist, vocalist... you get the point! 🎵','a cat mom 🐈‍⬛','a fan of too many movies and tv shows to list! 🎥']

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHobby((currentHobby + 1) % hobbies.length);
    }, 3500); // change the interval time to suit your needs

    return () => clearInterval(intervalId);
  }, [currentHobby, hobbies.length]);

  // Image moving/click event state
  const [isBouncing, setIsBouncing] = useState(false);
  
  const handleImageClick = () => {
    setIsBouncing(!isBouncing);
  }

  return (
  <section id="home">
    {/* <h1> HOME Section Here </h1> */}
    <h1> Hi there! My name is Brooke</h1>
    <h1> I am a software developer with a background in K-12 Music Education </h1>
    <h2> I am also {hobbies[currentHobby]} </h2>
    <img src={headshot} alt="headshot"  onClick={handleImageClick} className={isBouncing ? "bouncing" : ""}/>

  </section>
  );
}

export default Home;