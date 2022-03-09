import EmployeeList from "./componets/EmployeeList";

const App = () => {
  return (
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>Manage <b>Employees</b></h2>
              </div>
              <div class="col-sm-6">
                <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
              </div>
            </div>
          </div>
          <EmployeeList />
        </div>
      </div>
    </div>

  )
}

export default App;