import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.first}>
          <h1 className={styles.pageTitle}>
            Find out when your webapp breaks{" "}
            <span className={styles.exclaim}>without the noise and toil.</span>
          </h1>
          <div className={styles.subtitle}>
            Getting actionable monitoring shouldn't take a full time job. Get
            alerted when and only when your webapp breaks.
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.mainCta}
              target="_blank"
              href="https://app.catalystmonitor.com"
            >
              Get it now!
            </a>
            <a className={styles.mainDocs} href="/docs">
              See the Docs
            </a>
          </div>
        </div>
        <img
          className={styles.mainPreviewScreen}
          src="/img/catalyst_queries.png"
        />
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div className={`${styles.card} ${styles.firstCard}`}>
              <div className={styles.emoji}>📉</div>
              <div>
                <h2>Not every breakage is the same.</h2>
                <p>
                  Is it a non-issue or an emergency? By providing error rates
                  per-endpoint and per-page, you'll know exactly where and how
                  severe your breakage is.
                </p>
              </div>
            </div>
            <div className={`${styles.detailsScreen} ${styles.firstScreen}`}>
              <img src="/img/catalyst_queries.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🎛️</div>
              <div>
                <h2>Find the commonalities.</h2>
                <p>
                  What happened when things broke? Break down your errors and
                  find the common link.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_breakdowns.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🐞</div>
              <div>
                <h2>Debug a session across the stack</h2>
                <p>
                  Once you've identified a breakage, find out exactly what
                  happened before and after.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_sessions.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🔔</div>
              <div>
                <h2>Configurable alerting</h2>
                <p>
                  Configure your alerting so you that when you get alerted, you
                  know it's worth looking into.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_alerts.png" />
            </div>
          </div>
        </div>
        <div className={styles.bottomCtaContainer}>
          <div className={styles.clientLibText}>
            <h2>Don't change how you code or work.</h2>
            <p>
              Use one of our client libraries, and you'll immediately get
              actionable alerting based on your existing logs and errors - no
              long setup process required.
            </p>
          </div>
          <div className={styles.clientLibs}>
            <a href="/docs/install/nextjs">
              <div>Next.js</div>
              <div>(App Router)</div>
            </a>
            <a href="/docs/install/express">Express</a>
            <a href="/docs/install/react-router">
              <div>React Router</div>
              <div>(v6)</div>
            </a>
            <a href="/docs/install/other-node">
              <div>Other Node.JS</div>
              <div>Frameworks</div>
            </a>
            <a href="/docs/install/other-web">
              <div>Other Browser</div>
              <div>Frameworks</div>
            </a>
          </div>

          <div className={styles.bottomCtas}>
            <a
              className={styles.bottomCta}
              target="_blank"
              href="https://app.catalystmonitor.com"
            >
              Get it now!
            </a>
            <a className={styles.bottomDocs} href="/docs">
              See the Docs
            </a>
          </div>
          <div
            className={styles.demoContainer}
            dangerouslySetInnerHTML={{
              __html:
                '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/34be0477468f435ca1db331af27bab33?sid=2ea4f726-14f4-489b-99bf-50da9b280a4e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
