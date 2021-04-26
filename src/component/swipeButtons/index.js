import React from 'react'
import "./style.css"
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";




function Swipebutton() {
    return (
       <div className="swipeButtons">
           <IconButton  className="SwipeButtons__repeat">
               <ReplyIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__left">
               <CloseIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__star">
               <StarRateIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__right">
               <FavoriteIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__lightning">
               <FlashOnIcon fontSize="large" />
           </IconButton>
       </div>
    )
}

export default Swipebutton
