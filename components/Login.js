import Image from "next/image"
import { signIn } from "next-auth/react"
function Login() {
  return (
    <div className="m-10 grid place-items-center">
      <Image 
        src="https://links.papareact.com/5me"
        width={200}
        height={200}
        objectFit="contain"
      />
      <h1 
        onClick={signIn}
        className="m-5 p-5 bg-blue-700 rounded-full text-white text-center cursor-pointer">
          Login with facebook
      </h1>
    </div>
  )
}

export default Login