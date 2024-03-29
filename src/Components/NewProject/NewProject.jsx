import { useContext, useState } from 'react'
import Input from '../Input/Input'
import styles from './NewProject.module.css'
import { ProjectContext } from '../../Contexts/ProjectContext'

const NewProject = () => {

  const {dispatch} = useContext(ProjectContext)

  const [submittedProject, setSubmittedProject] = useState({
    title: '',
    description: '',
    dueDate: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setSubmittedProject(prevState => (
      {
        ...prevState,
        [name]: value,
        id: Date.now()
      }
    ))
  }



  return (
    <div className={styles.new_project_wrapper}>
        <menu className={styles.new_projects_menu_btn}>
            <button onClick={() => dispatch({type: 'cancel'})}>cancel</button>
            <button onClick={() => dispatch({type: 'submittedProject', payload: submittedProject})} className={styles.save_btn}>save</button>
        </menu>
        <div>
            <Input type={'text'} handleChange={handleChange} name={'title'} label={'Title'}/>
            <Input type={'text'} handleChange={handleChange} name={'description'}  label={'Description'} textarea={true}/>
            <Input type={'date'} handleChange={handleChange} name={'dueDate'} label={'Due date'}/>
        </div>
    </div>
  )
}

export default NewProject