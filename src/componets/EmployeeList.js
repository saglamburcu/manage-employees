import Employee from "./Employee";

const EmployeeList = () => {
  return (
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Employee />
      </tbody>
    </table>
  )
}

export default EmployeeList;