import styles from './Input.module.css'

const Input = ({label, textarea}) => {
  return (
    <p className={styles.input_wrapper}>
        <label>{label}</label>
        {textarea ? <textarea/> : <input/>}
    </p>
  )
}

export default Input