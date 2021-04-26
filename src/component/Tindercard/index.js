import React , {useState , useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./style.css";
import axios from "axios";
// import instance from "../../axios";

function Tindercards() {
    const [people , setpeople] = useState([ ]);

    useEffect(() =>{
         
        async function fetchData(){
            const req = await axios.get('http://localhost:4000/users/');
            setpeople(req.data);
        } 
        fetchData();

    } , []);
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
    )
}

export default Tindercards
