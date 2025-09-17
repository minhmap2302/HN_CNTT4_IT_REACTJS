// import React from 'react'

import { useParams } from "react-router-dom";

export default function HomePage() {
  const userid = useParams();

  return (
    <div>
      HomePage
      <p>User: {userid.user}</p>
    </div>
  );
}
