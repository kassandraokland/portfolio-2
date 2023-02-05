import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import identity from "./images/identity.png";

export default function SemesterProject() {
    return (
        <Container>
            <Card style={{ maxWidth: '700px' }}>
                <Card.Header>
                    <Card.Title>Semester Project 2</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={identity} alt="Screenshot of Identity Shoe Store website." />
                <Card.Body>
                    <Card.Text>Semester project 2 is an e-commerce website that sells footwear. It has both customer facing and admin sections.</Card.Text>
                    <Card.Text>It is built with a Strapi API, vanilla JavaScript and SASS.</Card.Text>
                    <Card.Text>User credentials to log in to the admin section </Card.Text>
                    <ul>
                        <li>email: admin@admin.com</li>
                        <li>username: admin</li>
                        <li>password: Pass1234</li>
                    </ul>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><a href="https://github.com/kassandraokland/semester-project-2">Github link</a></Card.Text>
                    <Card.Text><a href="https://frontendjourney.online/semester-project/frontend/index.html">Live site link</a></Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}