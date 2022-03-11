import { Form, Button } from "react-bootstrap"
import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext } from "react";

const AddForm = () => {

  const { addNewEmployee } = useContext(EmployeeContext)

  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", address: "", phone: "" })

  const { name, email, address, phone } = newEmployee;

  const onInfoChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
  }

  const onAddedEmp = (e) => {
    e.preventDefault()
    addNewEmployee(name, email, address, phone)
  }

  return (
    <Form onSubmit={onAddedEmp}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name *"
          required
          name="name"
          value={name}
          onChange={onInfoChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          name="email"
          value={email}
          onChange={onInfoChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={onInfoChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone *"
          required
          name="phone"
          value={phone}
          onChange={onInfoChange}
        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100">
        Add New Employee
      </Button>

    </Form>
  )
}

export default AddForm;