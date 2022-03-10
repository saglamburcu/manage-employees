import { Form } from "react-bootstrap"

const AddForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name *"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email *"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Address"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone *"
          required
        />
      </Form.Group>
    </Form>
  )
}

export default AddForm;