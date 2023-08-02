import { VideoCameraIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline"
import Contact from "./Contact"
function Widgets() {

  const contacts = [
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Aarav Tanwar",
      isActive: true
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Suhana Tanwar",
      isActive: false
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Virat Tanwar",
      isActive: true
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Anaya Tanwar",
      isActive: false
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Arjun Tanwar",
      isActive: true
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Diya Tanwar",
      isActive: false
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Rohit Tanwar",
      isActive: true
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Aanya Tanwar",
      isActive: false
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Aryan Tanwar",
      isActive: true
    },
    {
      image: "https://source.unsplash.com/random/200x300",
      name: "Isha Tanwar",
      isActive: false
    }
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-4">
      <div className="flex justify-between mb-3">
        <h2 className="text-lg">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-5" />
          <SearchIcon className="h-5" />
          <MenuIcon className="h-5" />
        </div>
      </div>
      {
        contacts && contacts.map(contact => (
          <Contact name={contact.name} image={contact.image} isActive={contact.isActive} />
        ))
      }
      
    </div>
  )
}

export default Widgets