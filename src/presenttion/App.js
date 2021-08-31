
import {useEffect, useState} from "react";
import StudentList from "./components/StudentList";
import './css/master.css'
import './css/student-card.css'
import SearchBar from "./components/SearchBar";
function App() {
 // let studentLists=getStudents();
  const [students, setStudents] = useState([]);
  const [name,setName]=useState('')

    useEffect(() => {
       async function getStudents(){
         try{
             const apiUrl='https://api.hatchways.io/assessment/students';
             const result=await fetch(apiUrl);

             const json = result.json();

             let p= Promise.resolve(json)
             p.then(function (v){
                 const studentArr=Object.values(v)[0];
             //    console.log(studentArr.entries)
                 setStudents(studentArr)
             })
          //   setStudents(json)
         }
         catch (e) {
            console.log("failed to get students")
         }
       }
       getStudents().then(r => console.log("success"))
    }, []);

  function updateQuery(query){
      setName(query)
  }


  return (
    <div className={"container"}>
        <div className={"box"}>
            <SearchBar update={updateQuery} searchCriteria={"name"}/>
            <SearchBar searchCriteria={"tag"} />
            <StudentList list={students} query={name} />
        </div>
    </div>
  );
}

export default App;
