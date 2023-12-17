import React, { useState } from "react";
import {Box, Typography, styled} from '@mui/material'
import Draggable from 'react-draggable';




const QuestionBox = styled('form')(({theme})=>({
    width:"80%",
    margin:"20px auto",
    display:"flex",
    flexDirection:"column",
    gap:"10px"

}))

export const Testing = ()=>{

    const [data, setData] = useState([])


    const handleCate = (e)=>{
        setData(data=>([...data, e.target.value ]))

    }

    const handleData = ()=>{
        
    }

   


    return(

        <Box sx={{display:"flex", flexDirection:"column", margin:"20px auto", width:"80%", gap:"10px"}}>
            <QuestionBox>
                <input placeholder=" Enter Description" />
                <Box>
                    <Typography>Catagories</Typography>
                    <Box onSumbit={handleData}>

                        <input placeholder="Catagoies" name="cate" value={data.cate} onChange={}  />


                    </Box>
                </Box>
            </QuestionBox>
            
           
           
        </Box>
        
    )
}