"use client";
import dynamic from 'next/dynamic'
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
// import { CollaborativeEditor } from "./_components/Editor";
// import NewCollaborativeEditor from "./_components/NewEditor";
const NewCollaborativeEditor = dynamic(
  () => import('./_components/NewEditor'),
  { ssr: false } // This ensures the component only loads on the client side
)

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