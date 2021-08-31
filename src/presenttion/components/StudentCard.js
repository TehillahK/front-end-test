import '../css/student-card.css'
import PropTypes from "prop-types";
import {useState} from "react";
const GradesStyle = {
    display: "flex",
    flexDirection: "row",
}
const GradeStyle={
    marginLeft:"25px"
}
function ExpandButton(props) {
    const [clicked,setClicked]=useState(false)
    const expand=props.click
    const onPress=()=>{
        expand()
        setClicked(!clicked)
    }
    return(
        <div >
            <button className={"expand-button"} onClick={onPress} >
                {
                 clicked ? "-"  :"+"
                }
            </button>
        </div>
    )
}
function Grades(props) {
    const grades=props.grades;
    let count=0;

        return(
            <div className={"grades"}>
                {
                    grades.map(grade=>{
                        return(
                            <div style={GradesStyle}>

                                <p>Test {++count}:</p>
                                <p style={GradeStyle}>{grade}%</p>

                            </div>
                        )
                    })
                }

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
          <ExpandButton click={onClick} hasClicked={expanded} />
          <span />
          {
              expanded ?   <Grades grades={props.grades}  />: null
          }




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
