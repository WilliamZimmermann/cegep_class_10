interface CardProps {
  title: string;
  imageSrc: string;
  content: string;
  buttonText: string;
  buttonUrl: string;
}

export default function Card(props: CardProps) {
  return (
    <>
      <div className="card">
        <img src={props.imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href={props.buttonUrl} className="btn btn-primary">
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
