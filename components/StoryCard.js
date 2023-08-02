import Image from "next/image"
function StoryCard({name, src, profile}) {
  return (
    <div className="relative h-14 w-14 md:h-60 md:w-40 hover:opacity-50 cursor-pointer">
      <Image 
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-4 left-2"
        src={profile}
        width={40}
        height={40}
        style={{ objectFit: "cover", width: "40px", height: "40px" }}
      />
      <Image 
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  )
}

export default StoryCard