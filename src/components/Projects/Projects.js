import { FaLaptopCode } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import './Projects-style.css'

function Projects(){
    return(
        <div className='projects' id="projects">
            <h2>Projects</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                    <div style={{ fontSize: '2rem', color: '#030056' }}>
                        <FaLaptopCode/>
                    </div>
                    <Card.Title>Todo List</Card.Title>
                    <Card.Text>
                        Simple Todo list using JavaScript
                    </Card.Text>
                    <Card.Link href="https://github.com/OsayedAlazzamm/JavaScript-Final-Project-List-to-do" target="_blank">Source Code</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects