import React from 'react'

interface PageProps {
  params: Promise<{videoId: string}>
}

const page = async ({ params }: PageProps) => {
  console.log("Server Components");
  
  const { videoId } = await params;

  return (
    <div>Video Id : {videoId}</div>
  )
}

export default page