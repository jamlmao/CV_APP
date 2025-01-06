import { useState } from "react";
import * as Styles from './styles/Content.module.css'

function Experience() {
    const defaultExperience = [
        {
            id: 1,
            company: 'Example Company',
            position: 'Software Developer',
            startDate: '2020',
            endDate: '2023',
            description: 'Developed and maintained web applications using React and Node.js'
        }
    ];

    const [experiences, setExperiences] = useState(defaultExperience);
    const [isEditing, setIsEditing] = useState(false);
    const [currentExperience, setCurrentExperience] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleAdd = () => {
        setExperiences([...experiences, { ...currentExperience, id: Date.now() }]);
        setCurrentExperience({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        });
    };

    const handleRemove = (id) => {
        setExperiences(experiences.filter(exp => exp.id !== id));
    };

    const handleChange = (e) => {
        setCurrentExperience({
            ...currentExperience,
            [e.target.name]: e.target.value
        });
    };

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
                    <h1 className={Styles.title}>Experience</h1>
                </div>

                {isEditing ? (
                    <>
                        <div className={Styles.experienceForm}>
                            <input
                                className={Styles.experienceInput}
                                type="text"
                                name="company"
                                value={currentExperience.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                            />
                            <input
                                className={Styles.experienceInput}
                                type="text"
                                name="position"
                                value={currentExperience.position}
                                onChange={handleChange}
                                placeholder="Position Title"
                            />
                            <div className={Styles.experienceFlex}>
                                <input
                                    className={Styles.experienceInput}
                                    type="text"
                                    name="startDate"
                                    value={currentExperience.startDate}
                                    onChange={handleChange}
                                    placeholder="Start Date"
                                />
                                <input
                                    className={Styles.experienceInput}
                                    type="text"
                                    name="endDate"
                                    value={currentExperience.endDate}
                                    onChange={handleChange}
                                    placeholder="End Date"
                                />
                            </div>
                            <textarea
                                className={Styles.experienceTextarea}
                                name="description"
                                value={currentExperience.description}
                                onChange={handleChange}
                                placeholder="Job Description"
                            />
                            <button 
                                onClick={handleAdd}
                                className={Styles.experienceAddButton}
                            >
                                Add Experience
                            </button>
                        </div>

                        <ul className={Styles.experienceList}>
                            {experiences.map((exp) => (
                                <li key={exp.id} className={Styles.experienceItem}>
                                    <div className={Styles.experienceFlex}>
                                        <p className={Styles.experienceCompany}>{exp.company}</p>
                                        <button 
                                            onClick={() => handleRemove(exp.id)}
                                            className={Styles.experienceRemoveButton}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    
                                    <p className={Styles.experienceDates}>{exp.startDate} - {exp.endDate}</p>
                                    <p className={Styles.experiencePosition}>{exp.position}</p>
                                    <p className={Styles.experienceDescription}>{exp.description}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <ul className={Styles.experienceList}>
                        {experiences.map((exp) => (
                            <li key={exp.id} className={Styles.experienceItem}>
                                <div className={Styles.experienceFlex}>
                                    <p className={Styles.experienceCompany}>{exp.company}</p>
                                    <p className={Styles.experienceDates}>{exp.startDate} - {exp.endDate}</p>
                                    
                                </div>
                                <p className={Styles.experiencePosition}>{exp.position}</p>
                                <p className={Styles.experienceDescription}>• {exp.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Experience;