import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Java',
    Svg: require('@site/static/img/icons/java.svg').default,
    description: (
      <>
        Learn the very basics using Java.
        Create a basic 2D game engine using java starting from a simple <code>hello-world</code> project.
      </>
    )
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/icons/Github.svg').default,
    SvgColor: "white",
    description: (
      <>
      Learn GitHub source control. How to store, manage and branch your projects. We will use <code>GitBash</code> and/or <code>SourceTree</code> to manage your Git repositories.
      </>
    )
  },
  {
    title: 'C++',
    Svg: require('@site/static/img/icons/C.svg').default,
    description: (
      <>
        Learn C++ development. How to manage memory, more complex computer architecture and much more!
      Create a 3D game engine using <code>DirectX</code> and <code>Vulkan</code>.
      </>
    )
  },
  {
    title: 'Visual Studio',
    Svg: require('@site/static/img/icons/visual_studio.svg').default,
    description: (
      <>
      Learn the Visual Studio IDE. General project management and config leading to more advanced features and debugging pratices.
      </>
    )
  },
  {
    title: 'Unreal Engine 5',
    Svg: require('@site/static/img/icons/unreal_engine.svg').default,
    SvgColor: "white",
    description: (
      <>
      Learn how to make games in Unreal Engine 5. How to structure a game project, create re-usable assets and plugins and learn the latest game development practices like <code>data driven development</code>.
      </>
    )
  },
  {
    title: 'Perforce',
    Svg: require('@site/static/img/icons/PerforceIcon.svg').default,
    SvgColor: "lightblue",
    description: (
      <>
      Learn how to use Perforce source control. How to host and manage your own Perforce server such as shelves, streams, tools etc.
      </>
    )
  },
];

function Feature({Svg, SvgColor, title, description}) {
  
  const svgStyle = {
    fill: SvgColor // Assuming the SvgColor is the color you want to apply
  };
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" style={svgStyle}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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