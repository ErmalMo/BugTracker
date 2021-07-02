import React from 'react'
import './Style.css'
import { Col , Row } from 'reactstrap' 
import HomeTest1 from '../../Pictures/testHome.png'
export default function ProjectData() {
    return (
        <div className="bodyProjectData">
             
             {/* <Row>
                <Col sm="6">
                    <div className="picUpContact" > 
                        <img className="picProjectDate" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
                <Col sm="6"  > */}
                    <textarea  class="txtAreaProject" type="text" rows="5" cols="18" placeholder="Enter your message" />
                    <input className="emailProjectData" type="email"  name="email" placeholder="Enter your email" />
                    <br />
                    <button className="submitProjectData">Submit your project data</button>
                {/* </Col>
                
                 </Row> */}
        </div>
    )
}
