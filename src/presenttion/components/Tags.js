import {useEffect, useState} from "react";

const Tags = () => {
    const [tags,setTags]=useState([])
    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                // callMyFunction();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);
  return(
      <div>
            <input id={"tag-input"} placeholder={"add tag"} />
      </div>
  )
}
export default Tags;
