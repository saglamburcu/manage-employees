import Employee from "./Employee";
import AddForm from "./AddForm";
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Modal, Button } from "react-bootstrap"

const EmployeeList = () => {

  const { employees } = useContext(EmployeeContext)

  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  useEffect(() => {
    closeModal()
  }, [employees])

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <button onClick={showModal} className="btn btn-success" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
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

          {
            employees.map(employee => (

              <tr key={employee.id}>
                <Employee
                  employee={employee}
                />
              </tr>
            ))
          }

        </tbody>
      </table>

      <Modal show={show}>

        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>
            Add Employee
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  )
}

export default EmployeeList;