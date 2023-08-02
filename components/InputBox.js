import { useSession } from "next-auth/react"
import Image from "next/image"
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon, XIcon} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";

function InputBox() {
  const {data: session} = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, SetImageToPost] = useState(null)
    
  
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: new Date()
    }).then(doc => {
      if(imageToPost){
        const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url")

        removeImage()

        uploadTask.on('state_change', null, (error) => console.log(error), ()=>{
          //when upload complete
          storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
            db.collection(`posts`).doc(doc.id).set(
              {
                postImage: url
              },
              {
                merge: true
              }
            )
          })
        })
      }
    })

    inputRef.current.value = ""
  }

  const addingImageToPost = (e) =>{
    const reader = new FileReader();

    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) =>{
      SetImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    SetImageToPost(null);
  }
  console.log(imageToPost)

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex p-4 space-x-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex w-full">
          <input 
            className="rounded-full h-12 bg-gray-100 flex-grow-5 px-5 focus:outline-none w-full"
            type="text"
            placeholder={`What's on you mind, ${session.user.name}`}
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>Submit</button>
        </form>
        {
          imageToPost && (
            <div>
              <XIcon onClick={removeImage} width={10} height={10} className="text-red-500 h-5 cursor-pointer"/>
              <img className="h-10 object-contain" src={imageToPost} alt="no image" />
            </div>
          )
        }
      </div>
      <div className="flex justify-evenly p-3 border-t-2">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" width={30}/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} type="file" hidden onChange={addingImageToPost} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-400" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
