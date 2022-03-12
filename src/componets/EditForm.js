import { Form, Button } from "react-bootstrap"
import { EmployeeContext } from "../context/EmployeeContext";
import { useState, useContext } from "react";

const EditForm = ({ theEmployee }) => {

  const employee = theEmployee;
  const id = employee.id;

  const { updateEmployee } = useContext(EmployeeContext)

  const [name, setName] = useState(employee.name)
  const [email, setEmail] = useState(employee.email)
  const [address, setAddress] = useState(employee.address)
  const [phone, setPhone] = useState(employee.phone)

  const updatedEmployee = { id, name, email, address, phone }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateEmployee(id, updatedEmployee)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name *"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone *"
          required
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}

        />
      </Form.Group>

      <Button variant="success" type="submit" className="w-100">
        Update Employee
      </Button>

    </Form>
  )
}

export default EditForm;