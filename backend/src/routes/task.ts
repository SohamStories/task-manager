import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign, verify } from 'hono/jwt'
import { createtaskInput, updatetaskInput , updatecompleted } from "@soham6745/taskmanager-4";


export const taskRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
      userId: string;
    }
  }>();


  taskRouter.use("/*", async (c,next)=>{
    const autheader = c.req.header("authorization") || "";

    try{
      const user = await verify(autheader,c.env.JWT_SECRET);

      if(user){
        //@ts-ignore
       c.set("userId", user.id);
       await next();
      } else{
    c.status(403);
   return c.json({
    message:"You are not logged in"
   })
  }
    }catch(e){
      c.status(411);
      return c.json({
        message: "You are not logged in ",
      })
    }
  

  }); 

taskRouter.post('/', async (c) => {

  const body = await c.req.json();

  const { success } = createtaskInput.safeParse(body);

  if (!success){
    c.status(411);
    return c.json({
      message: "Inputs are not correct"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())


 const authorId = c.get("userId")
  const task = await prisma.task.create({
    data:{
      title: body.title,
      description: body.description,
      authorId: Number(authorId)
    }

  })

    return c.json({
      id : task.id
    })
  })
  
  taskRouter.put('/', async (c) => {

    const body = await c.req.json();

    const { success } = updatetaskInput.safeParse(body);
  
    if (!success){
      c.status(411);
      return c.json({
        message: "Inputs are not correct"
      })
    }
    
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const task = await prisma.task.update({
    where: {
      id: body.id
    },
    data:{
      title: body.title,
      description: body.description,
    
    }

  })
  return c.json({
    id : task.id
  })
  })
  

  taskRouter.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate()) 

  
    const authorId = c.get("userId");
    const tasks = await prisma.task.findMany({

      select: {
        description:true,
        title:true,
        id:true,
        Completed:true,
        author:{
          select: {
            username:true
          }
        }
      },

      where: {

        authorId:Number(authorId),
      }
    });

    return c.json({
      tasks
    })

  })
  

  taskRouter.get('/:id', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const id =  c.req.param("id");
  
    try{
      const task = await prisma.task.findFirst({
        where: {
          id: Number(id)
        },

        select: {
          description:true,
          title:true,
          id:true,
          Completed:true,
          author:{
            select: {
              username:true
            }
          }
        }
        
        
    
      })
    
  
      return c.json({
       task
      });
    }catch(e){
      c.status(411);
      return c.json({
        message: "Error while finding task"
      })
    }
   
  })
  taskRouter.put('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // Get the task ID from the URL parameter
    const id = Number(c.req.param("id"));
    const body = await c.req.json();

    const parseResult = updatecompleted.safeParse(body);
    if (!parseResult.success) {
        // If validation fails, return a 400 response with an error message
        c.status(400);
        return c.json({
            message: "Inputs are not correct",
            errors: parseResult.error.errors
        });
    }
    try {
        // Update the task's completed status
        const updatetask = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                Completed: body.Completed // Ensure "completed" is present in the request body
            }
        });

        return c.json({
            message: "Task completed successfully",
            task: updatetask
        });
    } catch (e) {
        return c.json({
            error: "Task not found or update failed"
        });
    }
});
