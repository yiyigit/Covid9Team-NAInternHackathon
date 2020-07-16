import React, { useState } from 'react'
import image from '../../assets/kids-drawing.png';
import { Container, Button, FormCheck } from 'react-bootstrap';
import './SignUp.css';
import logo from '../../assets/logo.png'
import { registerAsStudent } from '../../../src/service.js';

const StudentsSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [parentName, setParentName] = useState('')
    const [childName, setChildName] = useState('');
    const [signUpStatus, setStatus] = useState('');
    const performRegister = (e) => {
        e.preventDefault();
        registerAsStudent(email, parentName, childName, password).then((res) => {
            setStatus(res.message);
        }).catch((err) => {
            setStatus(err.message)
        })
    }
    return (
        <Container>
            <div style={{
                height: "100%",
                width: "50%",
                position: "fixed",
                zIndex: "1",
                top: 0, left: 0, width: "50%"
            }}>
                <label style={{ marginLeft: "200px", marginTop: "300px", fontFamily: "Poppins", fontSize: "35px" }}>Sign Up today to enroll in our live <br></br> Classrooms!</label>
                <img style={{ width: "700px", marginTop: "200px", marginLeft: "100px" }} alt="empty" src={image} />
                <img style={{ width: "100px", marginTop: "-20px", marginLeft: "25px" }} alt="empty" src={logo} />
            </div>
            <div style={{ height: "100%", width: "50%", position: "fixed", zIndex: "1", top: 100, right: 0, width: "50%", marginLeft: "50px", marginTop: "100px" }}>
                <form onSubmit={(e) => performRegister(e)}>
                    <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Parent's Name:</label> <br /><br />
                    <input onChange={(e) => setParentName(e.target.value)}
                        style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", height: "50px", width: "300px", fontFamily: "Poppins" }} type="text" id="parents_name"></input><br /><br />
                    <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Child's Name:</label><br /><br />
                    <input onChange={(e) => setChildName(e.target.value)}
                        style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial", height: "50px", width: "300px", fontFamily: "Poppins" }} type="text" id="child_name"></input><br /><br />
                    <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Email:</label><br /><br />
                    <input onChange={(e) => setEmail(e.target.value)}
                        style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial", height: "50px", width: "300px", fontFamily: "Poppins" }} type="text" id="child_email"></input><br /><br />
                    <label style={{ fontFamily: "Poppins", fontSize: "25px" }}>Password:</label><br /><br />
                    <input onChange={(e) => setPassword(e.target.value)}
                        style={{ fontSize: "25px", borderRadius: "10px", backgroundColor: "Gainsboro", fontFamily: "Arial", height: "50px", width: "300px", fontFamily: "Poppins" }} type="password" id="child_password"></input><br /><br /><br />
                    <button style={{ fontFamily: "Poppins", fontSize: "15px", marginLeft: "100px", zIndex: "9999", transition: "all 0.2s ease-in 0s", cursor: "pointer", left: "50%", backgroundColor: "#b959ea", height: "50px", width: "100px", borderRadius: "12px" }} type="submit" id="child_signup_button">Sign Up</button>
                </form>
                <p className="signUpStatus">{signUpStatus}</p>

            </div>
        </Container >
    )
}
export default StudentsSignUp;