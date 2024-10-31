import { Link } from "react-router-dom";

    export interface Taskcardprops {
        authorname: string;
        title: string;
        id: number;
        description: string;
        publishedate: string;
        Completed: boolean;
    }
export const Taskcard = ({
    authorname,
    title,
    id,
    description,
    publishedate,
    Completed,
}: Taskcardprops) => {

    console.log({ authorname, title, id, description, publishedate, Completed });


    return  <Link to={`/task/${id}`}>
     <div>
        
        <div className="p-2 cursor-pointer" >
         <div className="border-4 pl-2">
<div className=" border-b flex justify-between px-10 py-3">
<div>
<div className="flex">
          <div className="flex justify-center flex-col">
          <Avatar name={authorname}/>
            </div>
            <div className="font-thin pl-2">
            {authorname}  
        </div>
        <div className=" pl-2 font-extralight text-slate-600
        ">

        {publishedate}

        </div>
            </div>
        <div className="text-xl font-bold ">
            {title} 
            
        </div>
        <div className="text-base font-medium">
            {description.slice(0,17) + "..."}
            <div>
          

            </div>
        </div>
       
        
</div>
<div>
          
{Completed ? "Completed" : "Not Completed"}  
            </div>
</div>
       

    </div>
    </div>
    </div>
  
        
            </Link>
}

export function Avatar({name}: {name: string}){

    
return  <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>


}