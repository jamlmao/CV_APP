import { useState } from "react";
import * as Styles from './styles/Content.module.css'

function Personal(){

    const [isEditing, setIsEditing] = useState(false);
    const [personalInfo, setPersonalInfo]=useState({
        name: "John Doe",
        address: "Home or Campus Street Address",
        city: "City, State Zip",
        email: "youremail@domain.com",
        socials: "linkedin.com/in/yourname",
        phone: "xxxx-xxx-xxxx" 
    });

    const handleEdit =()=>{
        setIsEditing(!isEditing);
    };


    const handleChange = (e) => { 
        setPersonalInfo({
            ...personalInfo,[e.target.name]: e.target.value
        });
    };



    return(

        <>
            <div className={Styles.personalContainer}>
                <button 
                    onClick={handleEdit}
                   className={`${Styles.editButton} ${isEditing ? Styles.saving : ''}`}
                >
                    {isEditing ? 'Save' : 'Edit'}
                    </button>
            
        {isEditing?(
            <>
                <input type="text" name="name" value={personalInfo.name} 
                onChange={(e) => handleChange(e, 'name')} 
                className={`${Styles.textCenter} ${Styles.name}`} />
              
                <ul className={`${Styles.flex} ${Styles.personal}`}>
                    <li>
                        <input type="text" name="address" value={personalInfo.address} onChange={(e) => handleChange(e, 'address')} className={`${Styles.textCenter} ${Styles.address}`} />
                    </li>
                    <li>
                        <input type="text" name="city" value={personalInfo.city} onChange={(e) => handleChange(e, 'city')} className={`${Styles.textCenter} ${Styles.city}`} />
                    </li>
                    <li>
                        <input type="text" name="email" value={personalInfo.email} onChange={(e) => handleChange(e, 'email')} className={`${Styles.textCenter} ${Styles.email}`} />
                    </li>
                    <li>
                        <input type="text" name="socials" value={personalInfo.socials} onChange={(e) => handleChange(e, 'socials')} className={`${Styles.textCenter} ${Styles.socials}`} />
                    </li>
                    <li>
                        <input type="text" name="phone" value={personalInfo.phone} onChange={(e) => handleChange(e, 'phone')} className={`${Styles.textCenter} ${Styles.phone}`} />
                    </li>
                </ul>
                <hr />
            </>
        ):(
            <>
                <h1 className={`${Styles.textCenter} ${Styles.name}`}>{personalInfo.name}</h1>
                <ul className={`${Styles.flex} ${Styles.personal}`}>
                    <li className={Styles.address}>{personalInfo.address}</li>
                    <li className={Styles.city}>•{personalInfo.city}</li>
                    <li className={Styles.email}>•{personalInfo.email}</li>
                    <li className={Styles.socials}>•{personalInfo.socials}</li>
                    <li className={Styles.phone}>•{personalInfo.phone}</li>
                </ul>
                <hr />
            </>
        )}
          </div>
       </>

    )
}




export default Personal