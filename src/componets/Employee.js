import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import EditForm from "./EditForm";
import { Modal, Button } from "react-bootstrap"


const Employee = ({ employee }) => {

  const { deleteEmployee } = useContext(EmployeeContext)

  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  useEffect(() => {
    closeModal()
  }, [employee])

  return (
    <>

      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button onClick={showModal} className="btn text-warning" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
      </td>


      <Modal show={show}>

        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>
            Update Employee
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditForm
            theEmployee={employee}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={closeModal} variant="primary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>

    </>



  );
}

export default Employee;