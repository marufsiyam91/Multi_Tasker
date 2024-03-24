import { useContext } from "react";
import styles from "./NoProjectSelected.module.css";
import { ProjectContext } from "../../Contexts/ProjectContext";

const NoprojectSelected = () => {
  const { dispatch } = useContext(ProjectContext);

  return (
    <div className={styles.no_project_wrapper}>
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/task-done-6431110-5326086.png" />
      <h2>No project selected</h2>
      <p>Select a project or create a new project</p>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "selectedProject" })}
      >
        Create a new project
      </button>
    </div>
  );
};

export default NoprojectSelected;
