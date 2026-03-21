"use client";

import React, { useEffect } from 'react'

const Page = () => {
    useEffect(() => {
        console.log("Where am I rendered?")
    }, []);

    //const data = db.select().from(videos).where(eq(videos.id, "123"));
  return (
    <div>Feed Page</div>
  )
}

export default Page