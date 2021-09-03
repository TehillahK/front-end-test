


export function getAverageGrade(grades){
    let sum=0;
        for (let i = 0; i < grades.length ; i++) {
            sum=sum+ parseInt(grades[i])
        }
        //return result;
    return sum/grades.length
}

export function findStudent(students,name,tag){
    console.log(tag)
   return  students.filter(
        (student) => {
            let result
            if(name==="" && tag==="")
            {
                result=student;
            }
            else if(tag!==""){
                console.log("here")
                if((student.tags!==undefined) && (student.tags.includes(tag))){
                    console.log(student)
                  result = student;
                }
            }
            else if(name!=="" && tag==="")
            {
                if ((student.firstName.toLowerCase()).includes(name.toLowerCase())) {
                    result=  student;
                }
                else if ((student.lastName.toLowerCase()).includes(name.toLowerCase())) {
                    result=  student;
                }
            }





            return result;

        }
    )

}
