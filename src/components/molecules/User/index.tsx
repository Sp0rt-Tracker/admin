import { FC } from 'react'
import Props from './Interface'
import { Card, Button } from 'react-bootstrap'

const User: FC<Props> = ({ id, email, name }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span>email: {email}</span>
          <br />
          <span>id: {id}</span>
        </Card.Text>
        <Button variant="primary">Click me</Button>
      </Card.Body>
    </Card>
  )
}

export default User
