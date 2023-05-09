/* eslint-disable @next/next/no-img-element */

export interface MenuItemProps {
  label: string;
  linkTo: string;
  isActive: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <>
      <li className="nav-item">
        <a
          className={`nav-link ${props.isActive ? "active" : ""}`}
          aria-current="page"
          href={props.linkTo}
        >
          {props.label}
        </a>
      </li>
    </>
  );
}
