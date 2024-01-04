import React from 'react'
import classes from "../styles/LandingPage.module.css"
import fortnite from "../assets/fortnite.png"
import cardPic1 from "../assets/card-pic1.png"
import cardPic2 from "../assets/card-pic2.png"
import cardPic3 from "../assets/card-pic3.png"
import crossIcon from "../assets/cross-icon.svg"
import CustomButton from '../Components/CustomButton'
import Card from '../Components/Card'
import ContributionCard from '../Components/ContributionCard'


const LandingPage = () => {
  return (
    <div className={classes.landingPage_main}>
      <div className={classes.cross_icon}>
        <img src={crossIcon} alt="Cross Icon" /></div>
      <h1 className={classes.main_heading}>Epic Games : An
        American video game and software developer and publisher
        based in Cary, North Carolina.</h1>
      <div className={classes.banner_image_container}>
        <img src={fortnite} alt="Fortnite" />
      </div>
      <p className={classes.banner_para_text}>Create, play, and
        battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build,
        experience a concert or live event, or discover over a
        million creator made games, including racing, parkour,
        zombie survival, and more. Each Fortnite island has
        an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
      <CustomButton>Visit Website</CustomButton>
      <div className={classes.card_section}>
        <Card image={cardPic1} paragraph="Explore large, destructible environments where no two games are ever the same." />
        <Card image={cardPic2} paragraph="Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale" />
        <Card image={cardPic3} paragraph="Discover even more ways to play across thousands of creator-made game genres" />
      </div>
      <div className={classes.contribution_section}>
        <h2 className={classes.contribution_heading}>Our Contribution</h2>
        <p className={classes.contribution_para}>Our core offering extends beyond mere profit generation; we emphasize the growth and active
          involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to
          providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>

        <div className={classes.contribution_card_container}>
          <ContributionCard mainText="5M" subText="Daily User Engagements " />
          <ContributionCard mainText="$500K" subText="Revenue Surge for anPlatform" />
          <ContributionCard mainText="10X" subText="ROAS on all our marketing campaigns" />
        </div>
      </div>
        <div className={classes.contact_section}>
          <h4 className={classes.contact_heading}>Interested in delving deeper into the project?</h4>
          <p className={classes.contact_para}>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at <span> +91 480 20802730</span>.</p>
          <div className={classes.btn_container}><button className={classes.skype_btn}>Ring us on Skype</button>
            <CustomButton>Contact Us</CustomButton></div>
        </div>
        <span className={classes.copyRight_text}>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</span>
    </div>
  )
}

export default LandingPage