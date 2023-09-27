import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProps } from "~/components/Card";
import { cards } from "./saveInitialState";
import { list } from "~/components/Seller/Seller";
//import { cards } from "~/pages/HomePage/HomePage";
import recordings from "../record.json"

export interface saved {
  saved: CardProps[];
  active: boolean;
  card: CardProps[];
  pendingDelete?: string | null | undefined;
  list: list[];
  save: boolean;
  locate?:string;
}

const initialState: saved = {
  saved: [],
  active: false,
  card: cards,
  pendingDelete: '',
 list:recordings,
 save:false,
 locate:'Ottawa, On'
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    
    save: (state, action: PayloadAction<CardProps>) => {
      const newSaved = action.payload;
      const existingIndex = state.saved.findIndex(
        (item) => item.bg === newSaved.bg
      );
      if (existingIndex === -1) {
        newSaved.active = !newSaved.active;
        state.saved.push(newSaved);
      } else {
        state.saved.splice(existingIndex, 1);
      }
    },
    cardSave: (
      state,
      action: PayloadAction<{ index: number; active: boolean }>
    ) => {
      const { index, active } = action.payload;
      state.card[index].active = !active;
    },
    listSave: (
      state,
      action: PayloadAction<{ index: number; active: boolean }>
    ) => {
      const { index, active } = action.payload;
      state.list[index].active = !active;
    }
    ,
    activate: (
      state,
      action: PayloadAction<{ index: number | undefined; activating: boolean }>
    ) => {
      //state.card = !state.active
      const { index, activating } = action.payload;
      if (typeof index === "number") {
        state.saved[index].active = activating;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.saved = state.saved.filter((savedId) => savedId.inde != id.toString());
    },

    deleteForm: (state, action: PayloadAction<string | null | undefined>) => {
      const formId = action.payload;
      state.pendingDelete = formId;
    },

    confirmDelete: (state) => {
      if (state.pendingDelete != null) {
        state.saved = state.saved.filter(
          (data) => data.inde != state.pendingDelete?.toString()
        );
      }
      state.pendingDelete = null
    },
    cancelDelete: (state) => {
      state.pendingDelete = null;
    },

    toggleSave:(state)=>{
      state.save = !state.save
    },
    addLocation: (state,action:PayloadAction<string>)=>{
      state.locate= action.payload
    }
  },
});

export const { save, activate, remove, cardSave,cancelDelete,confirmDelete,deleteForm,listSave,toggleSave, addLocation  } = savedSlice.actions;

export default savedSlice.reducer;
