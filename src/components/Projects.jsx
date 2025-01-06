import { useState } from "react";
import * as Styles from './styles/Content.module.css'

function Project() {
    const defaultProjects = [{
        id: 1,
        projectName: "Project Name",
        projectDescription: "Project Description",
    }]


    const [projects, setProjects] = useState(defaultProjects);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProjects, setCurrentProjects] = useState({
        projectName: '',
        projectDescription: '',
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleAdd = () => {
        setProjects([...projects, { ...currentProjects, id: Date.now() }]);
        setCurrentProjects({
            projectName: '',
            projectDescription: '',
        });
    }


    const handleRemove = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    };



    const handleChange = (e) => {
        setCurrentProjects({
            ...currentProjects, [e.target.name]: e.target.value
        })
    }



    return (
        <section>
            <div className={Styles.personalContainer}>
                <button
                    onClick={handleEdit}
                    className={`${Styles.editButton} ${isEditing ? Styles.saving : ''}`}
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>

                <div className={`${Styles.flex} ${Styles.titleWrapper}`}>
                    <h1 className={Styles.title}>Projects</h1>
                </div>

                {isEditing ? (
                    <>
                        <div className={Styles.skillsForm}>
                            <input
                                type="text"
                                name="projectName"
                                value={currentProjects.projectName}
                                onChange={(e) => handleChange(e)}
                                placeholder="Project Name"
                            />
                            <input
                                type="text"
                                name="projectDescription"
                                value={currentProjects.projectDescription}
                                onChange={(e) => handleChange(e)}
                                placeholder="Project Description"
                            />
                            <button onClick={handleAdd}  className={Styles.skillAddButton}>Add</button>
                        </div>


                        <ul className={Styles.list}>
                        {projects.map(project => (
                            <li key={project.id} className={`${Styles.flex} ${Styles.item}`}>
                                <div>
                                <button className={Styles.skillRemoveButton} onClick={() => handleRemove(project.id)}>Remove</button>
                                    <h3>{project.projectName}</h3> 
                                    <p className={Styles.gpa}>• {project.projectDescription}</p>
                                  
                                </div>
                               
                            </li>
                        ))}
                    </ul>
                  


                    </>
                ) : (
                    <ul className={Styles.list}>
                        {projects.map(project => (
                            <li key={project.id} className={`${Styles.flex} ${Styles.item}`}>
                                <div>
                                    <h3>{project.projectName}</h3>
                                    <p className={Styles.gpa}>• {project.projectDescription}</p>
                                </div>
                               
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )




}

export default Project 