import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Nav() {
    return(
        <>
            <Navbar style={{backgroundColor: "#A798F5"}}>
                <Container>
                    <Navbar.Brand>Portfolio</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}