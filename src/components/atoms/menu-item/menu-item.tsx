/* eslint-disable @next/next/no-img-element */

export interface MenuItemProps {
  label: string;
  linkTo: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href={props.linkTo}>
          {props.label}
        </a>
      </li>
    </>
  );
}
