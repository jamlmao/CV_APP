import { useState } from "react";
import * as Styles from './styles/Content.module.css'

function Introduction(){
    const [isEditing, setIsEditing] = useState(false);
    const [introText, setIntroText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.');

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setIntroText(e.target.value);
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

                {isEditing ? (
                    <textarea
                        className={Styles.introTextArea}
                        value={introText}
                        onChange={handleChange}
                        placeholder="Write your introduction here..."
                        rows="10"
                    />
                ) : (
                    <div className={Styles.introText}>
                        <h2 className={Styles.titleWrapper}>Introduction</h2>
                        <p>{introText}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Introduction;