import {Box, Button, Typography, styled} from "@mui/material"
import { useContext, useState } from "react"
import { UserContext } from "./ContextAPI/Context";
import { useNavigate } from 'react-router-dom'
 
const Form = styled("form")(({theme})=>({
    width:"40%",
    margin:"20px auto",
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    [theme.breakpoints.up('md')]:{
        width:"50%"

    },
    [theme.breakpoints.down('md')]:{
        width:"60%"

    },
    [theme.breakpoints.down('sm')]:{
        width:"80%"

    },
}))
 

export  const EditTask = () =>{

    const navigate = useNavigate()
    const [data, setData] = useState({})
    const {setData1, data1, number} = useContext(UserContext)
    


    const handleChange = (e)=>{

        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data, [name]: value}))

    }
   


    const handleSubmit = (e)=>{
        e.preventDefault();
        data1[number].name = data.name ?  data.name : data1[number].name
        data1[number].description = data.description ? data.description : data1[number].description
        data1[number].PriorityLevel = data.PriorityLevel ? data.PriorityLevel : data1[number].PriorityLevel
        navigate("/")

       
       
        

    }

    const handleClick = ()=>{
        navigate("/")
    }

    console.log(number)


    


    


    



    return(
        <>

        
        <Typography sx={{textAlign:"center",padding:"10px", fontSize:{lg:"50px", md:"40px", sm:"40px", xs:"30px" }}}>Edit Task</Typography>
        <Form  onSubmit={handleSubmit}  sx={{border:"0.2px solid blue", padding:"10px", borderRadius:"3px"}}>
            <input placeholder="Enter task name"   style={{height:"20px", padding:"5px"}}  name="name" value={data.name || ""}    onChange={handleChange}  />
            <textarea placeholder="Description"   name="description" value={data.description || ""} onChange={handleChange} style={{padding:"10px"}}>

            </textarea>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div>Priority level</div>
                <select  name="PriorityLevel" value={data.PriorityLevel} onChange={handleChange}>
                    <option   value="select">select</option>
                    <option   value="low">Low</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                </select>
            </div>
            <button style={{padding:"10px",  cursor:"pointer", color:"white", backgroundColor:"blue", border:"0.2px solid blue", fontSize:"15px"}}>Add Task</button>
        </Form>
       

        
        </>
    )
}