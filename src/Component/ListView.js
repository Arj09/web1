import { useContext, useEffect, useState } from "react";
import { UserContext } from "./ContextAPI/Context";
import { Typography, styled } from "@mui/material";
import { Box} from "@mui/material"
import { useNavigate} from "react-router-dom"






const CardBox = styled('Box')(({theme})=>({
    display:"grid",
    width:"80vw",
    gap:"10px",
    margin:"20px auto",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    [theme.breakpoints.down('lg')]:{
        gridTemplateColumns:"1fr 1fr 1fr",

    },
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns:"1fr 1fr",

    },
    [theme.breakpoints.down('sm')]:{
        gridTemplateColumns:" 1fr",

    },







}))


const Card = styled('Box')(({theme})=>({
    width:"90%",
    display:"flex",
    flexDirection:"column",
    margin:"20px auto",
    gap:"5px", 
    border:"0.2px solid black",
    padding:"10px",
    borderRadius:"5px"
}))






export  const ListView = () =>{
    const {data1, setNumber, setData1} = useContext(UserContext)
    const navigate = useNavigate()
    
    const [level, setLevel] = useState("All")
    const [search, setSearch] = useState('')
    const [lenght, setLength] = useState()
    


    const handleClick  = () =>{
        navigate("/add")

    }

    const handleLevel = (e)=>{
        setLevel(e.target.value)

    }

    const handleEdit = (index)=>{
        setNumber(index)
        navigate("/edit")

    }


    const handleDelete = (index)=>{
        let arr = data1;
        arr.splice(index, 1);
        setData1([...arr]);

        
    }





   

    useEffect(()=>{
        setLength(data1.lenght)
    },[])

    return(

        <Box>
            <Box sx={{display:"flex", width:"80vw", margin:"30px auto", bgcolor:"blue", color:"white", padding:"10px 20px", borderRadius:"5px", justifyContent:"space-between"}}>
                <Box sx={{display:{xs:"none", sm:"flex"}, flexDirection:"row", justifyContent:"space-between", }}>
                    <Typography sx={{paddingRight:"20px"}}>Priority Level</Typography>
                    <select value={level} onChange={handleLevel}>
                        <option value="All"> All</option>
                        <option value="high"> High</option>
                        <option value="low"> Low</option>
                        <option value="medium"> Medium</option>
                    </select>
                </Box>

                <input  style={{borderRadius:"5px", padding:"5px", border:"none"}}  placeholder="Search by task name" value={search} onChange={(e)=>setSearch(e.target.value)}   />
                

            </Box>

            <Box sx={{display:{xs:"flex", sm:"none"}, flexDirection:"row", justifyContent:"space-between", margin:"10px auto", width:"80%" }}>
                    <Typography sx={{paddingRight:"20px"}}>Priority Level</Typography>
                    <select value={level} onChange={handleLevel}>
                        <option value="All"> All</option>
                        <option value="high"> High</option>
                        <option value="low"> Low</option>
                        <option value="medium"> Medium</option>
                    </select>
                </Box>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"start", width:"80%", margin:"20px auto"}}>
                <button  style={{padding:"10px 20px",  cursor:"pointer", color:"white", backgroundColor:"blue", border:"0.2px solid blue", fontSize:"15px", borderRadius:"5px"}} onClick={handleClick}>Add Task</button>
            </Box>
        
        <CardBox>
            


            {
                data1 && data1
                .filter((data)=>(data.name.toLowerCase().startsWith(search.toLowerCase())))
                .filter((data)=>(level === "All" ? data : data.PriorityLevel === level ))
                .map((data, index)=>{
                    return(
                        <Card  key={index}>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <Typography  sx={{color:"gray", fontSize:"13px"}}>Task name :-</Typography>
                                <Typography sx={{textAlign:"center", pl:"20px"}}>{data.name}</Typography>
                            </Box>
                            <Typography sx={{color:"gray", fontSize:"13px"}}>Description :-</Typography>
                            <Typography sx={{width:"100%", height:"150px", overflowY:"scroll"}}>{data.description}</Typography>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <Typography  sx={{color:"gray", fontSize:"13px"}}  >Priority level </Typography>
                                <Typography >{data.PriorityLevel}</Typography>
                            </Box>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"10px"}}>
                                <button style={{padding:"8px 20px", backgroundColor:"blue", color:"white", border:"0.2px solid blue", borderRadius:"5px", cursor:"pointer"}} onClick={()=>handleEdit(index)}>Edit</button>
                                <button style={{padding:"8px 20px", backgroundColor:"blue", color:"white", border:"0.2px solid blue", borderRadius:"5px",  cursor:"pointer"}} onClick={()=>handleDelete(index)}>Delete</button>
                            </Box>
                        </Card>
                        
                    )
                })

            }

        </CardBox>

        

        {
            lenght > 1 ? (

            /*    <Box sx={{display:'flex', width:"60%", flexDirection:"row", margin:"5px auto", justifyContent:"space-evenly"}}>
                    <button> &lt;</button>
                    <Typography>1</Typography>
                    <button> &gt;</button>
                </Box>*/
                <div> show</div>
            ):(
                <div  >  not show </div>
            )
        }
        {
            
        }


        </Box>
    )
}