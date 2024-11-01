import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../pages/config";

export interface Task {
   
    title: string;
    description: string;
    id: number;
    Completed: boolean;
   publishedate: string;
    author : {
        username: string;
    }

}


export const useTask = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState<Task | null>(null); // Change to Task | null

    useEffect(() => {
        const fetchTask = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/task/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                console.log("Fetched task:", response.data);
                setTask(response.data.task); // Ensure response.data.task is a single Task
            } catch (error) {
                console.error("Error fetching task:", error);
                setTask(null); // Optionally handle error state
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchTask();
        }
    }, [id]);

    return {
        loading,
        task,
    };
};


export const UseTasks = () => {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/task/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            console.log("Fetched tasks:", response.data); 
            setTasks(response.data.tasks);
            setLoading(false);
        })
    },[])

    return {
        loading,
        tasks
    }
      
}