import { useSelector, useDispatch } from "react-redux";
import { projectsActions } from "../redux/reducers/projectsSlice";
import { getProjects } from "../redux/reducers/projectsReducers";


const useProjectsRedux = () => {
    const dispatch = useDispatch();
    const projectsRedux = useSelector(state => state.projects)
  
    if(projectsRedux) {
      return {
      ...projectsRedux,
      filterProjects: (data) => dispatch(projectsActions.filterProjects(data)),
      getProjects: () => dispatch(getProjects()),

      }
    } else {
      throw Error('Error accessing projects reducer.');
    }
}

export default useProjectsRedux