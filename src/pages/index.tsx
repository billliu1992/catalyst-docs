import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import InfoPanels from "../components/InfoPanels";

export default function Hello() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.first}>
          <h1 className={styles.pageTitle}>
            Monitoring that works out-of-the-box
          </h1>
          <div className={styles.subtitle}>
            Not getting value out of your current monitoring? Get{" "}
            <EX>better signal</EX> using <EX>less effort</EX> with Catalyst.
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
              href="https://app.catalystmonitor.com/o/9c5f882c-fb76-4583-97d6-6c83eb382faf"
            >
              Play with a live demo
            </a>
          </div>
        </div>
        <div className={styles.mainPreviewContainer}>
          <img className={styles.mainPreviewScreen} src="/img/ss_home2.png" />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsPanels}>
            <InfoPanels
              panels={[
                {
                  header: (
                    <>
                      <EX>Error Rates</EX> - the Metric You Need
                    </>
                  ),
                  details: (
                    <>
                      <p>
                        With error rates by page and endpoint,{" "}
                        <EX>
                          you know exactly where and how severe your breakage is
                        </EX>
                        . Spend less time chasing false positives, and no time
                        cleaning out error inboxes!
                      </p>
                      <p>
                        You get this out-of-the-box with Catalyst,{" "}
                        <EX>no manual instrumentation or configuration</EX>.
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_pages2.png",
                },
                {
                  header: (
                    <>
                      Everything You Need to <EX>Debug</EX>
                    </>
                  ),
                  details: (
                    <>
                      <p>
                        Don't want to pay for another service? Good news, you
                        don't have to.
                      </p>
                      <p>
                        Get a breakdown of logs and errors on your endpoints and
                        pages, and a list of sessions with said errors in
                        context. Track down issues with ease.
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_breakdown.png",
                },
                {
                  header: (
                    <>
                      <EX>End-to-End</EX> Coverage
                    </>
                  ),
                  details: (
                    <>
                      <p>
                        Track clicks, navigation, backend calls, and errors
                        across the stack.
                      </p>
                      <p>
                        <EX>Debug faster and better</EX>, with all your
                        information in context.
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_session.png",
                },
                {
                  header: (
                    <>
                      <EX>Alerted</EX> for every issue
                    </>
                  ),
                  details: (
                    <>
                      <p>
                        By monitoring the symptoms, you'll get actionable and
                        comprehensive alerts. No false positives, and no missing
                        issues.
                      </p>
                      <p>
                        No need to pay for another alerting service either,
                        we'll let you know when there's an issue!
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_alerts.png",
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.comparisonContainer}>
          <h2>The best option for teams that move fast</h2>
          <div className={styles.comparisonOptions}>
            <Option
              title={
                <img
                  className={styles.catalystCompare}
                  src="/img/logo-with-name.svg"
                  alt="Catalyst"
                />
              }
              results={[
                {
                  isHit: true,
                  title: "Set up in seconds",
                  desc: (
                    <>
                      Check out our{" "}
                      <a href="/docs" target="_blank">
                        docs
                      </a>
                      !
                    </>
                  ),
                },
                {
                  isHit: true,
                  title: "Value right away",
                  desc: "Sensible defaults means no long setup or configuration before seeing value.",
                },
                {
                  isHit: true,
                  title: "Actionable alerting",
                  desc: "By monitoring error rates per-endpoint and per-page, your alerts will be actionable and comprehensive. Never miss an issue!",
                },
                {
                  isHit: true,
                  title: "Less training required",
                  desc: "Simple and doesn't introduce new concepts so your whole company can find value - no playbook required.",
                },
                {
                  isHit: true,
                  title: "Everything you need",
                  desc: "Covers your entire stack and gathers errors and logs. No need to buy another service!",
                },
              ]}
            />
            <Option
              title="Sentry"
              desc="& other error monitoring"
              results={[
                {
                  isHit: true,
                  title: "Easy setup",
                  desc: "Many client libraries available.",
                },
                {
                  isHit: false,
                  title: "Noisy alerts",
                  desc: "Noisy alerts are ineffective alerts. Errors don't always correspond with issues, so engineers quickly learn to ignore the alerts!",
                },
                {
                  isHit: false,
                  title: "Constant maintenance required",
                  desc: "The error inbox needs to be constantly groomed to be useful.",
                },
              ]}
            />
            <Option
              title="Datadog"
              desc="& other observability platforms"
              results={[
                {
                  isHit: true,
                  title: "A lot of features",
                  desc: "Has a lot features - useful if you know what you're doing and have the time to set everything up.",
                },
                {
                  isHit: false,
                  title: "No value out-of-the-box",
                  desc: "Having a lot of metrics isn't inherently useful! You must configure dashboards and write queries before getting value.",
                },
                {
                  isHit: false,
                  title: "Instrument your own metrics",
                  desc: "You'll need to instrument certain metrics yourself. You won't get error rates per endpoint out-of-the-box!",
                },
                {
                  isHit: false,
                  title: "Nontrivial setup process",
                  desc: "You'll need to run the agent as a sidecar process and install the client libraries.",
                },
                {
                  isHit: false,
                  title: "Expensive",
                  desc: "",
                },
              ]}
            />
            <Option
              title="Health Checks"
              results={[
                {
                  isHit: true,
                  title: "Easy setup",
                  desc: "Just point it at a URL.",
                },
                {
                  isHit: false,
                  title: "Misses issues",
                  desc: "Because it doesn't monitor user experience, it can miss issues for hours or even totally!",
                },
                {
                  isHit: false,
                  title: "Doesn't help debug",
                  desc: "Doesn't capture any other information to help you debug.",
                },
                {
                  isHit: false,
                  title: "Other services required",
                  desc: "You'll need to buy other monitoring services just to get everything you need!",
                },
              ]}
            />
          </div>
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
            href="https://app.catalystmonitor.com/o/9c5f882c-fb76-4583-97d6-6c83eb382faf"
          >
            Play with a live demo
          </a>
        </div>
        <div className={styles.lastDitchLinks}>
          You can also{" "}
          <a href="https://discord.gg/YQZy4SXzmX" target="_blank">
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

function Option({
  title,
  desc,
  results,
}: {
  title: React.ReactNode;
  desc?: string;
  results: {
    isHit: boolean;
    title: string;
    desc: React.ReactNode;
  }[];
}) {
  return (
    <div className={styles.compareOption}>
      <div className={styles.compareHeader}>
        <div className={styles.compareTitle}>{title}</div>
        {desc != null ? <div className={styles.compareDesc}>{desc}</div> : null}
      </div>
      <div className={styles.resultsContainer}>
        {results.map((r, i) => (
          <div
            className={`${styles.compareResult} ${
              r.isHit ? styles.hit : styles.miss
            }`}
          >
            <div className={styles.resultHeader}>
              <div className={styles.resultIcon}>{r.isHit ? "✅" : "❌"}</div>
              <div className={styles.resultTitle}>{r.title}</div>
            </div>
            <div className={styles.resultDesc}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EX({ children }: { children: React.ReactNode }) {
  return <span className={styles.exclaim}>{children}</span>;
}
