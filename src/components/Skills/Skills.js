import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import './Skills-style.css'

function Skills(){
    return(
        <div className='skills' id="skills">
           <h2>Skills</h2>
           <ul>Programming Languages
                <li>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="primary">HTML</Badge>
                        <Badge bg="primary">CSS</Badge>
                        <Badge bg="primary">JavaScript</Badge>
                    </Stack>
                </li>
                <li>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="primary">PHP</Badge>
                        <Badge bg="primary">Java</Badge>
                        <Badge bg="primary">C++</Badge>
                        <Badge bg="primary">Python</Badge>
                    </Stack>
                </li>
            </ul>
            <ul>Frameworks & Libraries
                <li>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="info">React.js</Badge>
                        <Badge bg="info">Laravel</Badge>
                    </Stack>
                </li>
            </ul> 
        </div>
    )
}

export default Skills