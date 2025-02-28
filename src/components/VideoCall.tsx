"use client";

import {
  CallControls,
  CallingState,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  Call,
  ParticipantView
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import { useEffect, useState } from 'react';

export default function VideoCallApp() {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    const apiKey = 'mmhfdzb5evj2';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NvdW50X0Rvb2t1IiwidXNlcl9pZCI6IkNvdW50X0Rvb2t1IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3NDA3NDA5NjMsImV4cCI6MTc0MTM0NTc2M30.gnwXxGZtpP481SBFfVqxc1ZbA_Emfeop2j1Q6ggfHJc';
    const userId = 'Count_Dooku';
    const callId = 'Isma1TibxaJq';

    const user = {
      id: userId,
      name: 'Sanjay',
      image: 'https://getstream.io/random_svg/?id=oliver&name=Sanjay',
    };

    const videoClient = new StreamVideoClient({ apiKey, user, token });
    const videoCall = videoClient.call('default', callId);
    
    setClient(videoClient);
    setCall(videoCall);
    
    // Join the call
    videoCall.join({ create: true });

    // Cleanup on unmount
    return () => {
      if (videoCall) {
        videoCall.leave();
      }
    };
  }, []);

  if (!client || !call) {
    return <div>Loading video client...</div>;
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CustomVideoLayout />
      </StreamCall>
    </StreamVideo>
  );
}

export const CustomVideoLayout = () => {
  const { useCallCallingState, useLocalParticipant, useRemoteParticipants } = useCallStateHooks();
  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
  
  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  const allParticipants = [...remoteParticipants];
  if (localParticipant) {
    allParticipants.unshift(localParticipant);
  }

  return (
    <StreamTheme >
      <div className=" rounded-lg flex h-full w-[400px] bg-[#13141C] overflow-hidden">
        <div className="flex flex-col items-start p-4 space-y-4 overflow-y-auto">
          {allParticipants.map((participant) => (
            <div className="w-[300px] h-[300px]" key={participant.userId}>
              <ParticipantView key={participant.userId} participant={participant} />
            </div>
          ))}
        <div className="className='p-0 m-0">
          <CallControls />
        </div>
        </div>
      </div>
    </StreamTheme>
  );
};
