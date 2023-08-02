import Image from "next/image"
import { ThumbDownIcon, ChatIcon, ShareIcon } from "@heroicons/react/solid"
import { ThumbUpIcon } from "@heroicons/react/outline"
function PostCard({name, message, email, timestamp, image, postImage}) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-xl shadow-md">
      <div className="flex flex-row">
        <div className="pr-2">
          <img className="rounded-full" src={image} width={40} height={40} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">{new Date(timestamp.toDate()).toLocaleString()}</p>
        </div>
      </div>
        <p className="pt-4">{message}</p>
      </div>
      {
        postImage && (
          <div className="relative h-56 bg-white md:h-95">
            <Image 
              src={postImage}
              object="cover"
              layout="fill"
            />
          </div>
        )
      }

      <div className="flex justify-between items-center rounded-b-2xl p-2 bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ChatIcon className="h-4"/>
          <p className="text-sm sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-bl-2xl">
        <ShareIcon className="h-4"/>
          <p className="text-sm sm:text-base">Comment</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard