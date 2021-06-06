import React from 'react'
import {Progress} from 'reactstrap'
export default function Progres(props) {
    const {number} = props;

    return (
        <div>
            <h3> {number} </h3>
            <Progress value={number}>You're almost there!</Progress>
        </div>
    )
}
Progres.defaultProps = {
    number : 0,
    
}