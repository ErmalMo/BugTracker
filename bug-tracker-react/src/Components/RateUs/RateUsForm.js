import React, {useState} from 'react'
import StarsRating from 'stars-rating'
export default function RateUsForm() {

    
const [rate, setRate]= useState(5);

    function handleClick(nextValue) {
        setRate(nextValue);
        console.log(nextValue)
        console.log("changed")
    }
    function handleSubmit(){
        console.log("submited rate",rate)
    }

    return (
        <div className="upper">
            <h3 >Rate Us</h3>
            <StarsRating 
                count={5}
                half={false}
                onChange={handleClick}
                size={44}
                color1={'black'}
                color2={'yellow'} />
            <button onClick={handleSubmit} className="buttonRateUs" >Submit</button>
            </div>
    )
}
