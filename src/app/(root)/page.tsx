
import VideoCallApp from "@/components/VideoCall";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import EditorApp from "./collab/page";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorApp />
          <OutputPanel />
          <VideoCallApp />
        </div>
      </div>
    </div>
  );
}
