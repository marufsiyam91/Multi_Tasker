import Button from '../Button/Button'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar_wrapper}>
        <h2>Your Projects</h2>
        <div>
            <Button>+ Add project</Button>
        </div>
        <ul>

        </ul>

    </aside>
  )
}

export default Sidebar