import React from 'react'
import classes from "../styles/CustomButton.module.css"

const CustomButton = ({children}) => {
    return (
        <button className={classes.customButton}>{children}</button>
    )
}

export default CustomButton