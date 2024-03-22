import Input from '../Input/Input'
import styles from './NewProject.module.css'

const NewProject = () => {
  return (
    <div className={styles.new_project_wrapper}>
        <menu className={styles.new_projects_menu_btn}>
            <button>cancel</button>
            <button className={styles.save_btn}>save</button>
        </menu>
        <div>
            <Input label={'Title'}/>
            <Input label={'Description'} textarea={true}/>
            <Input label={'Due date'}/>
        </div>
    </div>
  )
}

export default NewProject