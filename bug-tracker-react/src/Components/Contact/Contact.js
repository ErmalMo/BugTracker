import React from 'react'
import Pic from '../../Pictures/bugWhite.png'
import HomeTest1 from '../../Pictures/testHome.png'
import './Style.css'
import { Col, Row, Card, CardTitle, CardText } from 'reactstrap'
export default function Contact() {
    return (
        <div className="bodyContact" >
            <Row>
                <Col sm="6">
                    <div className="picUpContact" > 
                        <img className="picUpTestContact" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
                <Col sm="6"  >
                <form style={{marginTop:"0%"}} className="contactForm" >
                    <div className="divNamee" >
                        <img className="logoo" src={Pic} />
                        <h3 className="upLogReg">Contact us</h3>
                    </div>
                    <div className="content">
                        <input className="inp" type="email"  name="email" placeholder="Enter your email" />
                        <br />
                        <textarea style={{marginTop:"7px"}} class="txtAreaContact" type="text" rows="5" placeholder="Enter your message" />
                        <br />
                        <button className="buttonn" type="submit"  ><span>Submit </span></button>
                    </div>
                </form>
                </Col>
                
                 </Row>
                 </div>
    )
}
