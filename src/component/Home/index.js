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

    const [people , setpeople] = useState([
        {
            name:"elon musk 45",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizVhS7c6SMY98gicmo0QzJvH9bWxQZio6_A&usqp=CAU",
            desc : "totelly single , looking for some one , no string attached",
        },
        {
            name : "jef bezos 54",
            image : "https://i.ibb.co/2nbk6C3/jef.jpg",
            desc : "totelly single , looking for some one , no string attached",

        },
        {
            name : "warren buffett 82",
            image : "https://observer.com/wp-content/uploads/sites/2/2020/02/GettyImages-1163170859.jpg?quality=80&w=970",
            desc : "totelly single , looking for some one , no string attached",

        },
        {
            name:"elen degeneres 59",
            image : "https://c.ndtvimg.com/2020-09/32eu5a2_ellen-degeneres_625x300_22_September_20.jpg",
            desc : "totelly single , looking for some one , no string attached",
        },
        {
            name : "bill gates 73",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxKMoKHgghlP6coAsRHoJc072RUCWkLp5Ew&usqp=CAU",
            desc : "totelly single , looking for some one , no string attached",

        },
        {
            name : "jack ma 52",
            image : "https://c.ndtvimg.com/2018-09/d8r6nbfk_jack-ma-alibaba-afp_625x300_10_September_18.jpg",
            desc : "totelly single , looking for some one , no string attached",

        },
    ]);

    // useEffect(() =>{
         
    //     async function fetchData(){
    //         const req = await axios.get('http://localhost:4000/users/');
    //         setpeople(req.data);
    //     } 
    //     fetchData();

    // } , []);
    //  console.log(people);


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
                   style={{backgroundImage: `url(${person.image})` }} 
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
