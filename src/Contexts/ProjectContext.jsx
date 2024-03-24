import { createContext, useReducer } from "react";

const initialValue = {
    selectedProject: undefined,
    projects: [],
    error: false
}

const reducer = (state, action) => {
    switch(action.type){
        case 'selectedProject':
            return {
                ...state,
                selectedProject: null
            };
        case 'submittedProject':
            const {title, description, dueDate} = action.payload
            if(title === '' || description === '' || dueDate === ''){
                return{
                    ...state,
                    error: true
                }
            }
            return {
                ...state,
                projects: [...state.projects, action.payload],
                selectedProject: undefined,
                error: false
            };
        case 'cancel':
            return{
                ...state,
                selectedProject: undefined,
                error: false
            };
        default:
            return state; // Return current state for unknown action types
    }
};


export const ProjectContext = createContext();

const ProjectContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <ProjectContext.Provider value={{state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider

