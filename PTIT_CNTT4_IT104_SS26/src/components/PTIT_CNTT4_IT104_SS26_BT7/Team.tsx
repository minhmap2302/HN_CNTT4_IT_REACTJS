import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();

  return (
    <div>
      <h2>Chi tiết Team</h2>
      <p>Team ID: {teamId}</p>
    </div>
  );
}
