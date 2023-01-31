import ProjectExam from './components/ProjectExam';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import JSFrameworks from './components/JSFrameworks';
import SemesterProject from './components/SemesterProject';
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Nav />
      <Container className="mt-4">
      <Stack gap={4}>
        <ProjectExam/>
        <JSFrameworks />
        <SemesterProject />
      </Stack>
      </Container>
    </>
  );
}

export default App;