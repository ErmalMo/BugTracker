import React from 'react'
import {Col } from 'reactstrap'
import ProjectData from '../ProjectData/ProjectData';
import './Style.css'
export default function Home() {
  // mt-2 d-flex justify-content-center 
    return(
        <div className="home-div">
          <Col md="5.27">
            Bug Tracker is a platform that helps you find the solutions to your project problems!
          </Col>
          <ProjectData className="projectData" />
        </div> 
    )
}
