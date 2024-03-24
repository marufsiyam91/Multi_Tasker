import styles from './Input.module.css'

const Input = ({label, textarea, handleChange, name, type}) => {
  return (
    <p className={styles.input_wrapper}>
        <label>{label}</label>
        {textarea ? <textarea type={type} onChange={handleChange} name={name}/> : <input type={type} onChange={handleChange} name={name}/>}
    </p>
  )
}

export default Input