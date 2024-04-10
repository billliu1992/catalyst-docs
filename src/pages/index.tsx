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
            Not getting value out of your current monitoring?
          </h1>
          <div className={styles.subtitle}>
            Catalyst is monitoring for <EX>high-velocity</EX> developers who
            want a <EX>better signal</EX> with <EX>less toil</EX>.
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
          <img className={styles.mainPreviewScreen} src="/img/ss_home.png" />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsPanels}>
            <InfoPanels
              panels={[
                {
                  header: (
                    <>
                      Error Rates: the <EX>Secret Sauce</EX>
                    </>
                  ),
                  details: (
                    <>
                      <p>
                        With error rates by page and endpoint,{" "}
                        <EX>
                          you know exactly where your breakage is, and how
                          severe it is
                        </EX>
                        .
                      </p>
                      <p>
                        This means less work chasing false positives, and more
                        time building your product. No more cleaning out error
                        inboxes!
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_pages.png",
                },
                {
                  header: <>Monitor and debug with breakdowns</>,
                  details: (
                    <>
                      <p>
                        Get a breakdown of logs and errors on your endpoints and
                        pages, and a list of sessions with said errors in
                        context.
                      </p>
                      <p>
                        If your users are experiencing an error, you'll know
                        exactly which error and how many users are affected.
                      </p>
                    </>
                  ),
                  imageUrl: "/img/ss_breakdown.png",
                },
                {
                  header: "Track session end-to-end",
                  details: (
                    <>
                      <p>
                        Track clicks, navigations, backend calls, and errors
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
                  header: "Configure your alerting",
                  details: (
                    <>
                      <p>
                        Configure error thresholds and traffic minimums so
                        you'll only get interrupted when you want to.
                      </p>
                      <p>
                        No more wasting time tackling errors that don't actually
                        affect your users.
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
          <h2>The best option for teams that get stuff done</h2>
          <div className={styles.comparisonScroll}>
            <div className={styles.comparison}>
              <div />
              <div className={styles.cpnSubject}>Error Monitoring</div>
              <div className={styles.cpnSubject}>
                Health Checks / Website Monitoring
              </div>
              <div className={styles.cpnSubject}>
                <img
                  className={styles.catalystCompare}
                  src="/img/logo-with-name.svg"
                />
              </div>
              <div className={styles.cpnFeature}>
                <div className={styles.featureTitle}>Easy to Setup</div>
                <div className={styles.featureDesc}>
                  Is the set up process easy and pain-free?
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  Most services are easy to integrate.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  For most services, you just need to enter a URL.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  You can set up Catalyst in seconds.
                  <br />
                  <a href="/docs">Read our docs</a>
                </div>
              </div>
              <div className={styles.cpnFeature}>
                <div className={styles.featureTitle}>Good Signal</div>
                <div className={styles.featureDesc}>
                  Are alert notifications significant and actionable without
                  false positives?
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.miss}`}>
                <div className={styles.featureIcon}>❌</div>
                <div className={styles.featureDesc}>
                  Transient errors can be unactionable, training engineers to
                  ignore notifications.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  If a health check can't reach your service, it's likely that
                  users can't reach your service either.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  With error rates per page and endpoint, you'll only get
                  notified if users are experiencing issues.
                </div>
              </div>
              <div className={styles.cpnFeature}>
                <div className={styles.featureTitle}>
                  Minimizes Maintenance / Toil
                </div>
                <div className={styles.featureDesc}>
                  Does the service work without needing constant attention and
                  upkeep?
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.miss}`}>
                <div className={styles.featureIcon}>❌</div>
                <div className={styles.featureDesc}>
                  Error inbox needs to be periodically groomed and cleaned out
                  in order to be useful.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  As long as you don't mind gaps in coverage, a simple
                  healthcheck endpoint suffices.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  After initial set-up, no additional work is required to keep
                  coverage over your entire web app.
                </div>
              </div>
              <div className={styles.cpnFeature}>
                <div className={styles.featureTitle}>Helps Debug</div>
                <div className={styles.featureDesc}>
                  Does the service help you fix issues after identifying them?
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  Depending on your provider, other information may be collected
                  to help you debug.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.miss}`}>
                <div className={styles.featureIcon}>❌</div>
                <div className={styles.featureDesc}>
                  Since health checks monitors your service as a blackbox, it
                  cannot provide any useful debugging info.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  Catalyst captures log messages, stack traces, clicks, and
                  navigations across the stack, so you'll always have context to
                  debug.
                </div>
              </div>
              <div className={styles.cpnFeature}>
                <div className={styles.featureTitle}>
                  Comprehensive Coverage
                </div>
                <div className={styles.featureDesc}>
                  If any user has an issue, will you be notified?
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  Error monitoring services generally record all errors.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.miss}`}>
                <div className={styles.featureIcon}>❌</div>
                <div className={styles.featureDesc}>
                  Health checks don't measure what users actually experience, so
                  it can easily miss issues for hours or even entirely.
                </div>
              </div>
              <div className={`${styles.cpnResult} ${styles.hit}`}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureDesc}>
                  Catalyst records the experience of all users, so if any user
                  has an issue, you'll know.
                </div>
              </div>
            </div>
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

function EX({ children }: { children: React.ReactNode }) {
  return <span className={styles.exclaim}>{children}</span>;
}
