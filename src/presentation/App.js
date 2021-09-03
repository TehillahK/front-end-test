
import {useEffect, useState} from "react";
import StudentList from "./components/StudentList";
import './css/master.css'
import './css/student-card.css'
import SearchBar from "./components/SearchBar";

function App() {
 // let studentLists=getStudents();
  const [students, setStudents] = useState([]);
  const [name,setName]=useState('')
  const [tag,setTag]=useState('')
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
             //    createTagField(studentArr)
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

  function updateNameQuery(query){
      setName(query)
  }
  function updateTagQuery(query){
      setTag(query)
  }
   // console.log(students)
  return (
    <div className={"container"}>
        <div className={"box"}>
            <SearchBar update={updateNameQuery} searchCriteria={"name"}/>
            <SearchBar update={updateTagQuery} searchCriteria={"tag"} />
            <StudentList list={students} nameQuery={name} tagQuery={tag} />
        </div>
    </div>
  );
}

export default App;
