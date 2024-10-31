import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../pages/config';
import { Task } from '../hooks';

export const TaskCheckbox =  ({ task }: {task: Task} ) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/task/${task.id}`, {
          headers: { Authorization: localStorage.getItem("token") || "" }
        });
        setIsCompleted(response.data.task.Completed); // Update state with task's current status
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch task:", error);
        setLoading(false);
      }
    };
    fetchTask();
  }, [task.id]);

  const handleToggle = async () => {
    try {
      const updatedStatus = !isCompleted;
      await axios.put(`${BACKEND_URL}/api/v1/task/${task.id}`, {
        Completed: updatedStatus
      }, {
        headers: { Authorization: localStorage.getItem("token") || "" }
      });
      setIsCompleted(updatedStatus); // Update local state to reflect new status
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isCompleted} 
          onChange={handleToggle} 
        />
        Task ID: {task.id}
      </label>
    </div>
  );
};

export default TaskCheckbox;
