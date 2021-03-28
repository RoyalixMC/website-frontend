import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const products = [
    {
        title: 'SuperiorPrison',
        imageUrl: 'img/prison_flat.png',
        purchaseUrl: "https://www.spigotmc.org/resources/%E2%9A%A1%EF%B8%8F-superiorprison-%E2%9A%A1%EF%B8%8F-the-first-ever-prison-core-%E2%9A%A1%EF%B8%8F-backpacks-bombs.79633/",
        wikiUrl: "/docs/",
        description: (
            <>
                All-in-one prison core, first of it's kind! Rankups, mines, prestiges, shops and lots of perks are inside! The core is optimized and it's designed to fit your needs.
            </>
        ),
    },
    {
        title: 'BossesExpansion',
        imageUrl: 'img/be_flat.png',
        purchaseUrl: "https://www.spigotmc.org/resources/%E2%9A%A1%EF%B8%8F-superiorprison-%E2%9A%A1%EF%B8%8F-the-first-ever-prison-core-%E2%9A%A1%EF%B8%8F-backpacks-bombs.79633/",
        wikiUrl: "/docs/",
        description: (
            <>
                An expansion to your already existing bosses plugins! Rewards, timed spawners, screoboard & more!
            </>
        ),
    }
];

function createButton(text, url) {
    return (
        <div className={styles.special__button}>
            <a href={url}>
                <span className={clsx(styles.special__button__text)}>{text}</span>
            </a>
        </div>
    )
}

function Product({imageUrl, title, description, purchaseUrl, wikiUrl}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col product col--4', styles.feature)} >
            <div className="product__info">
                {imgUrl && (
                    <div className="text--center">
                        <img className={styles.productImage} src={imgUrl} alt={title}/>
                    </div>
                )}

                <h3>{title}</h3>
                <p className={styles.product__description}>{description}</p>
            </div>

            <div className="row buttons">
                {createButton("PURCHASE", purchaseUrl)}
                {createButton("WIKI", wikiUrl)}
            </div>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title="Royalix | Minecraft Plugins"
            description="">
            <main>
                {products && products.length > 0 && (
                    <section className={styles.products}>
                        <div className="container">
                            <div className="text--center product__title">
                                <h1 className="products__title__text">Here's our public products</h1>
                            </div>
                            <div className="row">
                                {products.map((props, idx) => (
                                    <Product key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
