import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: "",
    github: [],
    isLoading: false
};

const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        setSearchType(state, action){
            state.type = action.payload
        },
        updateGithub(state, action) {
            state.github = action.payload
        },
        setIsLoading(state, action){
            state.isLoading = action.payload
        },
    }
})

export const {updateGithub, setSearchType, setIsLoading} = githubSlice.actions;

export const getGithubData = (state) => state.github.github;
export const getSearchType = (state) => state.github.type;
export const getIsLoading = (state) => state.github.isLoading;


export default githubSlice.reducer
