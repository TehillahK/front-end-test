import PropTypes from 'prop-types'
import StudentCard from "./StudentCard";
import {getAverageGrade} from "../../business/students";

const StudentList=(props)=>{
    const students=props.list
    const searchQuery=props.query
    return(
        <div className={"students"}>
               {
                   students.filter(
                       (student)=>{
                           let result;
                           if(searchQuery === ""){
                                result = student;
                           }else if((student.firstName.toLowerCase()).includes(searchQuery.toLowerCase())){
                                result = student;
                           }else if((student.lastName.toLowerCase()).includes(searchQuery.toLowerCase())){
                               result = student;
                           }
                           return result
                       }
                   ).map(student=>{
                       let studentName=student.firstName+" "+student.lastName;
                       let studentAv=getAverageGrade(student.grades);
                       return(
                           <StudentCard student={student} key={student.email} photoUrl={student.pic} name={studentName} email={student.email}
                                        skill={student.skill} average={studentAv} grades={student.grades} />
                       )
                   })
               }
        </div>
    )
}
StudentList.prototype={
    list: PropTypes.array,
    query: PropTypes.string,
};
StudentList.defaultProps={
    list:[],
    query:"",
}
export default StudentList;
