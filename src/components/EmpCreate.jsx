
const EmpCreate =()=>{
    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card">
                            <div className="card-title">
                                <h1>
                                    Add New Employee
                                </h1>
                            </div>
                            <div className="card-body">
                            <form style={'text-align-left'}>
                            <div class="form-group">
                                 <label for="formGroupExampleInput">Name</label>
                                     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                             </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                     </div>
                                <div class="form-group">
                                     <label for="formGroupExampleInput">Phone</label>
                                     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                                 </div>
                         <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Action</label>
                        </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmpCreate; 