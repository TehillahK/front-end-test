


export function getAverageGrade(grades){
    let sum=0;
        for (let i = 0; i < grades.length ; i++) {
            sum=sum+ parseInt(grades[i])
        }
        //return result;
    return sum/grades.length
}

export function addStudentTag(){


}
