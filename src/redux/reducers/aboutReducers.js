import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

/** getAbout
 *  @desc get object of about information from user
 */
export const getAbout = createAsyncThunk( 'about/getAbout', async ( payload, { rejectWithValue }) => {
    const docRef = doc(db, "user", "about");
    const docSnap = await getDoc(docRef);

    let about;
    if (docSnap.exists()) {
        about = docSnap.data();
    } else {
        throw new Error("No data found.")
    }

    try {
        return about
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})