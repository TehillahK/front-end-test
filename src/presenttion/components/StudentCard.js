
import PropTypes from "prop-types";
import {useState} from "react";
import {getAverageGrade} from "../../business/students";
import Tags from "./Tags";

const StudentProfile=  {

    borderRadius: "100%",
    height: "120px"
}

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
                            <div key={count} style={GradesStyle}>

                                <p>Test {++count}:</p>
                                <p style={GradeStyle}>{grade}%</p>

                            </div>
                        )
                    })
                }

            </div>
        )


}

function CardFooter(props) {
    return(
        <div className={"card-footer"}>
            <Grades grades={props.grades}  />

        </div>
    )
}

const StudentCard = (props) => {
    const [expanded,setExpanded]=useState(false);
    const onClick=()=>{
        setExpanded(!expanded)
    }
    const student=props.student;
    const studentPic=student.pic;
    const studentName=student.firstName+" "+student.lastName;
    const studentEmail=student.email;
    const studentCompany=student.company;
    const studentSkill=student.skill;
    const studentAv=getAverageGrade(student.grades);
  return(
      <div className={"card"}>
          <img  style={StudentProfile} className={"student-image"} src={studentPic}/>
          <div className={"content"} alt={`Student image of ${studentName}`}>
              <h1>{studentName}</h1>
              <div className={"card-text"}>
                  <p>Email: {studentEmail}</p>
                  <p>Company: {studentCompany}</p>
                  <p>Skill: {studentSkill}</p>
                  <p>Average: {studentAv}%</p>

                  {
                      expanded ?   <CardFooter grades={student.grades} student={student} />: null
                  }
              </div>
              <Tags student={props.student} />
          </div>
          <ExpandButton click={onClick} hasClicked={expanded} />
          <span />




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
