import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"
function Contact({name, isActive, image}) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer">
      <Image className="rounded-full" objectFit="cover" src={image} width={40} height={40} layout="fixed" style={{ objectFit: "cover", width: "40px", height: "40px" }}/>
      <p className="font-semibold">{name}</p>
      {
        isActive ? (
          <div className="absolute bottom-1 left-4 bg-green-400 h-3 w-3 rounded-full animate-bounce"></div>
        ) : (
          <div className="absolute bottom-1 left-4 bg-red-500 h-3 w-3 rounded-full"></div>
        )
      }
    </div>
  )
}

export default Contact