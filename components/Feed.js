import Stories from "./Stories";
import InputBox from "./InputBox";
import Post from "./Post";
function Feed() {
  return (
    <div className=" relative flex-grow  md:ml-20 h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide">
      <div className="mt-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        {/* Input */}
        <InputBox />
        {/* Post  */}
        <Post />
      </div>
    </div>
  )
}

export default Feed