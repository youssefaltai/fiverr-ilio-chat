import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IStyledComponent, styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import {
  IConversation,
  IMessage,
  markConversationForDeletion,
  markConversationAsRead,
  undoConversationDelete,
  deleteConversation,
  sendTextMessageToConversation,
  sendImageMessageToConversation
} from "~/features/messages.slice";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const conversations = useAppSelector((state) => state.messages.conversations);
  const [conversationInputs, setConversationInputs] = useState<{ [key: number]: string }>(
    conversations.reduce((acc, conversation) => {
      acc[conversation.id] = "";
      return acc;
    }, {} as { [key: number]: string })
  );
  const dispatch = useAppDispatch();

  const unselectConversation = () => {
    setSelectedConversation(null);
  }

  const selectConversation = (id: number) => {
    // When selecting a conversation, mark the previously selected conversation as read
    // before selecting the new one
    if (selectedConversation !== null) {
      dispatch(markConversationAsRead(selectedConversation));
    }

    setSelectedConversation(id);
  }

  const optimisticDelete = (id: number) => {
    unselectConversation();

    const convo = conversations.find((conversation) => conversation.id === id);
    if (convo === undefined) {
      return;
    }

    dispatch(markConversationForDeletion({
      id: convo.id,
      callback: () => {
        dispatch(deleteConversation(convo.id));
      }
    }));
  }

  const sendTextMessage = (id: number) => {
    if (conversationInputs[id] === "") {
      return;
    }

    dispatch(sendTextMessageToConversation({ id, content: conversationInputs[id] }));

    const newConversationInputs = { ...conversationInputs };
    newConversationInputs[id] = "";
    setConversationInputs(newConversationInputs);
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
    <>
      <Container>
        <Navbar
          title="Messages"
          selectedConversation={selectedConversation}
          unselectConversation={unselectConversation}
          optimisticDelete={optimisticDelete}
        />
        <Title>Messages</Title>
        <Main>
          <ConversationsList $selectedConversation={selectedConversation}>
            {conversations.map((conversation, index) => (
              <Conversation
                key={index}
                onClick={() => {
                  selectConversation(conversation.id)
                }}
                selectedConversation={selectedConversation}
                conversation={conversation}
              />
            ))}
          </ConversationsList>
          {selectedConversation === null ? (
            <SelectConversation $selectedConversation={selectedConversation}>
              Select a conversation to start messaging
            </SelectConversation>
          ) : (
            <Chat $selectedConversation={selectedConversation}>
              <ChatHeader
                ChatHeaderStyle={ChatHeaderStyle}
                selectedConversation={
                  selectedConversation !== null
                    ? conversations.find((conversation) => conversation.id === selectedConversation)
                    : undefined
                }
                optimisticDelete={optimisticDelete}
              />
              <ChatBody selectedConversation={selectedConversation} />
              <ChatFooter>
                <ChatInput
                  rows={1}
                  placeholder="Add a comment..."
                  onInput={(e) => autoGrow(e.target as HTMLTextAreaElement)}
                  value={conversationInputs[selectedConversation] ?? ""}
                  onChange={(e) => {
                    const newConversationInputs = { ...conversationInputs };
                    newConversationInputs[selectedConversation] = e.target.value;
                    setConversationInputs(newConversationInputs);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendTextMessage(selectedConversation);
                    }
                  }}
                />
                {conversationInputs[selectedConversation] !== "" ? (
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
            </Chat>
          )}
        </Main>
      </Container >
    </>
  );
}

const SendSvg = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.439 1.5604C15.8532 0.974567 15.024 0.744618 14.2199 0.946285L3.29238 3.67791C1.83571 4.04208 0.864043 5.29545 0.874876 6.79711C0.885709 8.29878 1.87405 9.53787 3.33571 9.88204L7.20738 10.7929L8.11822 14.6645C8.46239 16.1262 9.70153 17.1145 11.2032 17.1254C11.2115 17.1254 11.219 17.1254 11.2274 17.1254C12.7182 17.1254 13.9599 16.1562 14.3224 14.7079L17.054 3.78045C17.2549 2.97545 17.0249 2.14623 16.439 1.5604ZM15.8407 3.47538L13.1091 14.4029C12.8349 15.4962 11.9124 15.8621 11.2115 15.8746C10.5074 15.8696 9.59319 15.4746 9.33486 14.3771L8.41485 10.4687L11.9416 6.94207C12.1857 6.69791 12.1857 6.30204 11.9416 6.05788C11.6974 5.81371 11.3015 5.81371 11.0574 6.05788L7.53071 9.58459L3.62237 8.66459C2.52487 8.40625 2.12988 7.49202 2.12488 6.78786C2.11988 6.08286 2.50237 5.16371 3.59654 4.89038L14.5232 2.15875C14.6124 2.13625 14.7024 2.12538 14.7907 2.12538C15.074 2.12538 15.3474 2.23712 15.5549 2.44378C15.8274 2.71628 15.934 3.10204 15.8407 3.47538Z" fill="white" />
  </svg>
);

const ImageSvg = () => (
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.1667 0.708344H4.83333C2.65083 0.708344 0.875 2.48418 0.875 4.66668V11.3333C0.875 11.6442 0.919162 11.9425 0.987495 12.2325C0.997495 12.2717 1.00583 12.3091 1.02333 12.3466C1.47416 14.0366 3.00333 15.2917 4.83333 15.2917H13.1667C15.3492 15.2917 17.125 13.5158 17.125 11.3333V4.66668C17.125 2.48418 15.3492 0.708344 13.1667 0.708344ZM4.83333 1.95834H13.1667C14.66 1.95834 15.875 3.17334 15.875 4.66668V8.99081L12.5333 5.64914C11.9633 5.07914 11.0358 5.07914 10.4667 5.64914L6.5 9.61581L5.86667 8.98247C5.29667 8.41247 4.36916 8.41247 3.8 8.98247L2.125 10.6575V4.66668C2.125 3.17334 3.34 1.95834 4.83333 1.95834ZM13.1667 14.0417H4.83333C3.66417 14.0417 2.67583 13.2933 2.29666 12.2533L4.68334 9.86667C4.78917 9.76084 4.87667 9.76084 4.9825 9.86667L5.76584 10.6501C6.17 11.0542 6.82834 11.0542 7.23334 10.6501L11.35 6.53334C11.4317 6.45167 11.5683 6.45167 11.6492 6.53334L15.8742 10.7584V11.3333C15.875 12.8267 14.66 14.0417 13.1667 14.0417ZM4.83333 5.50001C4.83333 5.04001 5.20667 4.66668 5.66667 4.66668C6.12667 4.66668 6.5 5.04001 6.5 5.50001C6.5 5.96001 6.12667 6.33334 5.66667 6.33334C5.20667 6.33334 4.83333 5.96001 4.83333 5.50001Z" fill="#292F3F" />
  </svg>
);

type NavbarProps = {
  title: string;
  selectedConversation: number | null;
  unselectConversation: () => void;
  optimisticDelete: (id: number) => void;
}

const Navbar = ({
  title,
  selectedConversation,
  unselectConversation,
  optimisticDelete
}: NavbarProps) => {
  const navigate = useNavigate();
  const conversations = useAppSelector((state) => state.messages.conversations);
  const dispatch = useAppDispatch();

  const navigateBack = () => {
    if (selectedConversation !== null) {
      dispatch(markConversationAsRead(selectedConversation));
      unselectConversation();
    } else {
      navigate(-1);
    }
  }

  return (
    <NavbarContainer>
      <AppLogo onClick={() => navigate("/")} />
      <NavbarBackButton>
        <NavbarBackButtonIcon onClick={navigateBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.7821 8.27976L9.81207 12.2497L13.7807 16.2182C14.0731 16.5107 14.0731 16.9862 13.7807 17.2786C13.6337 17.4256 13.4417 17.4976 13.2497 17.4976C13.0577 17.4976 12.8658 17.4241 12.7188 17.2786L8.21935 12.7792C7.92688 12.4867 7.92688 12.0112 8.21935 11.7188L12.7188 7.21935C13.0112 6.92688 13.4866 6.92688 13.7791 7.21935C14.0716 7.51181 14.0746 7.9873 13.7821 8.27976Z"
              fill={"#000000"}
            />
          </svg>
        </NavbarBackButtonIcon>
        <NavbarBackButtonTitle $selectedConversation={selectedConversation}>
          {title}
        </NavbarBackButtonTitle>
        <ChatHeader
          ChatHeaderStyle={NavbarChatHeaderStyle}
          selectedConversation={
            selectedConversation !== null
              ? conversations.find((conversation) => conversation.id === selectedConversation)
              : undefined
          }
          optimisticDelete={optimisticDelete}
        />
      </NavbarBackButton>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: calc(100% - 48px);
  overflow: hidden;
  background-color: white;
  z-index: 999;

@media (width <= 428px) {
    height: 66px;
  }
`;

const AppLogo = styled.img.attrs({
  src: "/Frame 87.png",
  alt: "logo",
})`
  padding-left: 10px;
  cursor: pointer;

  @media (width <= 428px) {
    display: none;
  }
`;

const NavbarBackButton = styled.div`
  display: none;

  @media (width <= 428px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
  }
`;

const NavbarBackButtonIcon = styled.button`
  all: unset;
  height: 24px;
  width: 24px;

  cursor: pointer;
`;

type NavbarBackButtonTitleProps = {
  $selectedConversation: number | null;
}

const NavbarBackButtonTitle = styled.span<NavbarBackButtonTitleProps>`
  display: ${(props) => props.$selectedConversation !== null ? "none" : "block"};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  color: #292F3F;
`;

const Container = styled.div`
  font-family: Inter;
  max-width: calc(988px + 10px);
  margin: 66px auto 0 auto;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  height: 66px;
  color: #292F3F;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 10px;

  /* Hide in mobile */
  @media (width <= 428px) {
    display: none;
  }
`;

const Main = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: calc(100vh - 66px - 66px - 10px - 5px);

  @media (width <= 428px) {
    height: calc(100vh - 66px - 10px - 5px);
  }
`;

type ConversationsListProps = {
  $selectedConversation: number | null;
}

const ConversationsList = styled.div<ConversationsListProps>`
  font-family: Inter;
  width: 338px;
  height: 100%;
  border-right: 1px solid #DFE1E5;
  overflow-y: scroll;

  padding-right: 70px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (width <= 428px) {
    display: ${(props) => props.$selectedConversation === null ? "block" : "none"};
    width: 100%;
    padding-right: 0;
    border-right: none;
  }
`;

type ConversationProps = {
  onClick: () => void;
  selectedConversation: number | null;
  conversation: IConversation;
}

const Conversation = ({ selectedConversation, onClick, conversation }: ConversationProps) => {
  const dispatch = useAppDispatch();
  if (conversation.isDeleting) {
    return (
      <DeletedConversationStyle>
        <DeletedConversationTitle>Deleted</DeletedConversationTitle>
        <UndoButton onClick={() => {
          clearTimeout(conversation.isDeleting);
          dispatch(undoConversationDelete(conversation.id));
        }}>
          undo
        </UndoButton>
      </DeletedConversationStyle>
    );
  }

  return (
    <ConversationStyle
      onClick={onClick}
      $selectedConversation={selectedConversation}
      $conversation={conversation}
    >
      <ConversationAvatar src={conversation.avatar} />
      <ConversationInfo>
        <ConversationHeader>
          <ConversationTitle>
            {conversation.title}
          </ConversationTitle>
          <ConversationDate date={
            conversation.messages.length !== 0 ?
              new Date(conversation.messages[conversation.messages.length - 1].time)
              : undefined
          } />
        </ConversationHeader>
        <ConversationLastMessage
          message={conversation.messages.at(conversation.messages.length - 1)}
          read={conversation.read} />
      </ConversationInfo>
    </ConversationStyle>
  );
}

const DeletedConversationStyle = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #292F3F;

  padding: 18px 16px;
  border-radius: 8px;

  margin: 8px 0 8px 0;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeletedConversationTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: white;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const UndoButton = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: white;

  background-color: #292F3F;
  border: none;
  border-radius: 6px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

type ConversationDateProps = {
  date: Date | undefined;
}

const ConversationDate = ({ date }: ConversationDateProps) => {
  return (
    <ConversationDateStyle>
      {
        date === undefined ? "" :
          moment(date).format("D MMM")
      }
    </ConversationDateStyle>
  );
}

type ConversationStyleProps = {
  $selectedConversation: number | null;
  $conversation: IConversation;
}

const ConversationStyle = styled.div<ConversationStyleProps>`
  font-family: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${(props) => {
    const { $selectedConversation, $conversation } = props;
    const thisConversationIsSelected = $selectedConversation === $conversation.id;
    return thisConversationIsSelected ? "#F0F3F5" : "white";
  }};

  padding: 10px;
  border-radius: 8px;
  gap: 10px;

  margin: 1px 0 1px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: #F0F3F5;
    cursor: pointer;
  }
`;

const ConversationAvatar = styled.img`
  min-width: 46px;
  min-height: 46px;
  max-width: 46px;
  max-height: 46px;
  border-radius: 6px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

type ConversationLastMessageProps = {
  message: IMessage | undefined;
  read: boolean;
}

const ConversationLastMessage = ({ message, read }: ConversationLastMessageProps) => {
  return (
    <ConversationLastMessageStyle $read={read}>
      {message === undefined ? "" : (
        message.type === "text" ? message.content : (<ImageSvg />)
      )}
    </ConversationLastMessageStyle>
  );
}

type ConversationLastMessageStyleProps = {
  $read: boolean;
}

const ConversationLastMessageStyle = styled.div<ConversationLastMessageStyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: ${(props) => props.$read === false ? "500" : "300"};
  font-size: 14px;
  color: #485562;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ConversationInfo = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ConversationHeader = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ConversationTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #292F3F;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ConversationDateStyle = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #292F3F;
`;

type ChatProps = {
  $selectedConversation: number | null;
}

const Chat = styled.div<ChatProps>`
  display: ${(props) => props.$selectedConversation !== null ? "flex" : "none"};
  font-family: 'Inter', sans-serif;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  width: calc(100% - 338px);
  height: 100%;

  padding-left: 80px;

  @media (width <= 428px) {
    width: 100%;
    padding-left: 0;
  }
`;

type SelectedConversationProps = {
  $selectedConversation: number | null;
}

const SelectConversation = styled.div<SelectedConversationProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #485562;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% - 338px);
  height: 100%;

  padding-left: 80px;

  @media (width <= 428px) {
    display: ${(props) => props.$selectedConversation !== null ? "flex" : "none"};
  }
`;

type ChatHeaderProps = {
  ChatHeaderStyle: IStyledComponent<any, any>;
  selectedConversation: IConversation | undefined;
  optimisticDelete: (id: number) => void;
}

const ChatHeader = ({ ChatHeaderStyle, selectedConversation, optimisticDelete }: ChatHeaderProps) => {
  return (
    <ChatHeaderStyle $selectedConversation={selectedConversation}>
      <ChatAvatar src={selectedConversation?.avatar} />
      <ChatInfo>
        <ChatTitle>
          {selectedConversation?.title}
        </ChatTitle>
        <ChatSubtitle>
          {selectedConversation?.subtitle}
        </ChatSubtitle>
      </ChatInfo>
      <ChatActions>
        <ChatAction onClick={() => optimisticDelete(selectedConversation?.id ?? -1)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.37419H13.5341C13.085 3.37419 12.6875 3.08752 12.5458 2.66252L12.2825 1.8717C12.0834 1.27504 11.5275 0.875 10.8992 0.875H7.09998C6.47164 0.875 5.91583 1.27502 5.71666 1.87252L5.45335 2.66252C5.31168 3.08835 4.91415 3.375 4.46499 3.375H1.5C1.155 3.375 0.875 3.655 0.875 4C0.875 4.345 1.155 4.625 1.5 4.625H2.58164L3.22084 14.2083C3.33 15.8442 4.69917 17.125 6.33917 17.125H11.6616C13.3008 17.125 14.6708 15.8433 14.78 14.2083L15.4192 4.625H16.5C16.845 4.625 17.125 4.345 17.125 4C17.125 3.655 16.845 3.37419 16.5 3.37419ZM6.90248 2.2667C6.93081 2.1817 7.00998 2.12419 7.09998 2.12419H10.8992C10.9892 2.12419 11.0683 2.18172 11.0967 2.26589L11.36 3.0567C11.3966 3.1667 11.4425 3.27254 11.4942 3.37337H6.50417C6.55584 3.27171 6.60168 3.16672 6.63835 3.05589L6.90248 2.2667ZM13.5317 14.1242C13.4667 15.1059 12.645 15.8742 11.6608 15.8742H6.33836C5.35503 15.8742 4.53248 15.1059 4.46748 14.1242L3.83419 4.62419H4.46499C4.55415 4.62419 4.64167 4.61333 4.72917 4.60333C4.76417 4.60917 4.79585 4.62419 4.83252 4.62419H13.1659C13.2025 4.62419 13.2342 4.60917 13.2692 4.60333C13.3567 4.61333 13.4433 4.62419 13.5333 4.62419H14.1642L13.5317 14.1242ZM11.2917 8.16585V12.3325C11.2917 12.6775 11.0117 12.9575 10.6667 12.9575C10.3217 12.9575 10.0417 12.6775 10.0417 12.3325V8.16585C10.0417 7.82085 10.3217 7.54085 10.6667 7.54085C11.0117 7.54085 11.2917 7.82085 11.2917 8.16585ZM7.95833 8.16585V12.3325C7.95833 12.6775 7.67833 12.9575 7.33333 12.9575C6.98833 12.9575 6.70833 12.6775 6.70833 12.3325V8.16585C6.70833 7.82085 6.98833 7.54085 7.33333 7.54085C7.67833 7.54085 7.95833 7.82085 7.95833 8.16585Z" fill="#292F3F" />
          </svg>
        </ChatAction>
      </ChatActions>
    </ChatHeaderStyle>
  );
}

const ChatHeaderStyle = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 18px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (width <= 428px) {
    display: none;
  }
`;

type NavbarChatHeaderStyleProps = {
  $selectedConversation: number | null;
}

const NavbarChatHeaderStyle = styled(ChatHeaderStyle) <NavbarChatHeaderStyleProps>`
  padding: 0 0 0 10px;
  @media (width <= 428px) {
    display: ${(props) => props.$selectedConversation !== undefined ? "flex" : "none"};
  }
`;


const ChatActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding-top: 10px;
`;

const ChatAction = styled.div`
  border-radius: 6px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #F0F3F5;
    cursor: pointer;
  }
`;

const ChatAvatar = styled.img`
  min-width:  36px;
  min-height: 36px;
  max-width:  36px;
  max-height: 36px;
  border-radius: 6px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

const ChatInfo = styled.div`
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #292F3F;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatSubtitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #485562;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type ChatBodyProps = {
  selectedConversation: number | null;
}
const ChatBody = ({ selectedConversation }: ChatBodyProps) => {
  const conversations = useAppSelector((state) => state.messages.conversations);
  const convo = conversations.find((conversation) => conversation.id === selectedConversation);
  // reverse messages
  const messages = [
    ...convo?.messages ?? []
  ].reverse();

  return (
    <ChatBodyStyle>
      {messages.map((message, index) => (
        <div
          key={index}
        >
          <ChatMessage
            message={message}
            showTime={
              index === 0 ||
              messages.at(index - 1)?.fromMe !== message.fromMe ||
              moment(message.time).diff(moment(messages.at(index - 1)?.time), "minutes") > 5
            }
          />
          {/* Date separator if day changes */}
          {(moment(message.time).dayOfYear() !== moment(messages.at(index - 1)?.time).dayOfYear() && index !== 0) && (
            <ChatDateSeparator>
              {moment(messages.at(index - 1)?.time).format("MMM D")}
            </ChatDateSeparator>
          )}
        </div>
      ))}
    </ChatBodyStyle>
  );
}

type ChatMessageProps = {
  message: IMessage;
  showTime: boolean;
}

const ChatMessage = ({ message, showTime }: ChatMessageProps) => {
  return (
    <ChatMessageStyle $message={message}>
      {message.type === "text" ? (
        <ChatTextMessageContent $message={message}>
          {message.content}
        </ChatTextMessageContent>
      ) : (
        <ChatImageMessageContent src={message.content} alt="message" />
      )}
      {showTime && (
        <ChatMessageTime $message={message}>
          {moment(message.time).format("h:mm A")}
        </ChatMessageTime>
      )}
    </ChatMessageStyle>
  );
}

type ChatMessageStyleProps = {
  $message: IMessage;
}

const ChatMessageStyle = styled.div<ChatMessageStyleProps>`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$message.fromMe ? "flex-end" : "flex-start"};
  width: 100%;
  padding: 0 0 4px 0;
  overflow-wrap: break-word;
`;

const ChatDateSeparator = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #485562;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0 20px 0;
`;

const ChatTextMessageContent = styled.div<ChatMessageStyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.$message.fromMe ? "white" : "#292F3F"};
  background-color: ${(props) => props.$message.fromMe ? "#292F3F" : "#F0F3F5"};
  border-radius: 8px;
  padding: 15px;
  max-width: 330px;
`;

const ChatImageMessageContent = styled.img`
  min-width:  202px;
  max-width:  202px;
  border-radius: 8px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

const ChatMessageTime = styled.div<ChatMessageStyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #485562;

  padding: 3px 0 10px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChatBodyStyle = styled.div`
  font-family: Inter;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  /* Align to bottom */
  display: flex;
  flex-direction: column-reverse;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const ChatFooter = styled.div`
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  padding: 15px 0;
`;

const ChatInput = styled.textarea`
  flex: 1;

  background-color: #F0F3F5;
  color: #292F3F;

  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 15px;

  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;

  &::placeholder {
    font-weight: 300;
    color: #485562;
  }

  resize: none;
  outline: none;

  min-height: 40px;
  max-height: 75px;
`;

type ChatSendButtonProps = {
  $variant: "text" | "image";
}

const ChatSendButton = styled.button<ChatSendButtonProps>`
  min-width:  47px;
  max-width:  47px;
  min-height: 47px;
  max-height: 47px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;
  outline: none;

  background-color: ${(props) => props.$variant === "text" ? "#292F3F" : "#F0F3F5"};
  color: ${(props) => props.$variant === "text" ? "white" : "#292F3F"};

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Automatically resize textarea to fit content
 */
function autoGrow(element: HTMLTextAreaElement) {
  element.style.height = "1px";
  element.style.height = (element.scrollHeight) + "px";
}

export default Messages;
