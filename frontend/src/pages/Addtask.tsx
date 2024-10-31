import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "./config"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

export const Addtask = () => {
const [title, setTitle] = useState("");
const [description, setDescription]= useState("");
const navigate = useNavigate();
    return   <div>
<Appbar />
    
    <div className="px-20 pt-10">
   <div className="max-w-screen px-20">

<label   className="block mb-2 text-sm font-medium  text-zinc-500  bg-gray-50">Put the Title here </label>
<textarea onChange={(e) => {
    setTitle(e.target.value)
}} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Title..."></textarea>
<div className="pt-10">
<label   className="block mb-2 text-sm font-medium  text-zinc-500  bg-gray-50">Put the Description here </label>
<textarea onChange={(e) => {
    setDescription(e.target.value)
} }
rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Description..."></textarea>
</div>
<div className="flex justify-center pt-10">
<button onClick={async () => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/task`,{
       title,
       description
    }, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
)
    navigate(`/task/${response.data.id}`)
}} type="button" className ="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Publish Task </button>
</div>
   </div>
    </div>
    </div>
}