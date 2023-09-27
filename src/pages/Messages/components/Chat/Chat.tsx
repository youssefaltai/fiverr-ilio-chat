import { useAppDispatch, useAppSelector } from "~/features/hooks";
import ChatHeaderStyle from "../common/ChatHeader.styled";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatStyle from "./Chat.styled";
import ChatBody from "./ChatBody/ChatBody";
import ChatFooter from "./ChatFooter.styled";
import ChatInput from "./ChatInput.styled";
import ChatSendButton from "./ChatSendButton.styled";
import ImageSvg from "../Svgs/ImageSvg";
import SendSvg from "../Svgs/SendSvg";
import { useState } from "react";
import { sendImageMessageToConversation, sendTextMessageToConversation } from "~/features/messages.slice";
import autoGrow from "./utils/autoGrow";

type ChatProps = {
  onDeleteClicked: (id: number) => void;
}

const Chat = ({ onDeleteClicked }: ChatProps) => {
  const selectedConversation = useAppSelector((state) => state.messages.selectedConversation)!;
  const [conversationInput, setConversationInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const sendTextMessage = (id: number) => {
    if (conversationInput === "") {
      return;
    }

    dispatch(sendTextMessageToConversation({ id, content: conversationInput }));

    setConversationInput("");
  }

  const sendImageMessage = (id: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.item(0);
      if (file === undefined) {
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content !== "string") {
          return;
        }

        dispatch(sendImageMessageToConversation({ id, content }));
      }

      reader.readAsDataURL(file as Blob);
    }

    input.click();
  }

  return (
    <ChatStyle $selectedConversation={selectedConversation}>
      <ChatHeader
        ChatHeaderStyle={ChatHeaderStyle}
        onDeleteClicked={onDeleteClicked}
      />
      <ChatBody selectedConversation={selectedConversation} />
      <ChatFooter>
        <ChatInput
          rows={1}
          placeholder="Add a comment..."
          onInput={(e) => autoGrow(e.target as HTMLTextAreaElement)}
          value={conversationInput}
          onChange={(e) => {
            setConversationInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendTextMessage(selectedConversation);
            }
          }}
        />
        {conversationInput !== "" ? (
          <ChatSendButton
            $variant="text"
            onClick={() => sendTextMessage(selectedConversation)}
          >
            <SendSvg />
          </ChatSendButton>
        ) : (
          <ChatSendButton
            $variant="image"
            onClick={() => sendImageMessage(selectedConversation)}
          >
            <ImageSvg />
          </ChatSendButton>
        )}
      </ChatFooter>
    </ChatStyle>
  );
};



export default Chat;
