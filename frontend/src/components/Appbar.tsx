import { Link } from "react-router-dom"
import { Avatar } from "./Taskcard"

export const Appbar = () => {

    return <div className=" border-b flex justify-between px-10 py-3">
<Link to={'/task'} className=" flex flex-col justify-center cursor-pointer">
    Task Manager
</Link>
<div>
    <Link to={'/addtask'}>
<button type="button" className ="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Task</button>

    </Link>

<Avatar name={"Soham"}/>
</div>
    </div>
}