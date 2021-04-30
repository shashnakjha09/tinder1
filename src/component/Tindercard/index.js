import React , {useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./style.css";
import axios from "axios";
// import instance from "../../axios";

function Tindercards() {
    const [people , setpeople] = useState([
        {
            name:"jacma 59",
            image : "https://c.ndtvimg.com/2018-09/d8r6nbfk_jack-ma-alibaba-afp_625x300_10_...",
            desc : "totelly single , looking for some one , no string attached",
        },
        {
            name : "jef bezos 54",
            image : "https://i.ibb.co/2nbk6C3/jef.jpg",
            desc : "totelly single , looking for some one , no string attached",

        },
        {
            name : "elen 60",
            image : "https://c.ndtvimg.com/2020-09/32eu5a2_ellen-degeneres_625x300_22_Septe...",
            desc : "totelly single , looking for some one , no string attached",

        }
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
                      <h3>{person.name}</h3>s
                      <h5>{person.desc}</h5>
                      </div>
                </TinderCard>
              ))}
            </div>
        </div>
    )
}

export default Tindercards
