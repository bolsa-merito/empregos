import styles from '../../styles/input.module.css'

function InputText({textLabel, placeholderText}) {
    return (
        <label className={styles.inputText} htmlFor="input">
            <p>{textLabel}</p>
            <input type="text" name="input" id="input" placeholder={placeholderText}/>
        </label>
    )
}

export {InputText}