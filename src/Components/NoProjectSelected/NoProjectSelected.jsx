import Button from '../Button/Button'
import styles from './NoProjectSelected.module.css'

const NoprojectSelected = () => {
  return (
    <div className={styles.no_project_wrapper}>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/task-done-6431110-5326086.png"/>
        <h2>No project selected</h2>
        <p>Select a project or create a new project</p>
        <p><Button>Create a new project</Button></p>
    </div>
  )
}

export default NoprojectSelected