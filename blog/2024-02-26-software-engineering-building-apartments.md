---
slug: perfect-codebase-wont-save-your-company
title: The perfect codebase won't save your company
authors: bill
tags: [software, engineering, time, quality, craftsmanship]
---

Software engineering clearly takes skill. A good software engineer is a force multiplier, and can accomplish tasks that other engineers wouldn't even know how to start. So why are there little-to-no tech companies with perfect codebases that are a delight to work in led by rock star engineers? Is there a conspiracy by the dastardly managers, suits, and business people to keep the heroic and smart engineers down?

<!--truncate-->

Obviously there's no such conspiracy. But then, why is it so hard to convince management to rewrite a terrible codebase? Or rewrite in a different language that's much nicer to work with? Or use this new service that improves DevEx significantly? Why does management always seem to encourage bad code and tech debt?

The answer to all those questions is that these days, most companies simply aren't living or dying by the quality of their codebase. Horrible codebases account for billions of dollars in revenue. The market doesn't incentivize clever engineering, it incentivizes speed and execution.

> Cooking is a craft, I like to think, and a good cook is a craftsman-not an artist. There's nothing wrong with that: the great cathedrals of Europe were built by craftsmen-though not designed by them. Practicing your craft in expert fashion is noble, honorable and satisfying. And I'll generally take a stand-up mercenary who takes pride in his professionalism over an artist any day.
> 
> \- *Kitchen Confidential* - Anthony Bourdain

The software market is unique because switching to the better option is relatively easy compared to other industries and companies can service near infinite customers with relatively little investment. Imagine if all pizza places can immediately deliver to anywhere in the world, instantly, at every hour of the day. Would anyone ever settle for bad pizza? This is the reality for software, and it's uniqueness is what makes it so lucrative: winners quickly dominate such that it's impossible for two competitors to exist in the same market.

But isn't there a lot of cases where multiple competitors coexist? What about Slack, Teams, and Discord? In reality, seemingly similar competitors only coexist either because they serve different market niches, or a loser is propped up by VC funding and long business contracts. In the given example, Discord serves a distinctly separate niche, while Slack [sold to Salesforce](https://www.theverge.com/22150313/how-microsoft-crushed-slack-salesforce-acquisition) after Microsoft started winning the enterprise clients. Today, it wouldn't matter how well you code a Slack clone, if it doesn't appeal to a different market niche it likely won't go anywhere.

Where are these profitable market niches? Until the market is proven through success, **nobody** knows where these profitable market niches do and don't exist. That's why everybody is testing the market iteratively. VCs throw money at a lot of different companies in search of outsized returns. Large tech companies constantly fund unprofitable projects unrelated to their money-maker in search of growth to justify their valuation. Indie hackers commit to 12 projects in 12 months. Everybody is basically [hiring monkeys until they get _A Tale of Two Cities_](https://en.wikipedia.org/wiki/Infinite_monkey_theorem_in_popular_culture), because that's how you succeed in this market.

> We were Snapchat before Snapchat. But then, Snapchat launched Stories, and when they launched Stories I was like, "Oh shit, that's like what we're building but *way* better, *and* they released it before us. So like, we were Snapchat before Snapchat, but we were also Snapchat after Snapchat \[Laughs\]. It's like, "Look Snapchat users, I know you love your product and I know it's great, but we got something worse for you, just give us a few more months."
> 
> \- Casey Neistat, talking about BEME on Steve-O's Wild Ride ([YouTube](https://www.youtube.com/watch?v=SU5PRsSvo2E))

Given these market conditions, what kind of return-on-investment do you get by rewriting your codebase? We should always write good code, because sometimes your code lives longer than you think. But how many lines of perfectly crafted code is now sitting unused because the product it built never served a market niche? More important than having the perfect codebase, the most valuable thing an engineer can do is to give their team more tries at beating the competitors to the market.

But doesn't good software take time [\[3\]][3] [\[4\]][4]? To build faster, should we forsake code quality? Actually, building faster has never been mutually exclusive with quality. Good software engineers have always strived to write maintainable code (or, ["easier to change"](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)). Why? So we can save time when we inevitably change it later. The value of quality code has always been about saving time, both when first writing and also down the line when iterating.

[3]: https://www.joelonsoftware.com/2001/07/21/good-software-takes-ten-years-get-used-to-it/
[4]: https://www.reddit.com/r/programming/comments/uu5a5k/why_building_software_takes_time/

Engineers asked to build faster doesn't mean less opportunities to showcase skill, it actually results in more. Good engineers know to code and architect in a simple manner and embracing [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). They also know how to manage tech debt without completely stopping the world to eliminate it. A good engineer will still be a huge benefit to your company, and asking them to embrace market realities does not change that.

But actually, none of this is a secret at all. In 2014 Meta famously changed their motto from "move fast and break things" to "move fast with stable infrastructure." These days, with all the different dev tools available, everybody can move fast with stable infra. It's been like this since 1986, when Fred Brook in ["No Silver Bullet"](https://en.wikipedia.org/wiki/No_Silver_Bullet) identified how the market has been a force in reducing "accidental complexity." The 10x silver bullet still hasn't been found, but your competitors don't need a silver bullet to conquer your market, they just need to get there faster than you.

_Have some comments? Want to flame the author? Come join our [Discord](https://discord.gg/YQZy4SXzmX). Want to keep up with future posts? Sign up for our [newsletter](https://cdn.forms-content.sg-form.com/b8ee284e-7912-11ee-be05-767cd0f2f8cc)._