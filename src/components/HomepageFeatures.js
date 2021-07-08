import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible Permission Models',
    description: (
      <>
        ABAC, RBAC, and ACL permission models are all supported. Hierarchical
        permission models are also supported. Take a look at the <a href="./docs/overview/examples/examples-intro">Examples</a>.
      </>
    ),
  },
  {
    title: 'Built to Scale',
    description: (
      <>
        Inspired by Google Zanzibar - "Google's Consistent, Global Authorization System", the Authorizer platform
        is built with scale in mind. Learn more about the <a href="./docs/overview/architecture">Architecture</a>.
      </>
    ),
  },
  {
    title: 'High Performance',
    description: (
      <>
        The platform is optimized to reduce tail latency with a variety of clever tricks. The
        goal is to support a 99th percentile latency SLA of 120ms or less. See the 
        <a href="./docs/performance"> Performance</a> documentation for more info.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
