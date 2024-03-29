import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/homepage/homepageList';

import Heading from '@theme/Heading';
import styles from './styles.module.css';

const HomepageTextSections = [
    {
        title: 'Welcome',
        description: (
            <>
            Welcome to the GameDevForge!
            <br></br>
            I'm Lewis a Senior Gameplay Developer currently working at BULKHEAD.
            I have put together this learning resource for both aspiring and professional game developers.
            Resources range from basic to advanced topics.
            <br></br>
            <br></br>
            <code>See the modules page</code>
            </>
        )
    }
];

function HomepageTextSection({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
        </header>
    );
}

function HomepageSections() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <section className={styles.homepageSection}>
            { HomepageTextSections.map((props, idx) => ( <HomepageTextSection key={idx} {...props} />)) }
        </section>
    );
}

export default function HomePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome`}
            description="">
            <HomepageHeader/>
            <main>
                <HomepageSections/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}