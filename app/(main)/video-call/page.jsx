// import VideoCall from "./video-call-ui";
import React from "react";
import VideoCall from "./_components/video-call";


export default async function VideoCallPage({ searchParams }) {
  const { sessionId, token } = await searchParams;

  return (<div className="my-20">

<VideoCall sessionId={sessionId} token={token} />;
  </div>);
  
  

}