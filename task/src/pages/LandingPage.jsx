import React from 'react'
import classes from "../styles/LandingPage.module.css"
import fortnite from "../assets/fortnite.png"
import cardPic1 from "../assets/card-pic1.png"
import cardPic2 from "../assets/card-pic2.png"
import cardPic3 from "../assets/card-pic3.png"
import CustomButton from '../Components/CustomButton'
import Card from '../Components/Card'

const LandingPage = () => {
  return (
    <div className={classes.landingPage_main}>
      <h1 className={classes.main_heading}>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h1>
      <div className={classes.banner_image_container}>
        <img src={fortnite} alt="Fortnite" />
      </div>
      <p className={classes.banner_para_text}>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
      <CustomButton>Visit Website</CustomButton>
      <div className={classes.card_section}>
        <Card image={cardPic1} paragraph="Explore large, destructible environments where no two games are ever the same." />
        <Card image={cardPic1} paragraph="Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale" />
        <Card image={cardPic1} paragraph="Discover even more ways to play across thousands of creator-made game genres" />
      </div>
    </div>
  )
}

export default LandingPage