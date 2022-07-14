import React from "react";
import Image from "./images/thumbnail.jpeg";

export default function AboutMe() {
  return (
    <>
      <br></br>
      <main>
        <h2>Ted Glynn</h2>
        <section>
          <img src={Image} />
          <div>
            <h4 className="smooth">"Smooth Brain Boy"</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quae saepe, itaque fugiat, consequatur voluptas, sint iste maxime
              eligendi ut placeat libero officiis tempore nostrum numquam quod
              quo mollitia officia?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque quae saepe, itaque fugiat, consequatur
              voluptas, sint iste maxime eligendi ut placeat libero officiis
              tempore nostrum numquam quod quo mollitia officia?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Neque quae saepe,
              itaque fugiat, consequatur voluptas, sint iste maxime eligendi ut
              placeat libero officiis tempore nostrum numquam quod quo mollitia
              officia?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque quae saepe, itaque fugiat, consequatur voluptas, sint iste
              maxime eligendi ut placeat libero officiis tempore nostrum numquam
              quod quo mollitia officia?
            </p>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}
