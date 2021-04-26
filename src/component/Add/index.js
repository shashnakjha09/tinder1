import React from 'react'
import {Container} from 'react-bootstrap'
import "./style.css"
import ClearIcon from '@material-ui/icons/Clear';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function Media() {
    return (
        <div>
            <Container>
            <h3>Create New <span style={{float:"right"}} id="clear"><Link to="/profile-info"><ClearIcon style={{textDecoration:"none" , color:"black"}}/></Link></span></h3>
            <h5 id="content-type">Select a content type</h5>
            </Container>
            <br></br>
            
            <Container className="prompt" style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iCdu7VsrqtzPYbSbQrMmePdWjSgu2iKt_g&usqp=CAU")` }}>
            <h2>Prompt</h2>
            <h5>Create a new</h5>
            </Container>

            <Container className="prompt" style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjdYrHjjV59LuAes4_d-zJO54MnR5bBdJMg&usqp=CAU")` }}>
            <h2>Gallery</h2>
            <h5>Upload from gallery</h5>
            </Container>

            <Container className="prompt" style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtfFj-kEBlAcny3oFCG1SJ-aT597aaqh4ag&usqp=CAU")` }}>
            <h2 style={{color:"gray"}}>Camera</h2>
            <h5 style={{color:"gray"}}>Capture form camera</h5>
            </Container>
        </div>
    )
}

export default Media;
