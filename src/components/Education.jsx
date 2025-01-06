import { useState } from "react";
import * as Styles from './styles/Content.module.css'



function Education(){
    const [isEditing, setIsEditing] = useState(false); 
    const [educationInfo, setEducationInfo]=useState({
        school: "School Name",
        degree: "Degree in Major ",
        gradDate: "19XX - 20XX",
        gpa: "1",
        schoolAddress: "School Address",
    });

    const handleEdit=()=>{
        setIsEditing(!isEditing);
    };


    const handleChange = (e) => {
        setEducationInfo({
            ...educationInfo,[e.target.name]: e.target.value
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
            {isEditing?(
                <>
                   <div className={`${Styles.flex} ${Styles.titleWrapper} ${Styles.name}`}>
                    <h1 className={Styles.title}>Education</h1>
                   </div>

                   <ul className={Styles.list}>
                        <li className={`${Styles.flex} ${Styles.item}`}>
                            < input type ="text" name="school" value ={educationInfo.school} onChange={(e)=> handleChange (e,'school')} />
                            < input type ="text" name="location" value ={educationInfo.schoolAddress} onChange={(e) => handleChange(e, 'location')} />
                        </li>

                        <li className={`${Styles.flex} ${Styles.item}`}>
                        <input 
                            type="text" 
                            name="degreeAndMajor"
                            value={educationInfo.degree}
                            onChange={(e)=> handleChange(e,'degreeAndMajor')}
                           
                        />


                            <input 
                                    type="text" 
                                    name="gradDate" 
                                    value={educationInfo.gradDate}
                                    onChange={(e)=> handleChange(e,'gradDate')}
                                />
                        </li>
                        <li>
                            GPA: <input type="text" name="gpa" value={educationInfo.gpa} onChange={(e)=> handleChange(e,'gpa')} />
                        </li>
                   </ul>
                </>




            ):(
                <>
                   <div className={`${Styles.flex} ${Styles.titleWrapper}`}>
                    <h1 className={Styles.title}>Education</h1>
                   </div>

                   <ul className={Styles.list}>
                        <li className={`${Styles.flex} ${Styles.item}`}>
                            <p>{educationInfo.school}</p>
                            <p>{educationInfo.schoolAddress}</p>
                        </li>

                        <li className={`${Styles.flex} ${Styles.item}`}>
                          <p>{educationInfo.degree}</p>
                          <p>{educationInfo.gradDate}</p>
                        </li>
                        <li className={Styles.gpa}>
                            • GPA: {educationInfo.gpa}
                        </li>
                   </ul>
                </>
            )}
            </div>
        </section>
    )



}

export default Education;   