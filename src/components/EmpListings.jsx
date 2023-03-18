import { useEffect,useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
const EmpListings =()=>{
    const[ empdata, empdatachange] = useState(null)
    const navigate =useNavigate()

const loadDetails=(id)=>{
    navigate('/employee/detail/'+id)

}
const loadEdit=(id)=>{
    navigate('/employee/edit/'+id)
}

const removeItem=(id)=>{
    if(window.confirm('Do you want to remove?')){
        fetch('http://localhost:8000/employees/'+id,{
        // since this is a post request we need to perform this
        method:"DELETE"

    }).then((res)=>{
        alert('Employee Removed successfully')
        window.location.reload()

    }).catch((err)=>{
        console.log(err.message)
    })

    }
}
    useEffect(()=>{
        fetch("http://localhost:8000/employees").then((res)=>{
            return res.json()
        }).then((resp)=>{
            empdatachange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>
                        Employee Listing
                    </h2>
                </div>
                <div className="card-body">
                    <div className="text-left">
                        <Link to="/employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>

                        </thead>
                        <tbody>
                                {empdata &&
                                    empdata.map(item =>(
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                            <a onClick={()=>{loadEdit(item.id)}} className="btn btn-success me-1">Edit</a>
                                            <a onClick={()=>{removeItem(item.id)}} className="btn btn-danger me-1">Remove</a>
                                            <a onClick={()=>{loadDetails(item.id)}} className="btn btn-success">Detail</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )
}

export default EmpListings;