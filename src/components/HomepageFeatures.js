import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible Permission Models',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ABAC, RBAC, and ACL permission models are all supported. Hierarchical
        permission models are also supported. Take a look at the <a href="./docs/overview/examples/examples-intro">Examples</a>.
      </>
    ),
  },
  {
    title: 'Built to Scale',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Inspired by Google Zanzibar - "Google's Consistent, Global Authorization System", the authorizer platform
        is built with scale in mind. Learn more about the <a href="./docs/overview/architecture">Architecture</a>.
      </>
    ),
  },
  {
    title: 'High Performance',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The platform is optimized to reduce tail latency and is capable of supporting a 99th percentile
        latency SLA of 120ms or less. See the Performance page in the docs for more info.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
