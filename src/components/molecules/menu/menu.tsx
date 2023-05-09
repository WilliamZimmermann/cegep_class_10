import MenuItem from "@/components/atoms/menu-item/menu-item";

interface MenuProps {
  currentPage: string;
}

/* eslint-disable @next/next/no-img-element */
export default function Menu(props: MenuProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Ma page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <MenuItem
                label="Home"
                linkTo="/"
                isActive={props.currentPage === "/"}
              />
              <MenuItem
                label="About"
                linkTo="/about"
                isActive={props.currentPage === "/about"}
              />
              <MenuItem
                label="Projects"
                linkTo="/projects"
                isActive={props.currentPage === "/projects"}
              />
              <MenuItem
                label="Contact"
                linkTo="/contact"
                isActive={props.currentPage === "/contact"}
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
