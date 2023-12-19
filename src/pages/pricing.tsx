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
              className={styles.secondaryCta}
              target="_blank"
              href="https://www.loom.com/share/34be0477468f435ca1db331af27bab33?sid=4fecce25-dcdd-4f35-8925-9a75804a488f"
            >
              Watch a Demo
            </a>
            <a className={styles.primaryCta} href="mailto:bill@privium.xyz">
              Talk to a Human
            </a>
          </div>
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