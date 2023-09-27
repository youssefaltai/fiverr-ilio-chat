import {
  useAppDispatch,
  useAppSelector
} from "~/features/hooks";
import {
  markConversationForDeletion,
  deleteConversation,
  unselectConversation,
} from "~/features/messages.slice";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title.styled";
import Container from "./components/Container.styled";
import ConversationsList from "./components/ConversationsList/ConversationsList";
import SelectConversation from "./components/Chat/SelectedConversation.styled";
import Chat from "./components/Chat/Chat";
import Main from "./components/Main.styled";
import Wrapper from "./components/Wrapper.styled";

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
          <ConversationsList />
          {
            selectedConversation === undefined ? (
              <SelectConversation $selectedConversation={selectedConversation}>
                Select a conversation to start messaging
              </SelectConversation>
            ) : (
              <Chat onDeleteClicked={onDeleteClicked} />
            )
          }
        </Main>
      </Container >
    </Wrapper>
  );
}

export default Messages;
