import React , {useState , useEffect} from 'react'
import "./style.css"
import {Container} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CreateIcon from '@material-ui/icons/Create';
import StarRateIcon from '@material-ui/icons/StarRate';

import axios from "axios"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function Profileinfo() {

    const [people , setpeople] = useState([ ]);

    useEffect(() =>{
         
        async function fetchData(){
            const req = await axios.get('http://localhost:4000/users/findone');
            setpeople(req.data);
        } 
        fetchData();

    } , []);


    return (
        <div>
        
            <Container className="img">
            <Image src={people.imgurl} className="info-image" />
            <h3 className="info-name">{people.name}
            <IconButton>  
            
            <CheckCircleOutlineOutlinedIcon fontSize="large" className="text-success info-icon" />
            </IconButton>
            </h3>
            </Container>
        
            <Container className="flex-items">
              <Link to="profile-info/settings"><div className="setting" id="settings" >
              <IconButton> <SettingsIcon  fontSize="large" /></IconButton>
              <h6>SETTINGS</h6>
              </div></Link>
              <Link to="profile-info/media"><div className="camera" id="camera">
              <IconButton><CameraAltIcon   fontSize="large" /></IconButton>
              <h6 style={{textDecoration:"none" , color:"black"}}>ADD MEDIA</h6>
              </div></Link>
              <div className="create">
              <Link to="/profile-info/Edit"><IconButton><CreateIcon  fontSize="large" /></IconButton>
              <h6 style={{textDecoration:"none" , color:"black"}}>EDIT INFO</h6></Link>
              </div>

            </Container>

            <Container>
               <div className="footer-info">
               <StarRateIcon fontSize="larger" id="super-like" /> 
               <h4>5 Super Likes a Day</h4>
               </div>
               <h6 className="footer-text">you get 5 liks par day and can increase your 
                   chance to match by 3 times
               </h6>
            </Container>

            <Container>
                <div className="footer-button">
                <IconButton><h6 className="footer-button-text">MY TINDER PLUSE</h6></IconButton>
                </div>
            </Container>
        </div>
    )
}

export default Profileinfo;
