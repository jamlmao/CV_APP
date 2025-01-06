import { useState } from "react";
import * as Styles from './styles/Content.module.css'

function Skill(){
    const defaultSkills =[
      {
        id: 1,
        skillName:"Full Stack Development"
      }

    ];

    const [skills, setSkills] = useState(defaultSkills);
    const [isEditing, setIsEditing] = useState(false);
    const [currentSkills,setCurrentSkills] = useState({
        skillName:''
    })

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleAdd = () => {
        setSkills ([...skills, {...currentSkills, id: Date.now()}]);
        setCurrentSkills({
            skillName:''
        });
    }


    const handleRemove = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    };



    const handleChange = (e) => {
        setCurrentSkills ({
            ...currentSkills, [e.target.name] : e.target.value
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
                          <h1 className={Styles.title}>Skills</h1>
                    </div>

                {isEditing ?(
                    <>
                       <div className={Styles.skillsForm}>
                        <input
                            className={Styles.skillsInput}
                            type="text"
                            name="skillName"
                            value={currentSkills.skillName}
                            onChange={handleChange}
                            placeholder="Skill"
                        />
                        <button
                            onClick={handleAdd}
                            className={Styles.skillAddButton}
                        >Add Skill</button>
                        </div> 
                       
                       
                        <ul className={Styles.skillList}>
                            {skills.map((skl) => (
                                <li key = {skl.id} className={Styles.skillItem}>
                                    <div className={Styles.skillFlex}>
                                        <p className={Styles.skillName}>{skl.skillName}</p>
                                        <button onClick={() => handleRemove(skl.id)} className={Styles.skillRemoveButton}>Remove</button>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </>

                ): (
                    <ul className={Styles.skillList}>
                        {skills.map((skl) => (
                                <li key = {skl.id} className={Styles.skillItem}>
                                    <div className={Styles.skillFlex}>
                                        <p className={Styles.skillName}>• {skl.skillName}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                )}












                </div>
        </section>
    )

     
}

export default Skill;