import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageProps } from "~/pages/HomePage/components/Modal/NewPost/NewPost";

interface formState {
  breed: string;
  registry: string | null;
  gender: string | boolean;
  age: string | null;
  price: string | null;
  ageType: string | null;
  description: string | null;
  title: string | null;
  uploadedImages: ImageProps[];
  submittedForm?: Array<formState>;
  id: string ;
  pendingDelete?: string |null;
}

export type ImageFilter = {
  src: string;
  id: string;
  filter: (id: string) => void;
};

export interface newForm {
  breed: string;
  registry: string | null;
  gender: string | boolean;
  age: string | null;
  price: string | null;
  ageType: string | null;
  description: string | null;
  title: string | null;
  uploadedImages: ImageProps[];
  submittedForm?: Array<formState>;
  id: string ;
  pendingDelete?:string | null;
}

const initialState: formState = {
  breed: "",
  registry: "",
  gender: "",
  age: "",
  price: "",
  ageType: "",
  description: "",
  title: "",
  id: "",
  uploadedImages: [],
  submittedForm: [],
  pendingDelete: ""
};

export const newPostSlice = createSlice({
  name: "newPost",
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{ name: keyof formState; value: any }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },

    removeImage: (state, action: PayloadAction<string>) => {
      const removeItem = parseInt(action.payload);
      state.uploadedImages = state.uploadedImages?.filter(
        (id) => parseInt(id.id) != removeItem
      );
    },

    submitForm: (state) => {
      const newForm: newForm = {
        breed: state.breed,
        registry: state.registry,
        gender: state.gender,
        age: state.age,
        price: state.price,
        ageType: state.ageType,
        description: state.description,
        title: state.title,
        id: state.id,

        uploadedImages: state.uploadedImages ? state.uploadedImages : [],
      };
      state.submittedForm?.push(newForm);
       
      state.breed = "";
      state.registry = "";
      state.gender = "";
      state.age = "";
      state.price = "";
      state.ageType = "";
      state.description = "";
      state.title = "";
      state.id=''
      state.uploadedImages = [];
    },
    random: (state) => {
      const number = Math.floor(Math.random() * 10000);
      state.id = number.toString();
    },

    editForm: (state, action:PayloadAction<{index:number; editform:newForm}>) => {
   const {index, editform} = action.payload;
    state.submittedForm? state.submittedForm[index] = editform : state.submittedForm
    },

    deleteForm: (state, action:PayloadAction<string | null>)=>{
      const formId = action.payload;
      state.pendingDelete = formId;
    },

    confirmDelete: (state)=>{

        if(state.pendingDelete!=null){
        state.submittedForm = state.submittedForm?.filter((form) => form.id !== state.pendingDelete?.toString())
        state.pendingDelete= null
        }
      },
      cancelDelete: (state)=>{

        state.pendingDelete= null
      }
   
  },
});

export const { addPost, submitForm, removeImage, random ,editForm,confirmDelete,cancelDelete,deleteForm} =
  newPostSlice.actions;

export default newPostSlice.reducer;
