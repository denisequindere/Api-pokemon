import { useParams } from "react-router-dom";

function Posts(){
    let params = useParams()
    let {id} = params
    return(
        <>
        <h1>Post com o pokemon número: {id}</h1>
        </>
    )
}
export default Posts;