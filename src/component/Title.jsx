export default function BlackTitle(props) {
  const { secTit, firstTit, className } = props;
  return (
    <div>
      <h6 className="red-tit">{secTit}</h6>
      <h3 className={className}>{firstTit}</h3>
    </div>
  );
}
