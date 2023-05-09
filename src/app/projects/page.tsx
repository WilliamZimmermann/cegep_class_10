import HeaderTitle from "@/components/atoms/header-title/header-title";
import Card from "@/components/molecules/card/card";
import Menu from "@/components/molecules/menu/menu";

export default function Projects() {
  return (
    <>
      <Menu currentPage="/projects" />
      <HeaderTitle title="Projects" subtitle="Take a look at my projects" />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card
              title="Project 1"
              imageSrc="/assets/dog.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Project"
              buttonUrl="/projects/1"
            />
          </div>
          <div className="col-4">
            <Card
              title="Project 2"
              imageSrc="/assets/woman.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Other Project"
              buttonUrl="/projects/2"
            />
          </div>
          <div className="col-4">
            <Card
              title="Project 3"
              imageSrc="/assets/man.jpg"
              content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
              buttonText="Visit my Other Project"
              buttonUrl="/projects/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
