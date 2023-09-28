import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const deleteConversationTimeout = 5000;

export type SelectedConversationType = number | undefined;

export interface IMessage {
  id: number;
  type: 'text' | 'image';
  content: string;
  time: number;
  fromMe: boolean;
}

export interface IConversation {
  id: number;
  title: string;
  subtitle: string;
  avatar: string;
  messages: IMessage[];
  read: boolean;
  isDeleting: NodeJS.Timeout | undefined;
}

interface MessagesState {
  conversations: IConversation[];
  selectedConversation: SelectedConversationType;
}

const initialState: MessagesState = {
  conversations: [
    {
      id: 1,
      title: 'Exotic Red Poodle',
      subtitle: 'Blueberrypoodle',
      avatar: 'images/poodles/poodle1.jpg',
      messages: [
        {
          id: 1,
          type: 'text',
          content: 'Hi, I\'m interested in your poodle.',
          time: 2695957557470,
          fromMe: false,
        },
        {
          id: 2,
          type: 'text',
          content: 'Can you send me some pictures?',
          time: 1995757557872,
          fromMe: true,
        },
        {
          id: 3,
          type: 'image',
          content: 'images/poodle1.jpg',
          time: 1695757558474,
          fromMe: false,
        },
        {
          id: 4,
          type: 'text',
          content: 'She\'s so cute, isn\'t she?',
          time: 1695757557476,
          fromMe: true,
        }
      ],
      read: true,
      isDeleting: undefined,
    },
    {
      id: 2,
      title: 'quiet sable male ',
      subtitle: 'quitepoodle',
      avatar: 'images/poodles/poodle2.jpg',
      messages: [
        {
          id: 1,
          type: 'text',
          content: 'Hi, I\'m interested in your poodle.',
          time: 1695757557470,
          fromMe: true,
        },
        {
          id: 2,
          type: 'text',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa eget egestas purus',
          time: 1695757557472,
          fromMe: true,
        },
        {
          id: 3,
          type: 'image',
          content: 'images/poodle1.jpg',
          time: 1695757557474,
          fromMe: false,
        },
        {
          id: 4,
          type: 'text',
          content: 'She\'s so cute, isn\'t she?',
          time: 1695757557476,
          fromMe: false,
        }
      ],
      read: true,
      isDeleting: undefined,
    },
    {
      id: 3,
      title: 'Exotic Red Poodle',
      subtitle: 'Blueberrypoodle',
      avatar: 'images/poodles/poodle3.jpg',
      messages: [
        {
          id: 1,
          type: 'text',
          content: 'Hi, I\'m interested in your poodle.',
          time: 1695757557470,
          fromMe: true,
        },
        {
          id: 2,
          type: 'text',
          content: 'Can you send me some pictures?',
          time: 1695757557472,
          fromMe: true,
        },
      ],
      read: false,
      isDeleting: undefined,
    },
  ],
  selectedConversation: undefined,
} as MessagesState;

export const messagesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    markConversationForDeletion: (state, action: PayloadAction<{ id: number, callback: () => void }>) => {
      const { id, callback } = action.payload;
      return {
        ...state, conversations: state.conversations.map(conversation => (
          conversation.id === id ? {
            ...conversation,
            isDeleting: setTimeout(callback, deleteConversationTimeout),
          } : conversation
        ))
      };
    },
    undoConversationDelete: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return {
        ...state, conversations: state.conversations.map(conversation => (
          conversation.id === id ? {
            ...conversation,
            isDeleting: undefined,
          } : conversation
        ))
      };
    },
    deleteConversation: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return { ...state, conversations: state.conversations.filter(conversation => conversation.id !== id) };
    },
    markConversationAsRead: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return {
        ...state, conversations: state.conversations.map(conversation => (
          conversation.id === id ? { ...conversation, read: true } : conversation
        ))
      };
    },
    sendTextMessageToConversation: (state, action: PayloadAction<{ id: number, content: string }>) => {
      const { id, content } = action.payload;
      return {
        ...state, conversations: state.conversations.map(conversation => (
          conversation.id === id ? {
            ...conversation,
            messages: conversation.messages.concat({
              id: conversation.messages.length + 1,
              type: 'text',
              content,
              time: Date.now(),
              fromMe: true,
            })
          } : conversation
        ))
      };
    },
    sendImageMessageToConversation: (state, action: PayloadAction<{ id: number, content: string }>) => {
      const { id, content } = action.payload;
      return {
        ...state, conversations: state.conversations.map(conversation => (
          conversation.id === id ? {
            ...conversation,
            messages: conversation.messages.concat({
              id: conversation.messages.length + 1,
              type: 'image',
              content,
              time: Date.now(),
              fromMe: true,
            })
          } : conversation
        ))
      };
    },
    setSelectedConversation: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return { ...state, selectedConversation: id };
    },
    unselectConversation: (state) => {
      return { ...state, selectedConversation: undefined };
    }
  },
});

export const {
  deleteConversation,
  undoConversationDelete,
  markConversationAsRead,
  markConversationForDeletion,
  sendTextMessageToConversation,
  sendImageMessageToConversation,
  setSelectedConversation,
  unselectConversation,
} = messagesSlice.actions;

export default messagesSlice.reducer;
