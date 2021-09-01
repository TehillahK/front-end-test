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
                       return(
                           <StudentCard key={student.email} student={student}  />
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
