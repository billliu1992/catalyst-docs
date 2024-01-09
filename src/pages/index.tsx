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
                <h2>Save Time and Lower Stress</h2>
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
                  No need to sign up for another service. Get everything you
                  need to fix whatever issue you face. Get your logs and user
                  actions across the stack, all in context.
                </p>
              </div>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/catalyst_sessions.png" />
            </div>
            <div className={styles.card}>
              <div className={styles.emoji}>🪡</div>
              <div>
                <h2>Here's Your Needle</h2>
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
            <h2>Peace of Mind in Seconds</h2>
            <p>
              Your time is important, so Catalyst lets you get actionable data
              in seconds - no long setup process required.{" "}
              <a href="/docs" target="_blank">
                Read the docs.
              </a>
            </p>
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
          <div className={styles.lastDitchLinks}>
            You can also{" "}
            <a href="https://discord.gg/JdREEFfB" target="_blank">
              join our Discord
            </a>{" "}
            and{" "}
            <a
              href="https://cdn.forms-content.sg-form.com/b8ee284e-7912-11ee-be05-767cd0f2f8cc"
              target="_blank"
            >
              sign up for our Newsletter
            </a>
            !
          </div>
        </div>
        <div
          className={styles.demoContainer}
          dangerouslySetInnerHTML={{
            __html:
              '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/34be0477468f435ca1db331af27bab33?sid=2ea4f726-14f4-489b-99bf-50da9b280a4e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
          }}
        />
      </div>
    </Layout>
  );
}
