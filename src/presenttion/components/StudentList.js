import PropTypes from 'prop-types'
import StudentCard from "./StudentCard";
import {getAverageGrade} from "../../business/students";

const StudentList=(props)=>{
    const students=props.list
    return(
        <div>
               {
                   students.map(student=>{
                       return(
                           <StudentCard key={student.email} photoUrl={student.pic} name={student.firstName+" "+student.lastName} email={student.email}
                                        skill={student.skill} average={getAverageGrade(student.grades)}
                           />
                       )
                   })
               }
        </div>
    )
}
StudentList.prototype={
    list: PropTypes.array,
};
StudentList.defaultProps={
    list:[],
}
export default StudentList;
