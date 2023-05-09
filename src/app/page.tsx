/* eslint-disable @next/next/no-img-element */
import Card from "@/components/molecules/card/card";
import styles from "./page.module.css";
import Menu from "@/components/molecules/menu/menu";
import HeaderTitle from "@/components/atoms/header-title/header-title";

export default function Home() {
  return (
    <>
      <Menu currentPage="/" />
      <main className={styles.main}>
        <HeaderTitle
          title="Welcome to my Home Page!"
          subtitle="This is my page"
        />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Card
                title="Card title"
                imageSrc="/assets/dog.jpg"
                content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
                buttonText="Visit my Project"
                buttonUrl="/about"
              />
            </div>
            <div className="col-4">
              <Card
                title="Card title 2"
                imageSrc="/assets/woman.jpg"
                content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
                buttonText="Visit my Other Project"
                buttonUrl="/about"
              />
            </div>
            <div className="col-4">
              <Card
                title="Card title 3"
                imageSrc="/assets/man.jpg"
                content="Some quick example text to build on the card title and make
                    up the bulk of the cards content."
                buttonText="Visit my Other Project"
                buttonUrl="/about"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
