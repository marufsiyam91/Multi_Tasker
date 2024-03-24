import styles from './App.module.css'
import NewProject from './Components/NewProject/NewProject';
import Sidebar from './Components/Sidebar/Sidebar';
import NoprojectSelected from './Components/NoProjectSelected/NoProjectSelected';
import { useContext } from 'react';
import { ProjectContext } from './Contexts/ProjectContext';
function App() {

  const {state} = useContext(ProjectContext);

  let content;

  if(state.selectedProject === null){
    content = <NewProject/>
  }else if(state.selectedProject === undefined){
    content = <NoprojectSelected/>
  }

  return (
    <main className={styles.home_wrapper}>
      <Sidebar/>
      {
        content
      }
    </main>
  )
}

export default App
