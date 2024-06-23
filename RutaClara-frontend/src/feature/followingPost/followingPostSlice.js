import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const http = axios.create({
    baseURL: "https://rutaclarasocialnetwork-production.up.railway.app",
    headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("psnToken"),
    },
})

const initialState = {
  followingPosts: null,
};
console.log(localStorage.getItem("psnToken"));
export const getFollowingPosts = createAsyncThunk(
  "/api/v1/followingposts",
  async (thunkAPI) => {
    const response = await http({
      method: "post",
      url: "/api/v1/followingposts",
      data: {
        id: localStorage.getItem("psnUserId"),
      },
    });

    return response.data.payload;
  }
);

async function insertComment(postId, commentContent) {
  const response = await http({
    method: "post",
    url: "/api/v1/insertcomment",
    data: {
      commentEntity: {
        userId: localStorage.getItem("psnUserId"),
        userFullname: localStorage.getItem("psnUserFirstName") + " " + localStorage.getItem("psnUserLastName"),
        content: commentContent, 
      },
      postId: {
        id: postId,
      },
    },
  });
}

async function updateLove(postId, currentUserId) {
    const response = await http({
        method: "post",
        url: "/api/v1/lovepost",
        data: {
            id1: postId,
            id2: currentUserId,
        }
    });
    
    return response.data;
}

async function updateShare(postId, currentUserId) {
    const response = await http({
        method: "post",
        url: "/api/v1/sharepost",
        data: {
            id1: postId,
            id2: currentUserId,
        }
    });
    
    return response.data;
}

export const followingPostSlice = createSlice({
  name: "followingPostSlice",
  initialState,
  reducers: {
      addLove: (state, action) => {
        if (state.followingPosts !== null) {
            for (let i = 0; i < state.followingPosts.length; i++) {
                if (state.followingPosts[i].post.id === action.payload.postId) {
                    if (!state.followingPosts[i].post.love.includes(action.payload.userId)) {
                        state.followingPosts[i].post.love.push(action.payload.userId);
                        updateLove(action.payload.postId, action.payload.userId);
                    } else {
                        state.followingPosts[i].post.love = state.followingPosts[i].post.love.filter(item => item !== action.payload.userId);
                        updateLove(action.payload.postId, action.payload.userId);
                    }
                }
            }
        }
      },

      addShare: (state, action) => {
          if (state.followingPosts !== null) {
              for (let i = 0; i < state.followingPosts.length; i++) {
                  if (state.followingPosts[i].post.id === action.payload.postId) {
                      state.followingPosts[i].post.share.push(action.payload.userId);
                      updateShare(action.payload.postId, action.payload.userId);
                  }
              }
          }
      },

      addComment: (state, action) => {
        if (state.followingPosts !== null) {
          for (let i = 0; i < state.followingPosts.length; i++) {
            if (state.followingPosts[i].post.id === action.payload.postId) {
              state.followingPosts[i].post.comment.push(action.payload.newComment);
              insertComment(action.payload.postId, action.payload.newComment.content);
            }
          }
        }
      }
  },
  extraReducers: (builder) => {
    builder.addCase(getFollowingPosts.fulfilled, (state, action) => {
      state.followingPosts = action.payload;
    });
  },
});

export const {addLove, addShare, addComment} = followingPostSlice.actions;
export default followingPostSlice.reducer;
