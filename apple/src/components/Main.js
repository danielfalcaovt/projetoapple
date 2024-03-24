import { useState } from "react";
import siteData from "../siteData";

export default function Main() {
    const [data, setData] = useState(siteData);

  return (
    <main>
      <section id="first-section">
        {data.map((section) => {
          return (
            <article key={section.section} id={section.section}>
              <h1>{section.h1}</h1>
              <h2>{section.h2}</h2>
              <a href="https://www.apple.com/">
                Learn more <span>{">"}</span>
              </a>
              <img src={section.img} alt="iphone 15" />
            </article>
          );
        })}
      </section>
    </main>
  );
}
