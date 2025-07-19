import { useParams } from "react-router-dom";
import Project from "../datas/Projects";

function Project() {

    const id = useParams();
    const project = Project.find(p=>p.id === id);
    
    return (
        <div>
            <h1>{project.title}</h1>
        </div>
    )
}

export default Project;