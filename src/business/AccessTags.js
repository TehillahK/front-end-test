
export function addTag(tag,tags){
    const newTags=[
        ...tags,
        {
            id:tag,
            value:tag
        }
    ]
    return newTags;
}

export  function  createTagField(students){
    return students.forEach(
        function (student) {
            student["tags"] = [];
        }
    );
}
