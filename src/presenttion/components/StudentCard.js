import '../css/student-card.css'
import StudentList from "./StudentList";
import PropTypes from "prop-types";
import {useState} from "react";

function ExpandButton(props) {
    return(
        <div onClick={props.click}>
            <button>+</button>
        </div>
    )
}
function Grades(props) {
    const grades=props.grades;
    let count=0;
    return(
        <div className={"grades"}>
            <ol>
                {
                    grades.map(grade=>{
                        return(
                            <li>
                                <div>
                                    <p>Test {++count}:</p>
                                    <p> {grade} </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

const StudentCard = (props) => {
    const [expanded,setExpanded]=useState(false);
    const onClick=()=>{
        setExpanded(!expanded)
    }
  return(
      <div className={"card"}>
          <img className={"student-image"} src={props.photoUrl}/>
          <div className={"content"} alt={`Student image of ${props.name}`}>
              <h1>{props.name}</h1>
              <div className={"card-text"}>
                <p>Email: {props.email}</p>
                <p>Company: {props.company}</p>
                <p>Skill: {props.skill}</p>
                <p>Average: {props.average}%</p>
              </div>
          </div>
          <ExpandButton click={onClick} />
          <Grades grades={props.grades} />
      </div>
  )
}
StudentCard.defaultProps={
    photoUrl:PropTypes.string ,
    name: PropTypes.string,
    company: PropTypes.string,
    skill: PropTypes.string,
    average: PropTypes.number
}
StudentCard.defaultProps={
    photoUrl:'',
    name:'Benson James',
    company:'some company',
    skill:'java',
    average:80.9
}

export default StudentCard;
