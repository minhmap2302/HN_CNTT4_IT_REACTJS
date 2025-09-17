// import React from 'react'

import { useParams } from "react-router-dom";

export default function Student() {
  const name = useParams();
  return <div>Name: {name.name} </div>;
}
