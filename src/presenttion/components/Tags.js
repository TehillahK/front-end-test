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
                tags.map(tag => {
                    return (
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
    const student=props.student;



    function addNewTag() {
        if(inputTxt!=="" ) {
            let arr = []
            // console.log(`${inputTxt} entered`)

            arr.push(...tags, `${inputTxt}`)
            student["tags"] = arr;
            console.log(student)
            setTags(arr)
            //  setTags()
        }
    }
    const EnterPressEvent= (event) => {
        if (event.key === 'Enter') {
            addNewTag();
        }
    }


  return(
      <div>
          {
              tags.length>0 ? <TagList entry={inputTxt} list={tags} key={student.email} /> :null
          }
          <form>
            <input id={"tag-input"} placeholder={"add tag"} onChange={ event => setInputTxt(event.target.value)}

            />
          </form>
      </div>
  )
}

export default Tags;
