import React from "react";
import Layout from "@theme/Layout";
import styles from "./pricing.module.css";

export default function Hello() {
  return (
    <Layout
      title="Pricing"
      description="Get alerted to breakages at an affordable pricing."
    >
      <div className={styles.content}>
        <div className={styles.first}>
          <h1 className={styles.pageTitle}>Catalyst Pricing</h1>
          <div className={styles.freeNoteContainer}>
            <div className={styles.freeNote}>
              <div className={styles.freeNoteTitle}>Note</div>
              <p>
                <strong>
                  As of right now, we are not collecting payment from users
                </strong>
                . While we do eventually plan on charging (hosting costs
                money!), we'd rather focus on improving the product than
                collecting payment.
              </p>
              <p>
                For now,{" "}
                <strong>
                  feel free to use the product as you wish, completely free, no
                  credit card required
                </strong>
                . We will give you ample warning in our{" "}
                <a
                  href="https://cdn.forms-content.sg-form.com/b8ee284e-7912-11ee-be05-767cd0f2f8cc"
                  target="_blank"
                >
                  newsletter
                </a>{" "}
                when we start charging. If you have any questions, or want to
                talk about an enterprise use-case, feel free to{" "}
                <a href="https://calendly.com/chat-bill-liu/catalyst-intro">
                  reach out directly
                </a>
                .
              </p>
            </div>
          </div>
          <div className={styles.tiers}>
            <PricingTier
              name="Hobbyist"
              description="Your hobby project won't break without you knowing."
              pricing={<span className={styles.priceAmount}>Free</span>}
              features={[
                "No credit card required",
                "1 user",
                "3GB data included",
                "15 day retention",
              ]}
            >
              <a
                className={styles.secondaryCta}
                href="https://app.catalystmonitor.com"
              >
                Get Started
              </a>
            </PricingTier>
            <PricingTier
              name="Professional"
              description="For projects with regular users and customers."
              pricing={<span className={styles.priceAmount}>See Note</span>}
              features={[
                "Unlimited users",
                "15GB data included",
                "30 day data retention",
              ]}
            >
              <a
                className={styles.primaryCta}
                href="https://app.catalystmonitor.com"
              >
                Start Free Trial
              </a>
            </PricingTier>
            <PricingTier
              name="Enterprise"
              description="Make Catalyst work for your business!"
              pricing={<span className={styles.priceAmount}>See Note</span>}
              features={[
                "Unlimited users",
                "Custom data retention",
                "Custom data limit",
                "Premium Support and SLAs",
              ]}
            >
              <a className={styles.secondaryCta} href="mailto:bill@privium.xyz">
                Contact Us
              </a>
            </PricingTier>
          </div>
        </div>

        <div className={styles.contactUs}>
          <h2>Need Some Help Deciding?</h2>
          <p>
            We're here to help. Contact us to learn more about Catalyst, or
            schedule a demo.
          </p>
          <div className={styles.bottomCtas}>
            <a
              className={styles.primaryCta}
              target="_blank"
              href="https://calendly.com/chat-bill-liu/catalyst-intro"
            >
              Talk to a Human
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
                '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/3495767f8b384730b24eed5e2c526f26?sid=17af9e09-0d13-4836-9386-e8b4bea5083e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

function PricingTier({
  name,
  pricing,
  description,
  features,
  children,
}: {
  name: string;
  pricing: React.ReactNode;
  description: string;
  features: string[];
  children: React.ReactNode;
}) {
  return (
    <div className={styles.tier}>
      <div>
        <div className={styles.tierName}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{pricing}</div>
        <ul className={styles.features}>
          {features.map((f, idx) => (
            <li key={idx} className={styles.feature}>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
