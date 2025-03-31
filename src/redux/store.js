import { configureStore } from '@reduxjs/toolkit'; 
// import rootSlice from './reducers/rootSlice';
import projectsSlice from './reducers/projectsSlice';
import aboutSlice from './reducers/aboutSlice';

const store = configureStore({
    reducer: {  
        // root: rootSlice.reducer,
        projects: projectsSlice.reducer,
        about: aboutSlice.reducer,
    }
});


export default store;