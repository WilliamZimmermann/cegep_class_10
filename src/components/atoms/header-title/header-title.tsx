export interface HeaderTitleProps {
  title: string;
  subtitle?: string;
}

export default function HeaderTitle(props: HeaderTitleProps) {
  return (
    <>
      <div className="container mt-3">
        <h1>{props.title}</h1>
        {props.subtitle && <p>{props.subtitle}</p>}
      </div>
    </>
  );
}
