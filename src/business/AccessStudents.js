
function filterByTag(students,tag)
{
   return students.filter(
       (studentTag)=>{
            if (studentTag.tag!==undefined&& studentTag.tag.includes(tag)){
                return studentTag;
            }
        }
    )
}
export function getAverageGrade(grades){
    let sum=0;
        for (let i = 0; i < grades.length ; i++) {
            sum=sum+ parseInt(grades[i])
        }
    return sum/grades.length
}

export function findStudent(students,name,tag){
    let result;
    return  students.filter(
        (student) => {
            const studentName=student.firstName.toLowerCase().concat(` ${student.lastName.toLowerCase()}`);
            if(name === "" && tag === "")
            {
                result = student;
            }
            else if(name !== "" && tag === "" && studentName.includes(name.toLowerCase()))
            {
                return  student;
            }
            else if(tag!=="" && student.tags!==undefined){
                return  filterByTag(students,tag);
            }
            return result;
        }
    )
}
