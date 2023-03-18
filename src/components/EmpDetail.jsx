import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const EmpDetail =()=>{

    const {empid}= useParams()
    const[empdata, empdatachange]=useState({})
    useEffect(()=>{
        fetch("http://localhost:8000/employees/"+empid).then((res)=>{
            return res.json()
        }).then((resp)=>{
            empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
    return(
        <div>
                <h1>The Emploee name is :{empdata.name} ({empdata.id})</h1>
                <h3>Contact Details: {empdata.phone}</h3>
                <h4>Email  is: {empdata.email}</h4>
                <Link className='btn btn-primary' to='/'>Back</Link>
        </div>
    )
}

export default EmpDetail;