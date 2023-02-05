import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import pokemons from "./images/pokemons.png";

export default function JSFrameworks() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>JavaScript Frameworks</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={pokemons} className="fluid" alt="Screenshot of the Pokemon Card project I did for the JavaScript Frameworks course." />
                <Card.Body>
                    <Card.Text>JavaScript Frameworks uses the <a href="https://dev.pokemontcg.io/">Pokemon TCG API</a> and React to load a list of pokemon cards and a list of only grass type pokemon cards.</Card.Text>
                    <Card.Text>There is also a contact form.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text><a href="https://github.com/kassandraokland/noroff-jsfresit-kassandraokland">Github link</a></Card.Text>
                </Card.Footer>
            </Card>
        </Container>
    )
}