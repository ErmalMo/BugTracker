import React from 'react'
import {Progress} from 'reactstrap'
export default function ProjectData(props) {
    const {project, number} = props;
    return (
        <div >
            
            <Progress color="success" value={number} />
            <p>{project}</p>
            
        </div>
    )
}
ProjectData.defaultProps = {
    project : "",
    number : 0
}