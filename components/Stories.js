import StoryCard from "./StoryCard"
function Stories() {

  const stories = [
    {
      name: 'Vishwani Patlan',
      src: "https://links.papareact.com/zof",
      profiles: "https://links.papareact.com/l4v",
    },
    {
      name: 'Vishwani Patlan',
      src: "https://links.papareact.com/zof",
      profiles: "https://links.papareact.com/l4v",
    },
    {
      name: 'Aksh Manav',
      src: "https://links.papareact.com/4zn",
      profiles: "https://links.papareact.com/kxk",
    },
    {
      name: 'Parul Manav',
      src: "https://links.papareact.com/k2j",
      profiles: "https://links.papareact.com/f0p",
    },
    {
      name: 'Shubham Tanwar',
      src: "https://links.papareact.com/xql",
      profiles: "https://links.papareact.com/snf",
    }
  ]
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {
        stories.map(story => (
          <StoryCard name={story.name} src={story.src} profile={story.profiles} />
        ))
      }
    </div>
  )
}

export default Stories