import { Loader } from "lucide-react"

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-black">
        <Loader className="animate-spin" color="white"/>
    </div>
  )
}

export default Loading