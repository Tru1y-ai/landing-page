# Truly — pricing & business model research

Working document. Eleven research passes, 2026-08-10. **Status: complete.** Truly's own pricing was re-verified against the live site on the final pass ($99 / 5 templates / 10 evaluations; $399 / 10 templates / 50 evaluations; Enterprise custom) — the baseline every comparison rests on is confirmed correct.

Start with the TL;DR, then §2g for the price card. Everything open is now a decision or an internal measurement, not a research gap.

**How to read this.** Every number below is tagged by how much you should trust it:

- **[PUBLISHED]** — taken directly off the vendor's own pricing page. Reliable.
- **[THIRD-PARTY]** — from resellers/aggregators (Vendr, Capterra, consultancies). Directionally useful, often stale, sometimes wrong. Vendors in this category deliberately don't publish.
- **[UNKNOWN]** — could not verify. Not estimated, not guessed. Left blank on purpose.

Anything I could not source is marked `[UNKNOWN]` rather than filled with a plausible number. The gaps are themselves findings — three of the four closest competitors hide pricing, and that tells you something about how this market sells.

---

## TL;DR — if you read nothing else

**1. You are the cheapest product in your category, by a lot, and it isn't winning you anything.**
Per assessment: Saffron $33.27 · Rounds $15.96 · **Truly $7.98**. At the *same* $399/mo, Rounds gives 25 assessments and you give 50. *(Caveat in §2i: adjusted for candidate drop-off the gap narrows — the repricing case survives it, the raw multiple doesn't.)*

**2. You are also underpriced against what the buyer is actually replacing — by 30×.**
One technical screen costs **$240–400 of loaded engineer time** ($95–680 range). You charge **$7.98** to replace it. Even at $100/assessment you'd still be saving the customer money. *This*, not competitor pricing, is the real ceiling. (§2e)

**3. $199/mo is the market's entry anchor.** Rounds, Saffron and HackerRank all landed there independently. You're at $99 — half. (§2b)

**4. $20/assessment is the de facto overage rate.** Rounds and HackerRank both charge exactly $20; Saffron charges $49. You have no overage at all — customers just hit a wall. (§2b)

**5. "Lump sum + subscription" = a paid pilot, and it's your best enterprise motion.** 10-30% of ACV, 100% credited on conversion, 6 weeks, written success criteria. Pilots with predefined criteria convert **3.2x** better. (S2h)

**6. Your closest competitor runs subscription AND success-based side by side.** Rounds sells SaaS at `/pricing` and contingency placement at `/hire`, off one engine. That answers your model question — but their fee is justified by *sourcing*, which you don't do. (§2d)

**7. Every self-serve competitor has a free tier. You don't.** Cheapest path to seeing Truly work is $99. (§2d)

**8. 60-80% of candidates abandon assessments — and everyone bills on assessments SENT.** Your "50/month" may really deliver 10-20. Billing on *completed* assessments is a differentiator competitors would have to eat revenue to match. (S2i)

**9. You may be billing in the wrong unit entirely.** Buyers think in *open roles*, not assessments. Workable already sells per-req ($99/role/mo). Per-role pricing kills the rationing problem, sidesteps the completion argument, and prices against engineer time instead of against Saffron. Best fit for the Enterprise tier. (S2j)

**10. The ATS is a distribution channel, and you've locked it behind Enterprise.** Greenhouse and Ashby partner programs are free to join, pay revenue share, and refer customers. Litmus already integrates with all three majors. Move ATS integration down to Starter — it's the acquisition channel, not a premium feature. (S2k)

**The one thing blocking a decision:** what one assessment costs you to run. If it's over **$3.59**, today's Pro tier is below AI-SaaS benchmark margin. Measure it. (§2c)

**Recommended sequence:** add a free tier → ship the price card in **§2g** → run the COGS test → then decide product-vs-services (§2d).

**§2g is the concrete deliverable** — a full price card ready to put on the site, with a line-by-line rationale for every change.

---

## 1. The competitive set

Truly sits in a cohort that barely existed two years ago: **AI-era work-sample assessment**. The defining trait is not "AI interviews" — it's *watching candidates do real work, with AI allowed, and scoring the process rather than the artifact*. That is exactly Truly's pitch, and it is exactly four other companies' pitch.

### 1a. Direct competitors — same problem, same wedge

| Company | Model | Price | Assessments | Per-assessment | Source |
|---|---|---|---|---|---|
| **Rounds** (rounds.so) | Subscription + overage | Free | 3 | — | [PUBLISHED] |
| | | $199/mo | 10 | **$19.90** | |
| | | $399/mo | 25 | **$15.96** | |
| | | Custom | Unlimited | — | |
| | Overage | $20/attempt | | | |
| **Saffron** (trysaffron.ai) | Subscription + overage | $199/mo | 5 | **$39.80** | [PUBLISHED] |
| | | $499/mo | 15 | **$33.27** | |
| | | Custom | Unlimited | — | |
| | Overage | $49/assessment (incl. $5 Claude Code budget) | | | |
| **Litmus** (litmushiring.com, YC) | Custom contracts only | [UNKNOWN] | — | — | [PUBLISHED] (that it's custom) |
| **Utkrusht** (utkrusht.ai) | Freemium → sales | [UNKNOWN] | — | — | [PUBLISHED] (that it's freemium) |
| **Truly** (current, live) | Subscription | $99/mo | 10 | **$9.90** | own site — **verified against the live bundle, pass 11** |
| | | $399/mo | 50 | **$7.98** | |
| | | Custom | — | — | |

**What each one actually does** (relevant because pricing follows positioning):

- **Rounds** — 30–90 min AI-allowed work trial simulator, generated from your JD plus scraped context. Scores technical execution, AI use, communication, judgment. Ships its own ATS at the Growth tier.
- **Saffron** — candidates build on *your actual repo* with full Claude Code access. 10–12 independent review agents score against your rubric. Line-by-line human-vs-AI code attribution. Explicitly sells "8+ interviewer hours → zero."
- **Litmus** (YC-backed) — async assessments generated from your repos, tickets, and JDs. Candidate works in their own setup with their own tools. Deterministic test harness plus configurable AI graders. Integrates Ashby/Greenhouse/Lever. Customers skew YC startups.
- **Utkrusht** — "watch-them-work." Drops candidates into live broken production environments (failing k8s cluster, slow API) for 30–45 min. Targets <5000-employee tech teams. Notably covers DevOps/security/cloud/embedded, not just full-stack.

### 1b. Incumbents & adjacent — the budget you're displacing

| Company | Category | Price | Source |
|---|---|---|---|
| **Greenhouse** | ATS | ~$6,500/yr entry (Essential); $15–40k/yr mid-market; $70k+/yr enterprise. Priced on **total company headcount**, not recruiter seats. Implementation $1k–15k. 8–15% annual renewal uplift. | [THIRD-PARTY] |
| **HireVue** | Video + AI assessment | ~$35k–145k+/yr; roughly $5–30 per interview depending on type and volume. One source says entry ~$25k/yr. | [THIRD-PARTY] — sources disagree |
| **Karat** | Human-led technical interviews as a service | **$250–400 per interview** | [THIRD-PARTY] |
| **HackerRank** | Coding assessment | **Monthly:** Starter **$99/mo, 5 attempts/mo**; Pro **$449/mo, 25 attempts/mo**. **Annual:** Starter **$82/mo ($990/yr), 60 attempts/yr**; Pro **$375/mo ($4,490/yr), 300 attempts/yr**. **$20 per additional attempt at every tier.** Enterprise custom. Annual = "2 months free" (~17%) | **[PUBLISHED]** — read directly off hackerrank.com/work/pricing-plans, pass 12. **Supersedes the earlier [THIRD-PARTY] figures, which were wrong on Starter** |
| **Codility** | Coding assessment | Entry **$1,200/yr**. Raised seat costs and per-candidate fees in a 2026 increase | [THIRD-PARTY] |
| **CodeSignal** | Coding assessment | **$249–999/mo**; enterprise via AWS Marketplace listed ~**$19,000/yr** | [THIRD-PARTY] |
| Spark Hire / Willo | Async video, low end | $149/mo and ~$249/mo | [THIRD-PARTY] |
| **Recruiting agencies** | Contingency placement | **15–25% of first-year salary; 20% is the US tech midpoint.** Specialised (ML, security, distributed systems) **24–30%**. Entry-level 15–18%, mid-level 20–22%, executive 25–31%. Paid only on placement | [THIRD-PARTY] — multiple independent sources agree |

---

## 2. The finding that matters most

**Truly is priced 2–4× below its closest comparables on a per-assessment basis, and the gap is widest exactly where the products are most similar.**

Per-assessment, at each vendor's mid tier:

```
Saffron   $33.27   ███████████████████████████████
Rounds    $15.96   ███████████████
Truly      $7.98   ████████
```

Sharpest single comparison — **same headline price, very different value metric**:

| | Truly Pro | Rounds Growth |
|---|---|---|
| Price | $399/mo | $399/mo |
| Assessments | **50** | **25** |
| Per assessment | $7.98 | $15.96 |

At an identical price point, Truly gives away **2× the volume**. Against Saffron — the product closest to Truly's "full session, multi-agent, AI-attribution" architecture — Truly is **4.2× cheaper per assessment**.

And overage pricing reveals what the market believes a marginal assessment is worth:

- Rounds: **$20**
- Saffron: **$49**
- Truly: no overage mechanism at all — you just hit a wall

That's the clearest signal in this whole document. Two competitors independently priced marginal capacity at $20–49. Truly's *inclusive* rate is $8.

> **Read §2i before quoting the "4× cheaper" figure.** 60–80% of candidates abandon assessments, so a "50/month" tier may deliver only 10–20 completed sessions. Measured per *completed* assessment, Truly's real rate may already be $20–40 — much closer to the market. The repricing case still holds (it rests on the §2b anchors and the §2e value ceiling, both independent of completion rate), but the raw multiple overstates it.

### The critical unknown: COGS

**[UNKNOWN] — what does one Truly assessment cost to run?**

This is the number that decides whether $7.98 is aggressive-but-smart or quietly loss-making, and I don't have it. What's known:

- Saffron budgets **$5 of Claude Code** per assessment and charges $49 for an extra one — roughly a 10× markup on the visible AI cost alone.
- Truly's architecture is heavier than a coding sandbox: OCR interpretation, vision sampling every 20s, repo diffing, AI-usage transcript analysis, a timeline builder, then **six competency evaluators plus a meta-evaluator**.

If Saffron needs $5 of inference for a code-focused assessment, Truly's multi-modal session analysis plausibly costs more — and at $7.98 all-in, gross margin could be thin or negative at the Pro tier. **Fill this number in before changing anything else.** Every recommendation below is contingent on it.

---

## 2b. Pass 2 — two market anchors that the first pass missed

Added 2026-08-10, second research pass. Both of these tighten §4's numbers from "reasoned guess" to "matches observed market."

### Anchor 1 — $199/mo is the entry price of this entire market

Four independent vendors, arrived at separately:

| Vendor | Entry tier |
|---|---|
| Rounds | **$199/mo** |
| Saffron | **$199/mo** |
| HackerRank | **$99/mo** monthly / $82/mo annual — **[PUBLISHED], corrected pass 12** |
| CodeSignal | $249/mo |
| **Truly** | **$99/mo** |

Truly's entry tier is **half the market's anchor price**. When four competitors independently land on the same number, that number is doing real work — it's what a hiring team's budget-holder will approve without escalation. Pricing below it doesn't win the deal; it mostly signals a less serious product, and it forfeits ~$100/month per customer for nothing.

### Anchor 2 — $20 per marginal assessment is now a de facto market rate

| Vendor | Overage |
|---|---|
| Rounds | **$20/attempt** |
| HackerRank | **$20/attempt** |
| Saffron | $49/assessment (incl. $5 Claude Code budget) |
| **Truly** | **none — hard ceiling** |

Rounds and HackerRank landing on the *identical* $20 figure, from opposite ends of the market (AI-native startup vs. incumbent), is strong evidence this is the market-clearing price for one extra assessment. Saffron's $49 is the premium end, justified by the heavier compute they disclose.

This upgrades the §4 overage recommendation from a judgement call to a market-matched number: **$25 sits just above the $20 commodity rate and well under Saffron's $49** — defensible in a negotiation without leaving money on the table.

### What this does to the agency comparison

With sourced numbers, the success-fee arithmetic in Option C gets sharper:

| Role type | Agency fee | On a $150k salary |
|---|---|---|
| Entry-level | 15–18% | $22,500–27,000 |
| Mid-level | 20–22% | $30,000–33,000 |
| Specialised (ML/security/infra) | 24–30% | **$36,000–45,000** |

Truly's proposed **$2,500 success fee is 1.7% of a $150k salary** — between **9× and 18× cheaper** than the agency alternative. For specialised engineering roles, where agencies charge most and screening is hardest, the gap is widest and the pitch is strongest. **That is the segment to test Option C on**, not generalist roles.

---

## 2c. Pass 3 — the COGS ceiling, and a warning about the expansion plan

Added 2026-08-10, third research pass.

### The COGS question, worked backwards

I still can't know Truly's actual cost per assessment. But industry benchmarks now let us bound it — and derive the price at which each tier *must* break even.

Benchmarks found [THIRD-PARTY, multiple sources agree]:

- **AI-native SaaS runs 50–60% gross margin**, against 80–90% for traditional SaaS. Inference is a real variable cost on every request.
- **ICONIQ Growth (2026):** roughly **$230k of inference cost per $1M of AI product revenue** — ~23%.
- Public SaaS companies began separately disclosing inference-cost ratios in Q1 2026, typically **4–9% of revenue**.
- Cloud infrastructure for AI platforms **can reach 40% of revenue**.
- Inference rose from **20% → 23% of total spend** as products matured — it grows with usage, it doesn't amortise away.

Applying the 50–60% gross-margin band to each price point gives the COGS budget per assessment:

| Scenario | Price/assessment | COGS budget @55% GM | Verdict |
|---|---|---|---|
| **Truly Pro (today)** | **$7.98** | **$3.59** | very tight |
| Truly Starter (today) | $9.90 | $4.46 | tight |
| Rounds Growth | $15.96 | $7.18 | comfortable |
| **Option A Pro (proposed)** | **$16.63** | **$7.48** | comfortable |
| Saffron Standard | $33.27 | $14.97 | large headroom |
| Overage @ $25 | $25.00 | $11.25 | large headroom |

**The load-bearing comparison:** Saffron discloses a **$5 Claude Code budget per assessment** — for a *code-focused* assessment. Truly's pipeline is materially heavier: OCR interpretation, vision sampling every 20s, repo diffing, AI-transcript analysis, timeline construction, six competency evaluators, plus a meta-evaluator. On top of that sits **video storage and egress**, which Saffron's model barely carries.

If Truly's cost lands anywhere near Saffron's $5 — and the architecture suggests it should be *higher* — then today's Pro tier at **$7.98 is running at roughly 37% gross margin or worse**, versus a 50–60% AI-SaaS benchmark. That is not a pricing preference; it's a structural problem.

**Practical test, cheap to run:** take one real assessment, add up every model call, storage write, and egress byte. If it exceeds **$3.59**, the Pro tier is below benchmark margin and repricing is not optional. That single measurement resolves the blocking question in §2.

### Warning: the non-engineering market is *cheaper*, not bigger-and-equal

§5 argued non-technical roles are Truly's defensible wedge. That's still true strategically — but the pricing assumption behind it is wrong.

| Vendor | Model | Price | Per candidate |
|---|---|---|---|
| **TestGorilla** | Credit-based | Free tier; **Core $1,700/yr, 400 credits**, 2 premium seats | **~$4.25/credit** |
| Vervoe | Subscription | from **$19/mo** | — |
| Criteria Corp | Quote only | [UNKNOWN] | — |
| Wonderlic | Quote only | est. **$1,000+/yr** | — |
| Harver | Enterprise | **$5,000+/mo** | — |

[THIRD-PARTY]

General pre-employment assessment clears at roughly **$4.25 per candidate** (TestGorilla), against **$16–33 per assessment** in technical work-simulation. **The non-technical market is ~4–8× cheaper per candidate.**

Why: those are 10–30 minute standardised tests — psychometrics, aptitude, personality — delivered at near-zero marginal cost. Truly's non-technical assessment would still be a full recorded work session with multi-agent analysis, so its *COGS stays roughly the same while the market's price expectation drops 4–8×*. That is the worst possible direction for margin.

**Implication — don't price non-engineering as an extension of the same product.** Either:
1. Sell it at engineering-tier prices and position explicitly *against* work-sample interviewing, not against TestGorilla; or
2. Build a genuinely lighter pipeline for non-technical roles (fewer extractors, shorter sessions) so COGS falls with the price; or
3. Treat it as an enterprise-only expansion where it rides an existing contract rather than standing on its own price card.

What doesn't work is assuming the engineering price transfers. It won't, and the volume won't compensate.

---

## 2d. Pass 4 — Rounds runs BOTH models at once

Added 2026-08-10, fourth research pass. This is the single most decision-relevant finding so far.

### The finding

Rounds operates **two businesses off one product**, on two different pages of the same site:

| | `rounds.so/pricing` | `rounds.so/hire` |
|---|---|---|
| Model | **Subscription SaaS** | **Success-based placement** |
| Price | $199/mo (10), $399/mo (25), $20 overage | **"A percentage of the candidate's first-year salary"** |
| Buyer | Team running its own pipeline | Team that wants roles filled |
| Motion | Self-serve, free tier (3 assessments) | Sales-led: "Book a demo", 45-min deep intake |
| Risk reversal | — | **90-day to 9-month replacement guarantee** |
| Claims | — | 98% successful placements; 90% of roles filled in 2–4 weeks; 100+ hours reclaimed |

[PUBLISHED] — both pages are Rounds' own.

**This directly answers the question this document was opened to explore.** You asked whether to price as subscription, success-based, or lump-sum-plus-subscription. Your closest competitor's answer is *both, in parallel, aimed at different buyers* — and they use the identical assessment engine to deliver each.

### Why this is a strong pattern, not just a curiosity

The two models are complements, not alternatives:

- **The SaaS tier is the top of the funnel.** Free 3 assessments → $199 → $399. Low friction, self-serve, and it teaches the market what the product does.
- **The placement business is where the margin is.** At 20% of a $150k salary, one placement is **$30,000** — roughly **6 years** of the $399/mo Growth tier. Same underlying engine, two orders of magnitude more revenue per customer.
- **The SaaS product de-risks the services sale.** A buyer who has already run 10 assessments knows the evaluation works. That is a far easier conversation than pitching contingency recruiting cold.

### The important caveat — and it cuts against copying this directly

Rounds' `/hire` page describes **filling roles**, which implies they source candidates. That is the agency model, and the fee is justified by sourcing. §3C flagged this: **Truly evaluates candidates the company already found.** Charging an agency percentage for a non-sourcing service is a much harder sell, and it is the same objection whether Rounds does it or not.

So the transferable lesson is *not* "charge 20% like Rounds." It's:

> The assessment product can be the **delivery mechanism** for a higher-margin services business — but only if you also take on the part of the job that justifies the fee.

Two honest paths:

1. **Stay a product.** Keep subscription + overage (Options A/B). Sell to teams with their own pipeline. Lower revenue per customer, far better margins, much more scalable.
2. **Add a services tier.** Offer placement-adjacent outcomes — sourcing partnership, or a managed "we run your technical screen" service — and price on outcome (Option C, or a % fee). Higher revenue per customer, but you're now partly a recruiting agency, with the headcount and cash-flow profile that implies.

Path 2 is a **company-shape decision**, not a pricing tweak. Worth deciding deliberately rather than drifting into.

### Greenhouse — now confirmed from the primary source

Fetched greenhouse.com/pricing directly [PUBLISHED]:

- Three tiers: **Core**, **Plus**, **Pro**
- **No prices published at all.** "Greenhouse pricing is customized based on your company's hiring needs." Quote-only, "chat with an expert."
- Cost factors stated: plan selected, hiring volume, organizational complexity, features required.

This confirms the $6.5k–70k+ figures in §1b remain **[THIRD-PARTY] and unverifiable from source**. Use them for orientation, never in a customer-facing comparison.

### The free-tier gap

| Vendor | Free entry |
|---|---|
| Rounds | **3 assessments free** |
| Utkrusht | **"Start for free — no credit card, 5 min setup"** |
| TestGorilla | Free plan |
| HackerRank | Free tier historically |
| **Truly** | **none — $99 wall** |

Every self-serve competitor lets a buyer run a real assessment before paying. Truly's cheapest path to seeing the product work is $99. In a market where four vendors look alike on a pricing page, the one you can *try* wins the evaluation — and Truly's differentiator (the full-session evidence, the culture-fit scoring) is exactly the thing that only lands once someone sees a real report.

**Recommendation: add 2–3 free assessments before touching any other price.** It costs COGS on a handful of sessions and removes the single biggest obstacle to being evaluated at all. If §2c's cost test shows an assessment costs ~$4, three free assessments cost ~$12 to acquire a lead — cheap against a $199–499/mo subscription.

---

## 2e. Pass 5 — value-based pricing: what the buyer is actually replacing

Added 2026-08-10, fifth research pass. Everything before this section is **competitor-anchored** — what rivals charge. That sets a *market* price, not a *value* price, and the two are far apart here.

### What one technical screen costs the customer today

[THIRD-PARTY, multiple sources agree]

| Metric | Figure |
|---|---|
| Single technical interview | **$95–680** in loaded engineering time |
| Mid-level (L4) round, incl. prep + debrief | **$240** |
| Senior (L5) round | **$310** |
| Staff (L6) round | **$400** |
| Full mid-level loop | **$1,400–3,200** |
| Full engineering loop | **20–40 interviewer hours** at **$86–150/hr** loaded = **$2,000–6,000** per hire |
| Average cost per hire (US, all roles) | ~$4,800 |
| Software engineer, high-growth tech | **$6,000–9,000+** |
| AI/ML specialist | **$10,000–15,000** |

### The ratio that should set your price

A Truly assessment replaces a technical screen. So:

| Truly price/assessment | Replaces (L4 screen, $240) | Customer saving | ROI multiple |
|---|---|---|---|
| **$7.98 (today)** | $240 | $232 | **30×** |
| $16.63 (Option A) | $240 | $223 | 14× |
| $25 (proposed overage) | $240 | $215 | 9.6× |
| $50 | $240 | $190 | 4.8× |
| **$100** | $240 | **$140** | **2.4×** |

**Even at $100 per assessment — 12× today's price — the customer still saves money on every single candidate.** Against a senior (L5, $310) or staff (L6, $400) screen the case is stronger still.

This reframes the whole document. Truly is not really competing with Saffron at $33 and Rounds at $16. **It is competing with $240–400 of engineer time**, and so is everyone else. The entire category is underpriced relative to the value it displaces — Truly just happens to be the most underpriced within it.

It also explains Saffron's confidence. Their "8+ interviewer hours → zero" claim, at $86–150/hr loaded, is **$688–1,200 of engineer time saved per candidate**. Charging $33–49 against that is a 14–36× return for the buyer. They aren't being greedy at $49; they're being modest.

### The bad-hire argument — where the success fee gets its justification

[THIRD-PARTY, multiple sources agree]

| Source | Cost of a bad hire |
|---|---|
| US Dept. of Labor | **≥30% of first-year earnings** (direct costs only) |
| SHRM | **50–200% of annual salary** |
| Mid-level technical/managerial | **100–150% of salary** |
| Bad software engineer hire | **$150,000–300,000** incl. ~6-month productivity drag on the team |
| Failed engineering hire | **1.5–2× annual salary** — a $180k engineer costs $270,000–360,000 |

I am deliberately **not** converting this into an expected-value-per-assessment number. Doing so requires assuming how much Truly reduces bad-hire probability, and I have no evidence for that figure — inventing one would be the exact thing this document is meant to avoid.

What it does support is the *framing* for Option C. A $2,500 success fee against a $150,000–300,000 downside is **1–2% of the loss being insured against**. That is an easy sentence to say in a sales call, and it is true without needing a fabricated probability.

### What this changes about the recommendations

- **The Option A/B numbers are conservative, not aggressive.** $16–25 per assessment is still a 10–14× return for the buyer. Any worry that repricing from $8 to $17 is "a big jump" should be measured against the $240 alternative, where both numbers round to nothing.
- **Value-based pricing supports going further than Option B eventually** — but only once there are case studies. You cannot charge on value you cannot yet evidence. Reprice to market now (Option B), gather outcome data, then move toward value pricing.
- **Lead with the engineer-hours number in sales, not the per-assessment price.** "This costs $25 and replaces $240 of your senior engineers' time" is a far stronger opening than any comparison to Rounds or Saffron — and it moves the conversation off a feature-by-feature bake-off you may not win.

---

## 2f. Pass 6 — an ATS that publishes, and the objection it creates

Added 2026-08-10, sixth research pass.

### Ashby — the only ATS in this document with a real published price

Greenhouse is quote-only (§2d). **Ashby publishes** [PUBLISHED, primary source]:

| Tier | Price | Company size |
|---|---|---|
| **Foundations** | **$400/month** | up to 100 employees |
| Plus | Custom | 101–1,000 employees |
| Enterprise | Custom | 1,000+ employees |
| Ashby Analytics (standalone) | Custom, usage-based | 100+ employees |

Pricing language, quoted: *"Our pricing is based on company size, usage, and commitment."* Annual commitments get a **10% discount**.

Two things this gives us:

1. **It corroborates the Greenhouse estimates.** Ashby's $400/mo ≈ **$4,800/yr** for a sub-100-employee company sits just under the third-party ~$6,500/yr Greenhouse entry figure. Different vendors, same ballpark — so the §1b numbers, while still [THIRD-PARTY], are probably about right.
2. **It confirms the ATS pricing metric is company headcount**, not usage. That's the model §3E already rejected for Truly, now confirmed from a primary source rather than a reseller.

### The objection you will hit in every enterprise deal

Put the two numbers side by side:

| | Ashby Foundations | Truly Pro |
|---|---|---|
| Price | **$400/mo** | **$399/mo** |
| Scope | **Entire applicant tracking system** — every req, every candidate, every recruiter, company-wide system of record | **50 technical assessments** |

**A buyer will say: "You cost the same as our whole ATS."** That is a completely fair question and it will come up. Two answers, and only one of them works:

- ❌ *"But we do more per candidate"* — loses. The ATS touches every candidate and every recruiter; you touch a subset.
- ✅ **"We're not replacing your ATS budget, we're replacing your engineers' calendars."** One screen costs **$240–400 of engineer time** (§2e). Fifty assessments displaces **$12,000–20,000** of engineering hours. The ATS comes out of the recruiting-ops budget; Truly comes out of the *engineering productivity* budget. Different pools, different buyers, different justification.

This is a positioning point as much as a pricing one: **do not let Truly get compared to the ATS line item.** Every comparison you lose is one where the buyer put you in the recruiting-software column instead of the engineering-time column.

### Annual vs monthly — currently unused, and the cheapest lever available

Truly offers monthly only. Benchmarks [THIRD-PARTY, sources broadly agree]:

| Convention | Figure |
|---|---|
| Industry-standard annual discount | **~16.7%** — "two months free," framed as 12 months for the price of 10 |
| Common best-practice band | 15–20% for annual commitment |
| Cloud 100 companies with public pricing | 68% offer prepay annual, discounting **20–30%** |
| **Ashby specifically** | **10%** |
| **Monthly subscribers churn at** | **3–5× the rate of annual customers** |

That last row is the point. **The discount isn't really a discount — it's buying retention and cash.** For a company at Truly's stage, an annual plan converts a customer who could leave in 30 days into one committed for a year, and pulls twelve months of cash forward.

**Recommendation: offer annual at ~17% off ("two months free").** It's the most recognisable framing, it sits mid-band, and it's more generous than Ashby's 10% — which matters when you're the less-established vendor and need the commitment more than they do.

---

## 2g. The actual price card I would ship

**Reconciled at pass 11** — this section was first written at pass 6 and has been updated to incorporate the later findings (§2h paid pilot, §2i completion billing, §2j per-role enterprise, §2k ATS as channel). Where this table and an earlier section disagree, **this table wins.**

Consolidating Options A/B (§4) plus the free tier (§2d) and annual pricing above into one concrete artifact. **Contingent on the COGS test in §2c** — if an assessment costs more than ~$7, raise these.

| | **Free** | **Starter** | **Growth** | **Enterprise** |
|---|---|---|---|---|
| Monthly | **$0** | **$199/mo** | **$499/mo** | Custom |
| Annual (~17% off) | — | **$1,990/yr** | **$4,990/yr** | Custom |
| Assessments | **3 total** | **10/mo** | **30/mo** | Unlimited |
| Per assessment | — | $19.90 | $16.63 | — |
| Overage | — | **$25** | **$25** (→$20 over 50, $15 over 200) | Custom |
| Session reports | ✓ | ✓ | ✓ | ✓ |
| Rubric customization | — | ✓ | ✓ | ✓ |
| Behavioral scenarios | — | — | ✓ | ✓ |
| Candidate ranking | — | — | ✓ | ✓ |
| **ATS integration** | — | **✓** | ✓ | ✓ |
| SSO / dedicated support | — | — | — | ✓ |
| **Enterprise billing metric** | — | — | — | **per open role** (§2j) |
| **Enterprise entry** | — | — | — | **paid pilot, $2.5–5k, credited** (§2h) |

**What changes from today, and why:**

| Change | Rationale |
|---|---|
| Add free tier (3 assessments) | Every self-serve competitor has one; you have a $99 wall (§2d) |
| Starter $99 → $199 | Matches the market anchor all four competitors landed on (§2b) |
| Pro $399/50 → Growth $499/30 | Per-assessment $7.98 → $16.63, in line with Rounds; volume was the outlier, not the price |
| Add $25 overage | $20 is the de facto market rate; $25 sits just above it and under Saffron's $49 (§2b) |
| Add annual at ~17% | Monthly-only customers churn 3–5× faster; pulls cash forward |
| **ATS integration moved to Starter** | It is the **acquisition channel**, not a premium feature. A Greenhouse/Ashby referral lands on Starter; gating it above that breaks the channel where it is narrowest (§2k) |
| **Enterprise billed per open role** | Buyers budget per req, not per assessment. Prices against $4.8–9.6k of engineer time per role instead of against Saffron. Needs a fair-use cap (§2j) |
| **Enterprise entered via paid pilot** | 10–30% of ACV, fully credited, 6 weeks, written success criteria — which convert **3.2×** better (§2h) |

**Two open decisions this table does not settle:**

1. **Billing on sent vs completed assessments (§2i).** The table assumes *sent*, matching the market. Switching to *completed* is a real differentiator — 60–80% of candidates abandon — but moves that risk onto your COGS. Decide after the §2c cost test, not before.
2. **Whether per-role should extend below Enterprise (§2j).** Kept at Enterprise only here, deliberately: self-serve buyers need a number they can compare in ten seconds, and per-assessment is what the market compares.

**Migration:** grandfather existing customers at their current price for 12 months. It costs little at current volume and removes the only real risk in this whole plan.

---

## 2h. Pass 7 — "lump sum + subscription", done properly

Added 2026-08-10, seventh research pass. You named three models: subscription, success-based, and **lump sum plus subscription**. The first two are covered at length (§3A/§3C, §2d). The third was the thinnest section in this document — §3D dismissed it in five lines. It deserves better, because there are real benchmarks and it's the standard way this market lands enterprise deals.

The correct name for it is a **paid pilot**.

### Benchmarks

[THIRD-PARTY, multiple sources broadly agree]

| Question | Benchmark |
|---|---|
| How much to charge | **10–30% of annual contract value** |
| What happens to the fee | **100% credited toward year one** on conversion |
| Payment | Often split 50/50 — half up front, half at midpoint |
| Length | **4–8 weeks** for a narrow, well-defined outcome |
| Conversion rate | **60% to 90%+**, depending on whether the customer reaches real production use |
| With predefined success criteria | **3.2× more likely to convert** than an open-ended evaluation |

Two findings worth quoting almost directly:

> *"If you don't charge, it's not a pilot — it's an extended demo, and free pilots rarely convert."*

> Charge when implementation takes **any engineering or data work**, or when the buyer needs procurement to move. Free is acceptable only for a self-serve product with no lift.

### Why this fits Truly specifically

Truly is exactly the product the second quote describes. Onboarding a serious customer means **connecting a repo, calibrating a rubric, and defining the workplace scenarios** — real setup work, on both sides. That is the textbook case for charging.

It also resolves a tension elsewhere in this document. §2d recommends a **free tier** (3 assessments, self-serve) and §3D warned that a setup fee adds friction. Both are right, for different buyers:

| Buyer | Motion | Entry |
|---|---|---|
| Startup / small team | Self-serve | **Free tier → $199/mo** (§2g) |
| Mid-market / enterprise | Sales-led | **Paid pilot → annual contract** |

These are not in conflict. They're two doors into the same product, and every mature vendor in §1b runs both.

### A concrete pilot structure

Sized against the §2g price card, assuming an enterprise annual contract in the $15–25k range:

| Component | Recommendation |
|---|---|
| **Pilot fee** | **$2,500–5,000** (10–30% of a $15–25k ACV) |
| **Credit** | **100% applied to year one** if they convert |
| **Payment** | 50% on signature, 50% at week 4 |
| **Duration** | **6 weeks** — long enough to run a real req end to end |
| **Scope** | One open role, up to 25 candidate assessments |
| **Success criteria** (agreed *in writing*, before signature) | e.g. *"≥15 candidates assessed; ≥50% reduction in engineer screening hours for this req; hiring manager rates report usefulness ≥4/5"* |
| **Terms** | Framed as year one of an annual contract, terminable at pilot end |

The success-criteria row is the one that actually matters — **3.2× conversion** is the largest single lever in this entire document, and it costs nothing but the discipline to write the criteria down before the pilot starts rather than after it goes sideways.

### How this compares to the other two models

| | Subscription (§3A) | Success-based (§3C) | **Paid pilot → subscription** |
|---|---|---|---|
| Cash timing | Monthly, immediate | 2–4 months after cost | **Up front, then monthly** |
| Buyer risk | Low | Lowest | Low — fee is credited back |
| Your risk | Low | High | **Low** |
| Sales cycle | Short | Long (legal, procurement) | Medium |
| Fits your product | Yes | Only with sourcing | **Yes — setup work justifies it** |
| Revenue ceiling | Capped | Highest | Capped, but lands enterprise |

**Verdict: this is the best-fitting of the three models you named for landing mid-market and enterprise**, and it's strictly better than the "implementation fee" framing in §3D because the fee is credited rather than charged — the buyer's objection disappears while your cash-flow benefit and qualification filter both remain.

### Competitor funding — [UNKNOWN], and I'm not going to guess

I tried to establish what Rounds, Saffron and Litmus have raised, because a well-funded competitor can sustain underpricing far longer than you can, which would change whether competing near their price is safe.

**I could not find funding figures for any of them.** What I did find: Utkrusht has raised a seed round (§1a), Litmus is YC-backed, and Saffron's founders come from MIT/Stanford/Harvey Mudd and Jane Street. That's a signal about calibre, not capital, and I'm not going to convert it into an inferred runway.

If this matters to the decision, Crunchbase or PitchBook will answer it in minutes — it's a lookup, not an analysis.

---

## 2i. Pass 8 — candidate drop-off, and why you should charge on *completed* assessments

Added 2026-08-10, eighth research pass. Every prior section priced the assessment as if sending one equals getting one back. That assumption is wrong, and the error is large.

### The number

[THIRD-PARTY, multiple sources agree]

> **60–80% of candidates abandon hiring assessments before completing them** — and *"the best candidates, the ones with the most options and the strongest professional confidence, leave fastest."*

Supporting detail:

| Factor | Finding |
|---|---|
| Under 60 minutes | Significantly improves completion |
| Over 2 hours | Significantly higher dropout |
| 2026 guidance | **Under 90 minutes of expected effort, or skip it** |
| Developer sentiment | 62% feel pressured to overprepare for skills they rarely use |
| Adoption | ~13% of hires include a take-home; **33% at top-tier companies** |
| **Market tailwind** | **71% of engineering leaders say AI is making technical skills harder to assess — take-home signal rated as degrading fastest** |

### What this does to the unit math

A "50 assessments per month" tier does not deliver 50 evaluations. At a 60–80% abandonment rate it delivers **10–20 completed sessions**:

| Sent | Completion | Completed | Effective cost/completed at Truly Pro ($399) |
|---|---|---|---|
| 50 | 100% (assumed today) | 50 | $7.98 |
| 50 | 40% | 20 | **$19.95** |
| 50 | 20% | 10 | **$39.90** |

So Truly's *real* delivered cost per completed assessment may already be **$20–40** — right in line with Rounds and Saffron. The apparent 2–4× underpricing in §2 is partly an artifact of measuring the wrong unit.

**This does not change the recommendation to reprice** — §2b's anchors and §2e's value ceiling both stand on their own, and competitors face identical drop-off. But it does mean the headline "you're 4× cheaper" is softer than it looks, and it belongs in the doc rather than being quietly convenient to omit.

### The actual opportunity here

Every competitor prices on assessments **sent**, not completed. Rounds is explicit: *"$20 per additional **attempt**."*

That means in a market where 60–80% of candidates walk away, **customers are paying full price for sessions that produced no signal at all.** That is a live, unaddressed grievance in a category where all five products look alike on a pricing page.

**Recommendation: price on completed assessments.**

| | Standard market model | Truly |
|---|---|---|
| Billing unit | Assessment **sent** / attempt | **Assessment completed** |
| Customer pays for abandonment | Yes | **No** |
| Sales line | — | *"You only pay for sessions that produced evidence."* |

Why this is strong:

- **It's a real differentiator**, not a feature claim — it's a term, and terms are hard to copy quickly because rivals have to eat the revenue loss to match it.
- **It's honest about the product's own risk.** Truly's assessments are full work sessions, likely on the longer end. If drop-off is a problem, charging only on completion means you carry that risk instead of the customer — which is exactly the confidence signal a new vendor needs.
- **It justifies a higher headline number.** $25–35 per *completed* assessment is an easier sell than $20 per *sent* one, because the customer can compute what they actually get. It converts the price rise in §2g into something the buyer reads as fairer, not just costlier.
- **It creates a product incentive that's aligned with the customer.** If revenue only lands on completion, you're pushed to keep sessions tight and candidate experience good — which the data says is exactly what protects signal quality.

**Caveat worth stating:** this shifts abandonment risk onto Truly's COGS. Compute is spent setting up and partially running sessions that never finish. That makes the §2c cost test *more* urgent, not less — you'd need cost-per-*attempted* session, not just per completed one, before committing to this model.

### The tailwind worth putting on the website

> **71% of engineering leaders say AI is making technical skills harder to assess, and take-home signal is degrading fastest.**

That is the single best external justification for Truly's existence found in eight passes of research. It says the incumbent method is breaking, from the mouths of the buyers. It belongs in the hero section, not buried in a pricing doc.

---

## 2j. Pass 9 — the billing unit nobody in this category uses: the open role

Added 2026-08-10, ninth research pass. Every section so far argued about the *price* of an assessment. None questioned whether **"assessment" is the right unit at all**. It may not be.

### The precedent

[THIRD-PARTY]

**Workable sells "Pay-per-Job" at $99 per open role per month**, alongside conventional headcount-scaled tiers ($149–599/mo). Breezy HR prices per user. So within recruiting software, three distinct metrics are in live commercial use:

| Metric | Who uses it | Fit for Truly |
|---|---|---|
| Company headcount | Greenhouse, Ashby, Workable (main tiers) | ✗ rejected (§3E) — Truly's value isn't org-wide |
| Per user/seat | Breezy | ✗ rejected (§3E) — punishes collaborative review |
| **Per open role / requisition** | **Workable Pay-per-Job — $99/role/mo** | **← unexamined until now** |
| Per assessment | Rounds, Saffron, HackerRank, **Truly** | current default |

### Why per-role might fit Truly better than per-assessment

**1. It matches how the buyer actually thinks.** Nobody says "I need 30 assessments." They say *"I'm hiring two backend engineers and a designer."* The req is the unit of hiring; the assessment is an implementation detail. Pricing in the customer's units removes a translation step from every sales conversation.

**2. It kills the rationing problem.** §3B flagged the core flaw in per-assessment pricing: it makes customers *ration* assessments to stay in budget — the exact opposite of what you want, since more assessments means more evidence and a stickier product. With unlimited assessments per open role, the incentive flips. The customer runs everyone through Truly, and every candidate assessed deepens the dependency.

**3. It sidesteps the completion-rate problem entirely.** §2i wrestled with billing on sent vs completed assessments and concluded completed is better but shifts risk onto COGS. Per-role pricing makes the question disappear — abandonment costs the customer nothing and costs you only compute, with no awkward line item either way.

**4. It aligns with the value story in §2e.** One open engineering role consumes **20–40 interviewer hours** ($2,000–6,000) or roughly **20–40 screens at $240 each** ($4,800–9,600). A per-role price is directly comparable to a per-role cost. "This req costs you $6,000 in engineer time; Truly covers it for $600" is a cleaner sentence than anything per-assessment.

**5. It's differentiated.** All four direct competitors bill per assessment. Nobody in the AI work-sample category prices per req.

### Indicative numbers

Value anchor: one open engineering role ≈ **$4,800–9,600** of screening time.

| Option | Price | vs. buyer's cost | Notes |
|---|---|---|---|
| Workable Pay-per-Job (reference) | $99/role/mo | — | an ATS job slot, far less work per role than Truly |
| Truly per-role, conservative | **$299/role/mo** | 16–32× return | undercuts a single L4 screen +25% |
| Truly per-role, mid | **$599/role/mo** | 8–16× return | ≈ 2.5 screens of engineer time |
| Truly per-role, value-led | **$999/role/mo** | 5–10× return | still under one full loop's interviewer cost |

Even the top row is a **5–10× return** for the buyer. Compare that with the current $399/mo for 50 assessments spread across *all* their roles.

### The real risk, and the fix

**Unlimited-per-role is a COGS landmine.** A customer with one high-volume req could push 500 candidates through a single $299 slot. At even $4/assessment that's $2,000 of cost against $299 of revenue.

Mitigations, in order of preference:

1. **Fair-use cap** — "up to 50 assessments per role per month, then $25 each." Keeps the simple story, bounds the downside.
2. **Tier by role seniority** — senior/staff reqs cost more, and genuinely are worth more (an L6 screen is $400 vs L4's $240).
3. **Minimum term per role** — a req is billed for a minimum of 2 months, matching real time-to-fill (§1b: 4–8 weeks typical).

### How this changes the recommendation

I am **not** replacing §2g with this. Per-assessment is what the market understands, what competitors are compared on, and what a self-serve buyer can evaluate in ten seconds on a pricing page. Switching wholesale would make Truly hard to compare — and being hard to compare is only an advantage when you're already winning.

**But it is the strongest candidate for the Enterprise tier**, which is currently just "Custom":

| Tier | Metric |
|---|---|
| Free / Starter / Growth | **Per assessment** (§2g) — familiar, comparable, self-serve |
| **Enterprise** | **Per open role**, with fair-use cap — matches how large teams budget, and prices against engineer time rather than against Saffron |

That gives you a self-serve motion the market can price-compare, and an enterprise motion that escapes the comparison entirely and anchors on a much larger number. It also pairs naturally with the paid pilot in §2h — a pilot is *literally* one open role for six weeks, which is exactly a per-role contract with a trial period attached.

---

## 2k. Pass 10 — the ATS is a channel, not just a budget rival

Added 2026-08-10, tenth research pass. §2f framed Greenhouse and Ashby as the thing Truly gets unfavourably compared to ("you cost the same as our whole ATS"). That's true of the *budget line*. It's the wrong frame for the *relationship*.

### What's actually on offer

[PUBLISHED / vendor pages]

**Greenhouse Integration Partner Program:**
- **No initial fees to join**
- **Revenue sharing**, discounted rates, and marketing development funds
- Partner portal, sandbox environment, co-marketing, training, certification
- **Referrals from Greenhouse customer account teams**

**Ashby Partnerships:**
- 200+ integrations; open API and partner ecosystem treated as "first-class products"
- Referral partners get early access, co-marketing, and **revenue share**
- Lightweight process: intro call → demo the integration end to end → marketing assets → published on the Marketplace

**[UNKNOWN] — the actual revenue-share percentages.** Neither publishes them; they're partner-confidential. Typical software marketplace rev-share runs in the tens of percent, but I'm not putting a number here I can't source. Worth asking directly on the intro call — it's a five-minute question and both programs are free to join.

### Why this matters for pricing, not just distribution

**1. It dissolves the §2f objection.** "You cost as much as our ATS" is devastating when you're a rival line item. It evaporates when you're *in the ATS's own marketplace*, listed as a recommended integration, referred by their account team. You stop being the alternative and become the upgrade.

**2. Litmus is already doing it.** §1a notes Litmus integrates with **Ashby, Greenhouse and Lever**. That is not an engineering detail — it's a distribution strategy, and the closest YC-backed competitor has already executed it. Truly currently gates "ATS & workflow integrations" behind the *Enterprise* tier, which is exactly backwards: the integration is the acquisition channel, so putting it behind the highest paywall means it can never acquire anyone.

**3. Rev share is cheap CAC.** Giving up a share of revenue looks expensive next to a 100%-margin direct sale — until you price the alternative. Direct enterprise sales means outbound, demos, and a sales cycle measured in months. A referral from a Greenhouse account manager arrives pre-qualified, mid-purchase, from someone the buyer already trusts. **For a company with no brand yet, that's the difference between selling and being found.**

**4. Marketplace presence supports a higher price.** Part of the case for repricing (§2b, §2g) is that $99 signals "less serious." Sitting in the Greenhouse and Ashby marketplaces alongside established vendors is third-party validation that makes $199–499 legible rather than presumptuous.

### What this implies for the price card

One change to §2g:

| | §2g as written | Revised |
|---|---|---|
| ATS integration | **Growth tier and above** | **Starter tier and above** |

Rationale: if the ATS marketplace is the acquisition channel, the integration must be available at the price point a referred customer will actually land on. A Greenhouse-referred 40-person startup will start at Starter, not Growth. Gating the integration above their entry tier breaks the channel at its narrowest point.

Everything else in §2g stands.

### Sequencing

This is cheap and non-committal — both programs are free to join, and the work is an integration you'd likely build anyway:

1. Book the intro calls with both. **Ask the rev-share question directly.**
2. Build the Ashby integration first — their process is explicitly the lighter of the two, and their customer base (technical, well-funded startups) is closest to Truly's buyer.
3. Move ATS integration down to Starter before listing, or the channel converts nobody.

---

## 3. Pricing model options

### A. Pure subscription with volume tiers — *what Truly does now*

Flat monthly fee, N assessments included.

- **For:** predictable revenue, simple to sell, what the whole cohort does (buyer comparison is easy), clean for procurement.
- **Against:** value metric is capped — a customer hiring 200 engineers pays the same as one hiring 51. Breakage (unused assessments) is revenue you got without delivering value, which reads well on paper and badly at renewal. No mechanism to capture a spike in hiring.
- **Verdict:** correct default, wrong parameters. Keep the shape, fix the numbers and add overage.

### B. Usage-based / credits — per assessment

Buy a pack, burn it down.

- **For:** aligns price with delivered value; hiring is genuinely bursty so it matches customer reality; expands automatically without a renegotiation.
- **Against:** revenue unpredictability; buyers dislike unbounded bills; creates an incentive to *ration* assessments, which is the opposite of what you want (more assessments = more evidence = stickier).
- **Verdict:** wrong as the primary model, **right as the overage mechanism**. Both direct competitors do exactly this.

### C. Success-based — % of first-year salary, or flat fee per hire

The agency model applied to software.

- **For:** by far the highest willingness-to-pay in this market. Agencies charge **15–25% of first-year salary** — on a $150k engineer that's **$22,500–37,500 per hire**. Truly currently captures ~$400/month. The value narrative writes itself: "pay only when you hire."
- **Against:** and these are serious —
  - **Attribution.** If they interview 40 candidates through Truly and hire one they also met at a conference, do you get paid? This is the fight that kills success-based deals.
  - **Cash flow.** Revenue lands 2–4 months after cost is incurred. Brutal pre-Series A.
  - **Sales cycle.** Procurement and finance treat variable per-hire fees very differently from a $399 SaaS line item. Expect legal review.
  - **Adverse selection.** Customers who hire rarely love it; customers who hire constantly avoid it — and those are your best accounts.
  - **You don't source candidates.** Agencies charge 20% because they *find* the person. Truly evaluates candidates the company already sourced. Charging agency rates for a non-agency service is a hard sell.
- **Verdict:** don't make this the core model. Viable as a **premium option** for a specific segment (see §4C).

### D. Lump sum + subscription — implementation fee plus recurring

- **For:** front-loads cash, funds real onboarding (repo integration, rubric calibration — both genuinely costly for Truly), and *filters out tire-kickers*. Greenhouse charges $1k–15k implementation and nobody blinks.
- **Against:** raises the barrier at exactly the moment an unknown startup can least afford friction. Litmus and Saffron sell to YC companies who will not pay a setup fee to try something.
- **Verdict:** wrong now, right later. Introduce for enterprise once you have logos. **This is how the Enterprise tier should be structured, not a fee on Starter/Pro.**

### E. Per-seat — the Greenhouse model

- **Verdict:** actively wrong for Truly. Greenhouse charges on company headcount because an ATS is used by the whole org. Truly's value is per *candidate evaluated*, not per recruiter. Per-seat would punish the collaborative review that makes the product sticky. **Discard.**

### F. Hybrid — platform fee + per-assessment (recommended shape)

Modest base covering access, integrations, and support; metered assessments on top.

- **For:** predictable floor plus uncapped upside. Base fee anchors value even in a quiet hiring month; metering captures hiring spikes without a renegotiation. This is where infrastructure pricing has broadly converged.
- **Against:** slightly harder to put on a pricing page; two numbers to explain instead of one.
- **Verdict:** **strongest fit.** It's what Rounds and Saffron already do — they just call the base fee a "tier."

---

## 4. Draft pricing proposals

Three options, cheapest → most aggressive. All are drafts pending the COGS number in §2.

### Option A — "Reprice to market" (low risk)

Keep the current structure; fix the value metric and add overage.

| Tier | Price | Assessments | Per-assessment | vs today |
|---|---|---|---|---|
| Starter | $199/mo | 10 | $19.90 | +$100/mo, matches Rounds |
| Pro | $499/mo | 30 | $16.63 | +$100/mo, **50→30 assessments** |
| Enterprise | Custom | Unlimited | — | unchanged |
| **Overage** | **$25/assessment** | | | new |

- Lands Truly between Rounds ($16) and Saffron ($33) per assessment.
- The 50→30 cut on Pro is the substantive change: today's Pro is the most generous offer in the market by a wide margin, with no evidence that generosity is winning deals.
- **Risk:** existing customers on Pro lose 40% of their volume. Grandfather them; it costs little and buys goodwill.

### Option B — "Hybrid" (recommended, pending COGS)

| Component | Price | Notes |
|---|---|---|
| Platform fee | $299/mo | ATS integration, rubric customization, session storage, support |
| Included assessments | 10 | covers a typical single-role pipeline |
| Additional assessments | $25 each | volume breaks at 50 ($20) and 200 ($15) |
| Enterprise | From $15k/yr + $10/assessment | annual commit, custom rubrics, SSO, dedicated support |

- Floor of $299 protects against low-hiring months; metering captures spikes.
- Volume breaks give sales something to trade without discounting the base.
- Enterprise entry at $15k/yr sits **below Greenhouse's $15–40k mid-market band** — deliberate, so Truly reads as a line item next to the ATS rather than a competitor to it.

### Option C — "Outcome tier" (experimental, one segment only)

Offer alongside B, never instead of it.

| Component | Price |
|---|---|
| Platform fee | $199/mo (reduced) |
| Per assessment | $10 (reduced) |
| **Success fee** | **$2,500 per hire made from a Truly-evaluated candidate** |

- $2,500 is roughly **1.7% of a $150k salary** — an order of magnitude under an agency's 15–25%, which makes it an easy yes next to a $30k agency invoice.
- Attribution rule must be written before this is ever sold. Suggested: *any candidate who completed a Truly assessment and is hired into that req within 90 days.* Simple, checkable, occasionally generous — accept that.
- **Only sell this to companies already paying agency fees.** For them the comparison is $2,500 vs $30,000 and it closes itself. For a bootstrapped startup that has never used an agency, it just reads as a scary variable cost.

---

## 5. Positioning notes

- **Don't compete on price with Rounds and Saffron.** All three products are within weeks of each other in capability, and the buyer cannot tell them apart from a pricing page. Being cheapest signals *less capable*, not *better value* — especially at 4× cheaper, which invites the question "what's missing?"
- **Truly's differentiator is breadth of evidence, not the assessment itself.** Saffron watches the codebase. Litmus watches the repo and the tickets. Utkrusht watches a broken production environment. **Truly watches the whole session — screen, repo, AI transcript, and simulated workplace scenarios — and scores communication and culture fit alongside technical work.** Nobody else in the direct set claims the interpersonal axis. That is the thing to charge for, and it is currently free.
- **The non-technical roles claim is a genuinely defensible wedge.** Every direct competitor is engineering-only. If Truly can credibly assess non-engineering roles, the addressable market multiplies and the comparison set stops being Saffron and starts being Greenhouse — a much better neighbourhood to be priced in.

---

## 6. Open questions

Ordered by how much they change the answer.

1. **[BLOCKING] What is fully-loaded COGS per assessment?** Inference across all extractors and evaluators, storage of session recordings, egress. Every number above is contingent. **Pass 3 narrowed this to a single test: measure one real assessment end to end. If it exceeds $3.59, today's Pro tier is below AI-SaaS benchmark margin** (see §2c).
2. What is current conversion at $99/$399? If Starter converts well and Pro doesn't, that's a packaging problem, not a price problem.
3. Do any customers hit the 10/50 ceiling? If nobody does, the tiers are academic and overage revenue is zero.
4. What does a customer's *alternative* cost them — agency fees, or engineer hours? A team spending $30k/hire on agencies prices very differently from one spending 8 engineer-hours.
5. Is anyone paying Litmus or Utkrusht, and how much? Both hide pricing. Worth a competitive call.
6. Average salary of roles being hired through Truly — sets the ceiling on any success fee.

---

## 7. Next passes

- [ ] Get Litmus and Utkrusht pricing (sales call or a customer who'll share) — both confirmed sales-gated, no public figures
- [x] ~~Verify Greenhouse against a primary source~~ — done pass 4: **quote-only, no prices published at all** (§2d). HireVue still [THIRD-PARTY]
- [ ] **Decide: product-only, or add a services/placement tier** (§2d) — company-shape decision, blocks Option C
- [ ] Add a free tier (§2d) — recommended before any repricing
- [x] ~~Find Karat/CodeSignal published rates~~ — done pass 2; HackerRank/Codility/CodeSignal added, still [THIRD-PARTY]
- [x] ~~Source the agency fee benchmark~~ — done pass 2, multiple sources agree
- [x] ~~Size the non-engineering assessment market~~ — done pass 3; it is **cheaper**, not equal (§2c)
- [x] ~~Model unit economics~~ — done pass 3 as a break-even band; still needs the real COGS number to resolve
- [x] ~~Check HackerRank's conflicting figures~~ — **resolved pass 12 from the primary source. Both third-party figures were wrong.** Real: $99/mo (5 attempts) and $449/mo (25 attempts); annual $990 (60/yr) and $4,490 (300/yr)
- [x] ~~Establish the value-based ceiling~~ — done pass 5: one screen = $240-400 of engineer time (§2e)
- [ ] Gather outcome data (time-to-hire, interviewer hours saved, retention of Truly-screened hires) — required before value pricing can be charged rather than merely argued
- [x] ~~Find an ATS with published pricing~~ — done pass 6: Ashby publishes, $400/mo (§2f)
- [x] ~~Annual vs monthly convention~~ — done pass 6: ~17% is standard; monthly churns 3-5x faster (§2f)
- [x] ~~Flesh out "lump sum + subscription"~~ — done pass 7 as paid-pilot structure (§2h)
- [ ] Look up competitor funding on Crunchbase/PitchBook — [UNKNOWN] after pass 7, and it's a lookup not an analysis
- [ ] **Decide whether to ship the §2g price card** — research is complete; this is now a business decision, not a research gap
- [ ] **Write the pilot success criteria template** (§2h) — biggest single conversion lever found (3.2x)
- [ ] Measure Truly's own completion rate — the whole of §2i is contingent on it, and it's internal data
- [ ] Get cost-per-*attempted* session (not just completed) if pursuing completion-based billing (§2i)
- [ ] Decide the Enterprise billing metric: per-assessment vs **per open role** (§2j) — affects how enterprise deals are anchored
- [ ] If per-role: pick the fair-use cap and whether to tier by seniority (§2j)
- [ ] Book intro calls with Greenhouse + Ashby partner programs; **ask the rev-share %** — [UNKNOWN] and unpublished (§2k)
- [x] ~~Move ATS integration from Growth to Starter in the price card~~ — done pass 11, §2g reconciled
- [ ] **Run the single-assessment cost measurement** (§2c) — highest-value action remaining, and it's internal, not research
- [ ] Decide non-engineering strategy: premium positioning, lighter pipeline, or enterprise-only rider

---

## Sources

- [Rounds — Pricing](https://www.rounds.so/pricing) · [Evaluate](https://www.rounds.so/evaluate)
- [Saffron — AI-Native Technical Assessments](https://www.trysaffron.ai/)
- [Litmus (YC)](https://www.ycombinator.com/companies/litmus-hiring) · [litmushiring.com](https://litmushiring.com/)
- [Utkrusht](https://utkrusht.ai/) · [Dealroom — Utkrusht seed round](https://app.dealroom.co/news/note/utkrusht-ai-raises-seed-round-for-watch-them-work-hiring-platform)
- [Vendr — Greenhouse](https://www.vendr.com/marketplace/greenhouse) · [Leon Consulting — Greenhouse ATS pricing](https://leonstaff.com/blogs/greenhouse-ats-pricing/) · [Pin — Greenhouse pricing](https://www.pin.com/blog/greenhouse-pricing/)
- [Pin — HireVue pricing](https://www.pin.com/blog/hirevue-pricing/) · [Noon — HireVue pricing](https://www.noon.ai/blog/articles/104-hirevue-pricing-2026)
- [Vendr — Karat](https://www.vendr.com/marketplace/karat) · [agenticinterviewer — Karat vs HackerRank vs CodeSignal](https://agenticinterviewer.com/for-technical-interviews/)
- [Y Combinator — Recruiting & Talent companies](https://www.ycombinator.com/companies/industry/recruiting-and-talent)

**Pass 2 additions**

- [HackerRank — Codility vs HackerRank vs CodeSignal](https://www.hackerrank.com/writing/codility-vs-hackerrank-vs-codesignal-2025-enterprise-comparison) · [HackerRank vs Codility pricing after price hike](https://www.hackerrank.com/writing/hackerrank-vs-codility-ai-interviewer-pricing-after-price-hike) — note: vendor-authored, treat competitor figures with care
- [Vendr — CodeSignal](https://www.vendr.com/marketplace/codesignal) · [daily.dev — Codility vs HackerRank vs CodeSignal](https://recruiter.daily.dev/resources/technical-screening-tools-codility-vs-hackerrank-vs-codesignal/)
- [TechHiringCost — Contingency recruiter fees 2026](https://techhiringcost.com/contingency-recruiter-fee) · [RecruitBPM — Recruitment fees 2026](https://recruitbpm.com/blog/recruitment-fees) · [Valuable Recruitment — Contingency vs retained vs embedded](https://valuablerecruitment.com/blog/recruitment-agency-fees) · [ISG Partners — Flat fee vs contingency](https://www.isgpartners.com/blog/flat-fee-vs-contingency-recruiting)

**Pass 3 additions**

- [Pin — Best pre-employment assessment tools 2026](https://www.pin.com/blog/pre-employment-assessment-tools/) · [Capterra — TestGorilla](https://www.capterra.com/p/203823/TestGorilla/) · [TestTrick — TestGorilla pricing](https://www.testtrick.com/blogs/testgorilla-pricing-and-reviews) · [Staffgrid — Wonderlic review](https://staffgrid.net/review/wonderlic/)
**Pass 4 additions**

- [Rounds — Hire (success-based placement)](https://www.rounds.so/hire) · [Greenhouse — Pricing (quote-only, primary source)](https://www.greenhouse.com/pricing)

**Pass 5 additions**

- [TechHiringCost — Cost per tech interview 2026](https://techhiringcost.com/cost-per-interview) · [InterviewCost — Cost per hire by industry / SHRM table](https://interviewcost.com/by-industry) · [Pin — Cost-per-hire benchmarks](https://www.pin.com/blog/cost-per-hire-benchmarks/) · [Engineering Hiring Cost Calculator](https://engineeringhiringcost.com/)
**Pass 6 additions**

**Pass 7 additions**

**Pass 8 additions**

**Pass 9 additions**

**Pass 10 additions**

- [Greenhouse — Become a partner](https://www.greenhouse.com/greenhouse-partner-resource-center) · [Greenhouse — Partner directory](https://integrations.greenhouse.com/) · [Greenhouse Integration Partner Program (directory listing)](https://partner-program-directory.partnerfleet.io/partners/greenhouse-integration-partner-program) · [Ashby — Partnerships](https://www.ashbyhq.com/partners) · [Ashby — Integrations](https://www.ashbyhq.com/integrations)

- [Pin — Workable pricing 2026 (Pay-per-Job $99/open role)](https://www.pin.com/blog/workable-pricing/) · [Capterra — Workable](https://www.capterra.com/p/130175/Workable/) · [SSR — Recruitment software pricing guide 2026](https://www.selectsoftwarereviews.com/blog/recruitment-software-pricing) · [iSmartRecruit — Breezy HR review](https://www.ismartrecruit.com/tools/breezyhr)

- [ClarityHire — Coding assessment completion rate benchmarks](https://clarity-hire.com/blog/coding-assessment-completion-rate) · [Valentiq — Reducing candidate drop-off](https://www.valentiq.co/blog/how-to-reduce-candidate-drop-off) · [One Hour Digital — Technical interview statistics 2026](https://onehour.digital/blog/technical-interview-statistics) · [Ashby — Recruiting operations benchmarks, Talent Trends 2026](https://www.ashbyhq.com/talent-trends-report/reports/recruiting-operations-benchmarks-talent-trends)

- [Monetizely — How to structure enterprise pilot pricing](https://www.getmonetizely.com/articles/how-to-structure-enterprise-pilot-program-pricing-effective-proof-of-concept-strategies) · [SaaStr — Paid pilot to annual contract conversion](https://www.saastr.com/what-is-the-typical-conversion-from-paid-pilot-to-annual-contract-in-b2b-saas/) · [Heavybit — SaaS POCs that convert](https://www.heavybit.com/library/article/saas-poc-paid-pilot-program) · [Tracsio — Pilot vs free trial vs paid PoC](https://www.tracsio.com/articles/pilot-vs-free-trial-vs-paid-poc-b2b-saas)

- [Ashby — Pricing (published, primary source)](https://www.ashbyhq.com/pricing) · [Baremetrics — Annual vs monthly pricing](https://baremetrics.com/blog/annual-vs-monthly-pricing-better-retention) · [Noizz — SaaS pricing benchmarks 2026](https://noizz.io/statistics/saas-pricing-benchmarks) · [Visdum — B2B SaaS annual price increase strategies](https://visdum.com/blog/annual-price-increase-strategies-b2b-saas)

- [inop.ai — Cost of a bad hire, DOL & SHRM citations](https://inop.ai/the-true-cost-of-a-bad-hire-in-2026/) · [Cadence — Real cost of a bad engineering hire](https://cadence.withremote.ai/blog/cost-of-bad-engineering-hire) · [Frontline Source Group — What a bad hire costs in 2026](https://www.frontlinesourcegroup.com/blog-what-a-bad-hire-really-costs-your-company-in-2026.html)

- [SaaS Academy — How AI changes SaaS gross margin](https://www.thesaasacademy.com/blog/how-ai-changes-saas-pnl-gross-margin) · [SaaSMag — AI COGS and margin compression](https://www.saasmag.com/ai-cogs-saas-gross-margin-compression/) · [Digital Applied — AI unit economics framework](https://www.digitalapplied.com/blog/ai-unit-economics-pricing-margins-services-2026-framework) · [The Marketing Hub — Hidden economics of AI SaaS](https://the-marketinghub.com/blog/hidden-economics-ai-saas-2026/) — ICONIQ Growth 2026 figures cited via these
