import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const EmpEdit =()=>{
    const {empid}= useParams()
   // const[empdata, empdatachange]=useState({})
    useEffect(()=>{
        fetch("http://localhost:8000/employees/"+empid).then((res)=>{
            return res.json()
        }).then((resp)=>{
            idchange(resp.id)
            namechange(resp.name)
            emailchange(resp.email)
            phonechange(resp.phone)
            activechange(resp.isactive)
          //  empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

const[id, idchange]=useState('')
const[name, namechange]=useState('')
const[email, emailchange]=useState('')
const[phone, phonechange]=useState('')
const[active, activechange]=useState(true)

const navigate =useNavigate()
const handlesubmit=(e)=>{
    e.preventDefault()
    const empdata={id,name,email,phone,active}
 
    fetch('http://localhost:8000/employees/'+empid,{
        // since this is a post request we need to perform this
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)

    }).then((res)=>{
        alert('Employee Edited successfully')
        navigate('/')

    }).catch((err)=>{
        console.log(err.message)
    })

}


    return(
        <div>
            <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card" >
                            <div className="card-title">
                                <h1>
                                    Edit Employee
                                </h1>
                            </div>
                            <div className="card-body">
                            <form  onSubmit={handlesubmit} style={{'textAlign':'left'}}>
                            <div className="form-group">
                                 <label for="formGroupExampleInput">ID</label>
                                     <input value={id} disabled="disabled" className="form-control" id="formGroupExampleInput" ></input>
                             </div>
                            <div className="form-group">
                                 <label for="formGroupExampleInput">Name</label>
                                     <input  required value={name} onChange={e=>namechange(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Enter your name"></input>
                             </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input value={email} onChange={e=>emailchange(e.target.value)}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                     </div>
                                <div className="form-group">
                                     <label for="formGroupExampleInput">Phone</label>
                                     <input value={phone} onChange={e=>phonechange(e.target.value)}  type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your phone number"></input>
                                 </div>
                         <div className="form-group form-check">
                                <input checked={active} onChange={e=>activechange(e.target.checked)}  type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Action</label>
                        </div>
                                <button type="submit" className="btn btn-primary me-1">Save</button>
                                <Link to='/' className='btn btn-danger'>Back</Link>
                        </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}

export default EmpEdit;