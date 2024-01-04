import React from 'react'
import classes from "../styles/ContributionCard.module.css"

const ContributionCard = ({ mainText, subText }) => {
  return (
    <div className={classes.ContributionCard}>
      <h3 className={classes.main_text}>{mainText}</h3>
      <p className={classes.sub_text}>{subText}</p>
    </div>
  )
}

export default ContributionCard