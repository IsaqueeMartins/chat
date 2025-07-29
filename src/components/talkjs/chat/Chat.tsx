"use client";

import { Session, Chatbox } from "@talkjs/react";
import { useCallback } from "react";
import Talk from "talkjs";

function Chat() {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "isaque_id",
        name: "Isaque",
        email: "isaque@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-1.jpg",
        welcomeMessage: "Aiiiin",
      }),
    []
  );
  const syncConversation = useCallback((session: any) => {
    const conversation = session.getOrCreateConversation("new_conversation");

    const other = new Talk.User({
      id: "frank",
      name: "Frank",
      email: "frank@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Hey, how can I help?",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <Session appId="tbQcMKC6" syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "500px" }}
      ></Chatbox>
    </Session>
  );
}

export default Chat;
