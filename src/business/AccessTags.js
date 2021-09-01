
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
