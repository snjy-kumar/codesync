"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
// import { CollaborativeEditor } from "./_components/Editor";
import NewCollaborativeEditor from "./_components/NewEditor";

export default function EditorApp() {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_aAXO5g1ZQ67pu36GUGzzxSiTwn8-SSw6hpYzVUsW5t_wMQsXPAhWpCJbEZqIIxsZ"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <NewCollaborativeEditor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}