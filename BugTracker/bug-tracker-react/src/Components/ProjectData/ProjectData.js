import React, { useState } from 'react'
import { Progress, Button, Input} from 'reactstrap'
export default function ProjectData() {
    const [progres, setProgres] = useState(0)

    function setNumberForProgres(e){
        setProgres(e.target.value)
        console.log(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("test");
        if(progres>=0 && progres<=100)
        {fetch('https://localhost:5001/api/progres',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //EmployeeId:null,
                ProjectProgres:progres,
            })
        })
        
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            // console.log(result);s
        }).catch((error)=>{
            alert("faileeed",error);
        })}else{
            alert("Shtyp numrin brenda rangut 0-100")
        }
    }
    return (
        <div style={{marginTop:"100px"}}>
        <p>This is the progress bar that shows how much work is done in your project</p>
        <Progress value={75}>You're almost there!</Progress>
        <Input 
        onChange={setNumberForProgres}
                type="number"
                name="projectProgres"
                id="projectProgres"
                placeholder="Progres"
              />
              <Button outline color="danger" onClick={handleSubmit} >Delete</Button>
              <Button outline color="primary" onClick={handleSubmit} >Edit</Button>
        <Button outline color="primary" onClick={handleSubmit} >Progres</Button>
        </div>
    )
}