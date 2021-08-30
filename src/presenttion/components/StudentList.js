import PropTypes from 'prop-types'
import StudentCard from "./StudentCard";
import {getAverageGrade} from "../../business/students";

const StudentList=(props)=>{
    const students=props.list
    const searchQuery=props.query
    return(
        <div>
               {
                   students.filter(
                       (student)=>{
                           if(searchQuery === ""){
                                return student;
                           }else if((student.firstName.toLowerCase()+" "+student.lastName).includes(searchQuery.toLowerCase())){
                                return student;
                           }
                       }
                   ).map(student=>{
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
