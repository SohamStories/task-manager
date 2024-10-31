import { SignupInput } from "@soham6745/taskmanager-4";
import axios from "axios";
import { ChangeEvent, useState,  } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../pages/config";


export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();

    const [postinputs, setpostinputs] = useState<SignupInput>({

        username: "",
        password:""
    });

    async function sendRequest() {

        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postinputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            navigate("/task");
        }catch(e){
            alert("Error while signing up")
        }
    }


    return <div className=" h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <div className="pt-10">
                 <div className="max-w-lg  text-3xl font-bold">
                Create An Account 
                </div>
                    <div className=" max-w-md text-center text-sm font-light text-slate-500 ">
                        {type === "signin" ? "Don't have an account?" : " Already have an account? " }
                       
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                       {type === "signin" ? "Sign up": "Login"}
                        </Link>
                    </div>

            <div className="pt-5">

<LabelledInput label="Username" placeholder="sohamthakor67@gmail.com " onChange={(e) => {
    setpostinputs({
        ...postinputs,
        username: e.target.value
    })
    
}} />

<LabelledInput label="Password" type={"password"} placeholder="password " onChange={(e) => {
    setpostinputs({
        ...postinputs,
        password: e.target.value
    })
    
}} />
    
<div className="pt-5">
<button onClick={sendRequest}   type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In "} </button>
</div>
</div>
            </div>
        </div>
    </div>
} 

interface LabelledInputType { 
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type? : string;
}

function LabelledInput({ label, placeholder , onChange , type  }: LabelledInputType) {

        return <div>
 <div>
            <label  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-2 ">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>

        </div>
}