import '../css/student-card.css'
const StudentCard = (props) => {
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
      </div>
  )
}
StudentCard.defaultProps={
    photoUrl:'',
    name:'Benson James',
    company:'some company',
    skill:'java',
    average:'80.9'
}
export default StudentCard;
