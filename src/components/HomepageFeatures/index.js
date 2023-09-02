import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Giving Back",
    Svg: require("@site/static/img/undraw_programming.svg").default,

    description: (
      <>
        My docs stands as a beacon of knowledge, representing my way of
        contributing to the community documenting the creative processes and
        projects I've undertaken.
      </>
    ),
  },
  {
    title: "Sharing ",
    Svg: require("@site/static/img/sharing.svg").default,
    description: (
      <>
        The <code>code</code> and ideas are open for your use and share. Feel
        free to copy, paste, or adapt them as you see fit. Credit would be
        appreciated 😉
      </>
    ),
  },
  {
    title: "Powered by Docusaurus & React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Built using Docusaurus, the remarkable documentation tool, making it
        efforless to make a documentation site this easily,
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
