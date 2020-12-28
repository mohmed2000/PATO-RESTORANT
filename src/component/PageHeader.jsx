export default function PageHeader(props) {
  const { title } = props;
  return (
    <div className="ReservationImg ">
      <div className="layer0">
        <h2 className="ReservationTit">{title}</h2>
      </div>
    </div>
  );
}
