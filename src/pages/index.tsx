import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.first}>
          <h1 className={styles.pageTitle}>
            Build your web app,
            <br />
            <EX>and we'll keep it running.</EX>
          </h1>
          <div className={styles.subtitle}>
            Setup everything you need to monitor and fix breakages in seconds.
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
        <div className={styles.mainPreviewContainer}>
          <img className={styles.mainPreviewScreen} src="/img/ss_home.png" />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailRow}>
            <div className={`${styles.card}`}>
              <div className={styles.cardTitle}>
                <div className={styles.emoji}>🚀</div>
                <h2>More building, less busywork</h2>
              </div>
              <p>
                Sick of cleaning out your error inbox? Or cleaning up harmless
                errors and logs just because they trigger alerts?
              </p>
              <p>
                Catalyst measures error rates per-endpoint and per-page, so{" "}
                <EX>you'll only get alerted when user flows are impacted.</EX>{" "}
                With less interruptions, you get more time to build.
              </p>
            </div>
            <div className={`${styles.detailsScreen}`}>
              <img src="/img/ss_pages.png" />
            </div>
          </div>
          <div className={`${styles.detailRow} ${styles.right}`}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                <div className={styles.emoji}>🔋</div>
                <h2>Everything you need, ready in seconds</h2>
              </div>
              <p>
                Hate paying for multiple services? Get everything you need to
                find and fix breakages with Catalyst, including:
              </p>
              <ul>
                <li>End-to-end errors and logs</li>
                <li>Session tracking</li>
                <li>Configurable alerting</li>
                <li>Click tracking</li>
              </ul>
              <p>
                No dedicated SRE or infra teams required.{" "}
                <EX>You can set up Catalyst in seconds!</EX>
              </p>
            </div>
            <div className={styles.detailsScreen}>
              <img src="/img/ss_session.png" />
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
            <a href="https://discord.gg/wm3gDnfT" target="_blank">
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
              '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/75e1f3e494ec4c8a85ce39007561c3a3?sid=795d4e11-7a19-4b81-a807-1ddc22b9ea41" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
          }}
        />
      </div>
    </Layout>
  );
}

function EX({ children }: { children: React.ReactNode }) {
  return <span className={styles.exclaim}>{children}</span>;
}
