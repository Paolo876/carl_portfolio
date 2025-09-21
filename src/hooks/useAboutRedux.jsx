import { useSelector, useDispatch } from "react-redux";
import { getAbout } from "../redux/reducers/aboutReducers";
import { aboutActions } from "../redux/reducers/aboutSlice";


const useAboutRedux = () => {
    const dispatch = useDispatch();
    const aboutRedux = useSelector(state => state.about)
  
    if(aboutRedux) {
      return {
      ...aboutRedux,
      getAbout: () => dispatch(getAbout()),
      updateInfo: (data) => dispatch(aboutActions.updateInfo(data))  
      }
    } else {
      throw Error('Error accessing about reducer.');
    }
}

export default useAboutRedux