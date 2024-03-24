import { useContext } from "react";
import styles from "./Sidebar.module.css";
import { ProjectContext } from "../../Contexts/ProjectContext";

const Sidebar = () => {
  const { state, dispatch } = useContext(ProjectContext);

  return (
    <aside className={styles.sidebar_wrapper}>
      <h2>Your Projects</h2>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            console.log("clicked");
            dispatch({ type: "selectedProject" });
          }}
        >
          Create a new project
        </button>
      </div>
      <ul className={styles.projects_list}>
        {state.projects &&  state.projects.map((project) => (
            <button key={project?.id}>{project?.title}</button>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
