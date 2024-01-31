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
          <div className={styles.tiers}>
            <PricingTier
              name="Hobbyist"
              description="Your hobby project won't break without you knowing."
              pricing="$0"
              features={[
                "1 user",
                "30 day data retention",
                "10k events",
                "15 alerts",
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
              pricing="$25"
              monthlyPricing="$30"
              features={[
                "1 user (+$5 per user)",
                "90 day data retention",
                "250k events",
                "Unlimited alerts",
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
              name="Business"
              description="Get alerted to breakages business-wide. Build your brand on well-built products!"
              pricing="$75"
              monthlyPricing="$85"
              features={[
                "15 users (+$5 per user)",
                "90 day data retention",
                "750k events",
                "Unlimited alerts",
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
              pricing="Custom"
              features={[
                "Unlimited user",
                "Custom data retention",
                "Custom event limit",
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
                '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/75e1f3e494ec4c8a85ce39007561c3a3?sid=795d4e11-7a19-4b81-a807-1ddc22b9ea41" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
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
  monthlyPricing,
  description,
  features,
  children,
}: {
  name: string;
  pricing: string;
  monthlyPricing?: string;
  description: string;
  features: string[];
  children: React.ReactNode;
}) {
  return (
    <div className={styles.tier}>
      <div>
        <div className={styles.tierName}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>
          <span className={styles.priceAmount}>{pricing}</span>{" "}
          <span className={styles.priceUnit}>/mo</span>{" "}
          {monthlyPricing != null ? (
            <span className={styles.priceUnit}>billed annually</span>
          ) : null}
        </div>
        <ul className={styles.features}>
          {features.map((f, idx) => (
            <li key={idx} className={styles.feature}>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {monthlyPricing != null ? (
          <div className={styles.monthlyDisclaimer}>
            * or {monthlyPricing} billed monthly
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
