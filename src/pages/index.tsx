import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.first}>
          <h1 className={styles.pageTitle}>
            Spend <span className={styles.exclaim}>more time building</span> and
            <br />
            less time keeping your webapp up
          </h1>
          <div className={styles.subtitle}>
            Worry not, Catalyst will tell you when your webapp breaks and help
            you fix it
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.mainCta}
              href="https://app.catalystmonitor.com"
            >
              Get it now!
            </a>
            <a
              className={styles.mainDocs}
              target="_blank"
              href="https://calendly.com/chat-bill-liu/catalyst-intro"
            >
              Let's Talk
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
                <h2>Save time and lower stress</h2>
                <p>
                  Not every error is an emergency. Catalyst will tell you
                  exactly when and how much you should care through error rates
                  per-endpoint and per-page.
                </p>
              </div>
            </div>
            <div className={`${styles.detailsScreen} ${styles.firstScreen}`}>
              <img src="/img/catalyst_queries.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🔋</div>
              <div>
                <h2>Batteries Included</h2>
                <p>
                  Get everything you need to fix whatever issue you face. Get
                  your logs and user actions across the stack, all in context.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_sessions.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🪡</div>
              <div>
                <h2>Here's your needle</h2>
                <p>
                  Break down your issue by multiple dimensions, so you can
                  quickly find the cause of your issue.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_breakdowns.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🔔</div>
              <div>
                <h2>Noiseless Alerting</h2>
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
              href="https://app.catalystmonitor.com"
            >
              Get it now!
            </a>
            <a
              target="_blank"
              className={styles.bottomDocs}
              href="https://calendly.com/chat-bill-liu/catalyst-intro"
            >
              Let's Talk
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
