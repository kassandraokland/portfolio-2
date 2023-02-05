import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import shary from "./images/shary.png";

export default function ProjectExam() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>Project Exam 2</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={shary} alt="Screenshot of the login-page for the social media platform."  />
                <Card.Body>
                    <Card.Text>Project Exam 2 is a social media platform that is made of an API made by my school, React, Bootstrap and Sass.</Card.Text>
                    <Card.Text>On the website you can register with a "stud.noroff.no" email address, log in, add posts, view posts, view profiles, etc.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-kassandraokland">Github link</a></Card.Text>
                    <Card.Text><a href="https://main--chipper-boba-4e66d3.netlify.app/">Live site link</a></Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}