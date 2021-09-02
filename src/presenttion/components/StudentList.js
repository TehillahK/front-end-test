import PropTypes from 'prop-types'
import StudentCard from "./StudentCard";
import {getAverageGrade} from "../../business/students";

const StudentList=(props)=>{
    const students=props.list
    const searchNameQuery=props.queryName
    const searchTagQuery=props.queryTag;
    return(
        <div className={"students"}>
               {
                   students.filter(
                       (student)=>{
                           let result;
                           if(searchNameQuery  === "" && searchTagQuery===""){
                                result = student;
                           }else if((student.firstName.toLowerCase()).includes(searchNameQuery.toLowerCase())){
                                result = student;
                           }else if((student.lastName.toLowerCase()).includes(searchNameQuery.toLowerCase())){
                               result = student;
                           }
                            else if(student["tags"]!== undefined && student.tags.includes()){
                                result=student;
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
