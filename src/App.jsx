import styles from './App.module.css'
// import NewProject from './Components/NewProject/NewProject';
import Sidebar from './Components/Sidebar/Sidebar';
import NoprojectSelected from './Components/NoProjectSelected/NoProjectSelected';
function App() {

  return (
    <main className={styles.home_wrapper}>
      <Sidebar/>
      <NoprojectSelected/>
      {/* <NewProject/> */}
    </main>
  )
}

export default App
