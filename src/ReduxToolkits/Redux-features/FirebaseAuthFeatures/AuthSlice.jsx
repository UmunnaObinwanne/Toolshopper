import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../../FirebaseConfigurations/firebaseConfig";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../../FirebaseConfigurations/firebaseConfig"; // Import Firestore instance

// Sign In Thunk
export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Extract only the necessary properties
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Sign Up Thunk
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (
    { username, email, password, firstName, lastName },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      // Store additional user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        email,
        lastName,
      });

      // Extract only the necessary properties
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      return userData;
    } catch (error) {
      console.error("Error during sign up:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "auth/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    signOut(state) {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
