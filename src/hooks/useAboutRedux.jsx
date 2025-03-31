import { useSelector, useDispatch } from "react-redux";
// import { projectsActions } from "../redux/reducers/projectsSlice";
import { getAbout } from "../redux/reducers/aboutReducers";


const useAboutRedux = () => {
    const dispatch = useDispatch();
    const aboutRedux = useSelector(state => state.about)
  
    if(aboutRedux) {
      return {
      ...aboutRedux,
      getAbout: () => dispatch(getAbout()),

      }
    } else {
      throw Error('Error accessing about reducer.');
    }
}

export default useAboutRedux