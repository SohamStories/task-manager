
import { Appbar } from "../components/Appbar";
//@ts-ignore
import { Fulltask } from "../components/fulltask";
//@ts-ignore
import { Taskskeleton } from "../components/taskskeletion";
import { useTask } from "../hooks"
import { useParams } from "react-router-dom";

export const Task = () => {
    const {id } = useParams();
    const { loading, task } = useTask({ id: id || "" });
    if(loading) {

        return <div>
            <Appbar />
            <Taskskeleton />
            <Taskskeleton />
        </div>
    }
    return <div>
        
        <Fulltask task={task} />
    </div>
}