import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { Suspense, lazy, useState } from "react";
import { sendImageMessageToConversation, sendTextMessageToConversation } from "~/features/messages.slice";
import ChatHeaderStyle from "../common/ChatHeader.styled";
import autoGrow from "./utils/autoGrow";
import ChatHeader from "./ChatHeader/ChatHeader";
// import ChatBody from "./ChatBody/ChatBody";
import ImageSvg from "../Svgs/ImageSvg";
import SendSvg from "../Svgs/SendSvg";
import ChatStyle from "./Chat.styled";
import ChatFooter from "./ChatFooter.styled";
import ChatInputLoading from "./ChatInput.loading";
import ChatSendButtonLoading from "./ChatSendButton.loading";
import ChatBodyLoading from "./ChatBody/ChatBody.loading";
// import ChatInput from "./ChatInput.styled";
// import ChatSendButton from "./ChatSendButton.styled";

// const ChatHeader = lazy(() => import("./ChatHeader/ChatHeader"));
const ChatBody = lazy(() => import("./ChatBody/ChatBody"));
// const ImageSvg = lazy(() => import("../Svgs/ImageSvg"));
// const SendSvg = lazy(() => import("../Svgs/SendSvg"));
// const ChatStyle = lazy(() => import("./Chat.styled"));
// const ChatFooter = lazy(() => import("./ChatFooter.styled"));
const ChatInput = lazy(() => import("./ChatInput.styled"));
const ChatSendButton = lazy(() => import("./ChatSendButton.styled"));

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
    <ChatStyle
      $selectedConversation={selectedConversation}
      onTouchMove={
        // Fix momentum scrolling on iOS
        (e) => {
          e.stopPropagation();
        }}>
      <ChatHeader
        ChatHeaderStyle={ChatHeaderStyle}
        onDeleteClicked={onDeleteClicked}
      />
      <Suspense fallback={<ChatBodyLoading />}>
        <ChatBody selectedConversation={selectedConversation} />
      </Suspense>
      <ChatFooter>
        <Suspense fallback={<ChatInputLoading />}>
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
        </Suspense>
        <Suspense fallback={<ChatSendButtonLoading />}>
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
        </Suspense>
      </ChatFooter>
    </ChatStyle>
  );
};



export default Chat;
