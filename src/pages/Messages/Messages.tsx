import {
  useAppDispatch,
  useAppSelector
} from "~/features/hooks";
import {
  markConversationForDeletion,
  deleteConversation,
  unselectConversation,
} from "~/features/messages.slice";
import Wrapper from "./components/Wrapper.styled";
import Container from "./components/Container.styled";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title.styled";
import Main from "./components/Main.styled";
// import SelectConversation from "./components/Chat/SelectedConversation.styled";
import { Suspense, lazy } from "react";
import ConversationsListLoading from "./components/ConversationsList/ConversationsList.loading";
import ChatLoading from "./components/Chat/Chat.loading";

const SelectConversation = lazy(() => import("./components/Chat/SelectedConversation.styled"));
const ConversationsList = lazy(() => import("./components/ConversationsList/ConversationsList"));
const Chat = lazy(() => import("./components/Chat/Chat"));

const pageTitle = "Messages";

const Messages = () => {
  const selectedConversation = useAppSelector((state) => state.messages.selectedConversation);
  const conversations = useAppSelector((state) => state.messages.conversations);
  const dispatch = useAppDispatch();

  const onDeleteClicked = (id: number) => {
    dispatch(unselectConversation());

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

  return (
    <Wrapper>
      <Container>
        <Navbar
          title={pageTitle}
          onDeleteClicked={onDeleteClicked}
        />
        <Title>{pageTitle}</Title>

        <Main>
          <Suspense fallback={<ConversationsListLoading />}>
            <ConversationsList />
          </Suspense>
          {
            selectedConversation === undefined ? (
              <Suspense fallback={<ChatLoading />}>
                <SelectConversation $selectedConversation={selectedConversation}>
                  Select a conversation to start messaging
                </SelectConversation>
              </Suspense>
            ) : (
              <Suspense fallback={<ChatLoading />}>
                <Chat onDeleteClicked={onDeleteClicked} />
              </Suspense>
            )
          }
        </Main>
      </Container >
    </Wrapper>
  );
}

export default Messages;
