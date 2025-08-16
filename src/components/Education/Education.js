import { FaGraduationCap } from 'react-icons/fa';
import './Education-style.css'

function Education(){
    return(
        <div className="education" id="education">
            <h2>Education</h2>
            <div className="card">
                <div style={{ fontSize: '2rem', color: '#030056' }}>
                     <FaGraduationCap />
                </div>
                <h5>Bachelor of Computer Science</h5>
                <h6><a href='https://www.yu.edu.jo' target='_blank'>Yarmouk University</a></h6>
                <p>2020 - 2025</p>
            </div>
        </div>
    )
}
export default Education