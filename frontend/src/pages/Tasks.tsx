import { Appbar } from "../components/Appbar"
import { Taskcard } from "../components/Taskcard"
import { Taskskeleton } from "../components/Taskskeletion";
import { UseTasks } from "../hooks"



export const Tasks = () => {
    const {loading, tasks } = UseTasks();

    if(loading) {
        return <div>
            <Appbar />
           <Taskskeleton />
           <Taskskeleton />
           <Taskskeleton />
           <Taskskeleton />
           <Taskskeleton />
           
        </div>
    }

    return <div>
            <Appbar/>
    <div className="">
{tasks.map(task =>    <Taskcard
          authorname={task.author.username || "U"}
          title={task.title}
          id={task.id}
          description={task.description}
          publishedate={"19th Oct 2024"}
          
          />
        )}
    
       
    </div>
          </div> 
}