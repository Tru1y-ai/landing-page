# DRAFT — not published, not linked

Target cluster: AI cheating in hiring assessments (see `seo-query-map.md`).
Proposed URL: `/ai-proof-hiring`

**Before this ships, someone has to fix the flagged items at the bottom.**
It contains one statistic I could not verify and several claims that need to be
true of the actual product.

---

**Title:** Your Take-Home Is Being Solved by AI. Here's What Still Works.
**Meta description:** Detection tools and proctoring lose to AI. Observing how
someone actually works does not. Why work samples survived the AI era. (~150)
**H1:** Your take-home is being solved by AI

---

## The instrument broke, not the candidates

A take-home assignment used to be a proxy. It asked a candidate to produce an
artifact alone, unobserved, and it assumed producing that artifact was hard.
That assumption is what broke. The artifact is now cheap to produce and the
proxy measures nothing.

This is not a character problem. A candidate who uses the best available tool
on an unsupervised task is behaving rationally, and will behave the same way
on the job — where you want them to. The test stopped distinguishing people.

## Why detection is the wrong response

The instinct is to detect the AI. It fails for three reasons.

**It is an arms race you do not win.** Detectors infer from artifacts. Models
change monthly; your detector does not.

**False positives are expensive and invisible.** A rejected strong candidate
never tells you. You cannot measure the damage, so you will conclude it is not
happening.

**It optimises for the wrong thing.** Detection asks "did they use AI?" The
useful question is "are they good at their job?" — and today the answer to the
second involves using AI well.

## Proctoring buys less than it costs

Lockdown browsers and webcam monitoring move the problem rather than solve it.
A second device defeats every one of them. Meanwhile the cost is real: you have
told a senior engineer you do not trust them, in the first substantive
interaction they have with your company. Strong candidates with options
withdraw.

## What survives: watch the work, not the artifact

The one instrument that AI has not devalued is the work sample — a realistic
task, done the way the job is done, where **the process is visible**.

The reasoning is simple. AI can produce an answer. It cannot produce a
candidate's lived reasoning about a specific, ambiguous problem under
follow-up. When you can see how someone worked — what they tried first, what
they abandoned, where they slowed down, what they checked before calling it
done — you are looking at evidence AI cannot manufacture, because it is
evidence about a person's judgement rather than about an output.

This also fixes the AI question. You stop asking whether they used AI and start
seeing *how*. Did they take the first suggestion or interrogate it? Did they
notice the plausible-but-wrong answer? Prompting well and auditing output are
job skills now. A process you can observe grades fluency; an artifact you
receive in an email cannot.

## What this looks like in practice

- A task specific to the role, not a puzzle from a library
- Done in the candidate's own environment, with their real tools
- The session captured, so the work is reviewable afterward
- Scored against a rubric fixed before anyone looked
- Every score traceable to something that actually happened

That last one matters more than it sounds. The failure of unstructured
interviews was never that people lacked opinions — it was that opinions were
untraceable. A score with no source is a feeling.

## Where Truly fits

[SHORT — three sentences. Truly generates the task from the job description,
candidates work on their own machines, the session becomes a rubric-scored
report. Then a link to the demo. Resist expanding this; the page earns trust by
being useful, and a page that turns into a pitch halfway through loses it.]

---

## FLAGGED — resolve before publishing

1. **Unverified statistic.** A search result claimed "38.5% of 19,368 real
   interviews in 2026 showed AI-assisted cheating signals." I did not trace it
   to a primary source and have deliberately kept it out of the copy. Either
   verify it and cite the original, or leave it out. Do not publish it on the
   strength of a snippet.

2. **Product claims need checking.** The page asserts Truly captures the full
   session, scores against a pre-set rubric, and traces every score to
   evidence. That matches the landing page, but someone who knows the product
   must confirm it is true today, not roadmap.

3. **The competitor section is deliberately absent.** No naming HackerRank or
   CodeSignal. A comparison page is a different page for a different query, and
   mixing them weakens both.

4. **Schema.** If this ships, it wants `Article` or `BlogPosting` with a real
   author. Do not add FAQPage — Google retired FAQ rich results in May 2026.

5. **Internal linking.** This page should link to the homepage with descriptive
   anchor text, and the homepage should link back. The current site has zero
   internal links, which is part of why one page cannot rank for a category.
