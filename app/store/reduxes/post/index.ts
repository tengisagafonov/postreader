import {createSlice} from '@reduxjs/toolkit';
import {PostType} from 'types/post';

interface PostStateI {
  posts: PostType[];
}

const initialState: PostStateI = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearState: state => {
      state.posts = [];
    },
  },
});

export const {clearState} = postSlice.actions;

export default postSlice.reducer;
