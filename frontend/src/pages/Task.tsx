import { Appbar } from "../components/Appbar";
import { Fulltask } from "../components/Fulltask";
import { Taskskeleton } from "../components/Taskskeletion";
import { useTask } from "../hooks";
import { useParams } from "react-router-dom";

export const Task = () => {
    const { id } = useParams();
    const { loading, task } = useTask({ id: id || "" });

    if (loading) {
        return (
            <div>
                <Appbar />
                <Taskskeleton />
                <Taskskeleton />
            </div>
        );
    }

    // Check if task is null before rendering Fulltask
    if (!task) {
        return (
            <div>
                <Appbar />
                <div>Task not found</div>
            </div>
        );
    }

    return (
        <div>
            <Fulltask task={task} />
        </div>
    );
};
