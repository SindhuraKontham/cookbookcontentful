import Card from 'react-bootstrap/Card';
import './soup.css'



export default function Soup() {


  
  return (
    <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}
