import { useCollection } from "react-firebase-hooks/firestore"

import {db} from "../firebase"
import PostCard from "./PostCard"

function Post() {
  const [realTimePosts, loading, error] = useCollection(db.collection("posts"))
  console.log("DATA", realTimePosts?.docs[0].data() )
  return (
    <div>{realTimePosts?.docs.map(post =>(
      <PostCard 
        key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        timestamp={post.data().timestamp}
        image={post.data().image}
        postImage={post.data().postImage}
      />
    ))}</div>
  )
}

export default Post