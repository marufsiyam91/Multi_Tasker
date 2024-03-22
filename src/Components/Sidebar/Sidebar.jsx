import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar_wrapper}>
        <h2>Your Projects</h2>
        <div>
            <button>+ Add Project</button>
        </div>
        <ul>

        </ul>

    </aside>
  )
}

export default Sidebar