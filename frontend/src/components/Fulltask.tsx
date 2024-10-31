import { Task } from "../hooks"
import { Appbar } from "./Appbar"

import TaskCheckbox from "./Checkbox"

export const Fulltask = ({ task }: {task: Task} ) => {

    return <div>

        <Appbar/>
        <div className="grid grid-cols-12 px-10 w-full pt-200">

            <div className=" col-span-8">
                <div className="text-6xl font-extrabold pb-5">

{task.title}
                </div>
                <div className="text-2xl font-semibold pb-3">
                    {task.description}
                </div>
                <div className=" font-thin text-sm">
                  Posted on 19th Oct 2024
                </div>
            </div>
            <div className=" col-span-4">
               <TaskCheckbox task={task} />
            </div>
        </div>
    </div>
}
