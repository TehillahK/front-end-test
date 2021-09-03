import PropTypes from 'prop-types'
import StudentCard from "./StudentCard";
import {findStudent} from "../../business/AccessStudents";

const StudentList=(props)=>{
    const students=props.list
    const searchQuery=props.nameQuery
    const tagQuery=props.tagQuery;

    function search(students) {
     return  students.filter(
         (student)=>
             student.firstName.toLowerCase().includes(searchQuery)||
             student.lastName.toLowerCase().includes(searchQuery)
        )
    }

    return(
        <div className={"students"}>
            {
              findStudent(students,searchQuery,tagQuery).map(student => {
                    return (
                        <StudentCard key={student.email} student={student}/>
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
