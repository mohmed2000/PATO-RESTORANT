import { useHistory } from "react-router-dom";
export default function Reservation() {
  const history = useHistory();
  const goReservation = () => {
    history.push("/Reservation");
  };
  return (
    <div>
      <center>
        <h1>Reservation</h1>
      </center>
    </div>
  );
}
