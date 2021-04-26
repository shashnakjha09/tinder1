import React , {useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./style.css";
import axios from "axios";
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";


function Home() {

    const [people , setpeople] = useState([ ]);

    useEffect(() =>{
         
        async function fetchData(){
            const req = await axios.get('http://localhost:4000/users/');
            setpeople(req.data);
        } 
        fetchData();

    } , []);
     console.log(people);


    const swiped = (direction , nameToDelete) => {
            console.log("removing" + nameToDelete);
            // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }



    return (
        <div>
            <div className="tindercard">
            <div className="tindercards__cardContainer">
              {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe ={["up" , "down"]}
                onSwipe={(dir) => swiped(dir , person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                  <div 
                   style={{backgroundImage: `url(${person.imgurl})` }} 
                  className="card"
                  >
                      <h3>{person.name}</h3>
                      <h5>{person.desc}</h5>
                      </div>
                </TinderCard>
              ))}
            </div>
        </div>

        <div className="swipeButtons">
           <IconButton  className="SwipeButtons__repeat">
               <ReplyIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__left">
               <CloseIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__star">
               <StarRateIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__right">
               <FavoriteIcon fontSize="large" />
           </IconButton>
           <IconButton  className="SwipeButtons__lightning">
               <FlashOnIcon fontSize="large" />
           </IconButton>
       </div>

     </div>
    )
}

export default Home
