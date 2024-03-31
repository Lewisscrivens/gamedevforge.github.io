import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import TextTooltip from '@site/src/components/text/textTooltip/textTooltip';

const FeatureList = [
  {
    title: 'Java',
    Svg: require('@site/static/img/icons/java.svg').default,
    description: (
      <>
      Create a basic 2D game engine using java starting from a simple <TextTooltip text="hello-world"/> project.
      </>
    )
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/icons/Github.svg').default,
    SvgColor: "white",
    description: (
      <>
      How to store, manage and branch your projects. We will use <TextTooltip text="GitBash"/> and/or <TextTooltip text="SourceTree"/> to manage your Git repositories.
      </>
    )
  },
  {
    title: 'C++',
    Svg: require('@site/static/img/icons/C.svg').default,
    description: (
      <>
      How to manage memory, computer architecture and much more!
      Create a 3D game engine using <TextTooltip text="DirectX"/> and <TextTooltip text="Vulkan"/>.
      </>
    )
  },
  {
    title: 'Visual Studio',
    Svg: require('@site/static/img/icons/visual_studio.svg').default,
    description: (
      <>
      General project management and config leading to more advanced features and <TextTooltip text="Debugging"/> pratices.
      </>
    )
  },
  {
    title: 'Unreal Engine 5',
    Svg: require('@site/static/img/icons/unreal_engine.svg').default,
    SvgColor: "white",
    description: (
      <>
      How make games, create re-usable assets and plugins using the latest game development practices like <TextTooltip text="Data Driven Development"/>.
      </>
    )
  },
  {
    title: 'Perforce',
    Svg: require('@site/static/img/icons/PerforceIcon.svg').default,
    SvgColor: "lightblue",
    description: (
      <>
      How to host and manage your own Perforce server such as shelves, streams, etc.
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