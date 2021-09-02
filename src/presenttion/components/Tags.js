import {useEffect, useState} from "react";
import {addTag} from "../../business/AccessTags";

function TagList(props) {
   const [tags,setTags]=useState([]);

    useEffect(()=>{
            setTags(props.list)
    })
    return(
        <ul className={"tags"}>
            {
                tags.map(tag=>{
                    return(
                        <li className={"tag"}>
                            {
                                tag
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}
const Tags = (props) => {
    const [inputTxt,setInputTxt]=useState("")
    const [tags,setTags]=useState([]);
    const [enterPressed,setEnterPressed]=useState(false)
    const student=props.student;

    function addNewTag() {
        let arr= []
       // console.log(`${inputTxt} entered`)
        arr.push( ...tags,`${inputTxt}`)
        student["tags"]=arr;
        console.log(student)
        setTags(arr)
      //  setTags()

    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                // callMyFunction();

                //console.log(inputTxt)

                addNewTag()
                setEnterPressed(true)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [inputTxt]);
  return(
      <div>
          {
              enterPressed ? <TagList entry={inputTxt} list={tags} key={student.email} /> :null
          }
          <form>
            <input id={"tag-input"} placeholder={"add tag"} onChange={ event => setInputTxt(event.target.value)} />
          </form>
      </div>
  )
}

export default Tags;
