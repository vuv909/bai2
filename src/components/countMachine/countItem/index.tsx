type Props = {
  value: number;
};

export default function CountItemComponent(props: Props) {
  return (
    <div className="text-center">
      <h1>{props.value}</h1>
    </div>
  );
}
