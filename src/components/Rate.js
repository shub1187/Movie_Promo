// Rate component - Used to show the star rating UI

import { Fragment } from "react";
import ReactStars from "react-rating-stars-component"

function Rates (){

    const ratingChanged = (rating)=>{  
        alert(`Your have given ${rating} star rating for Sacred game`) // Tracking the ratings give by user
    }
return (
    <Fragment>
        <ReactStars
        activeColor="red"
        size={30}
        isHalf={true}
        onChange={ratingChanged}
        />
    </Fragment>
)
}
export default Rates; // Exporting Rates component to be used in Mainpage