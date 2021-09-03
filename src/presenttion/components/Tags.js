import React, {useState} from "react";

function TagList(props) {
    const tags=props.list;
    return(
        <ul className={"tags"}>
            {
                tags.map(tag=>{
                    return(
                        <li key={tag} className={"tag"}>
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
    const tagTxt = React.useRef()
    function addNewTag() {
        if(inputTxt!=="" ) {
            let arr = [];
            arr.push(...tags, `${inputTxt}`);
            student["tags"] = arr;
            setTags(arr);
        }
    }
    return(
      <div>
          {
              tags.length>0 ? <TagList entry={inputTxt} list={tags} key={student.email} /> :null
          }
          <form>
            <input id={"tag-input"} placeholder={"Add tag"} ref={tagTxt}
                   onChange={ event => setInputTxt(event.target.value)}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            addNewTag();
                            event.preventDefault();
                            tagTxt.current.value="";
                        }
                    }}
            />
          </form>
      </div>
  )
}
export default Tags;
