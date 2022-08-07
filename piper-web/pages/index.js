import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <Container  className="py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <Button className="btn btn-primary btn-lg">Example button</Button>
      </Container>
    </div>
  )
}
