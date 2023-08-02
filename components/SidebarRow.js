import Image from "next/image"

function SidebarRow({src, Icon, title, active}) {
  return (
    <div className={`flex items-center space-x-2 p-4 cursor:pointer rounded-xl hover:bg-gray-200`}>
      {src && (
        <Image 
          src={src}
          width={30}
          height={30}
          className="rounded-full"
          layout="fixed"
        />
      )}

      {
        Icon && (
          <Icon className="h-8 w-8 text-blue-500" />
      )}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SidebarRow