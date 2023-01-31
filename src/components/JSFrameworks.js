import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function JSFrameworks() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>JavaScript Frameworks</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src="/100px180"  />
                <Card.Body>
                    <Card.Text>JavaScript Frameworks uses an API and React to load a list of objects on the start page. The list objects are clickable cards that take you to a detail page for each object.</Card.Text>
                    <Card.Text>There is also a contact form, and a login form. The login leads to an admin panel that only exists of an admin heading.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>No link to this project yet as I am going to resit the assignment.</Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}