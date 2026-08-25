# Query map — where Truly can actually win

Researched 2026-08-25 from live SERPs.

**No volume data.** No DataForSEO, Google Ads, or Search Console access, so
there are no search volumes here and none should be invented. What follows is
SERP evidence — who currently ranks and how strong they are — which is the
better signal for a site with no authority anyway.

## The three candidate clusters

### 1. "HackerRank alternatives" — DO NOT TARGET FIRST
Every result is a high-authority vendor or review site: G2, CodeSignal,
CoderPad, HackerEarth, Testlify. These are competitor-owned listicles backed by
years of domain authority. A brand-new page loses here for a long time, and the
one position worth having (a comparison page) is the one G2 already owns.

Revisit after the site has authority. Not a starting point.

### 2. "AI-assisted coding interview" — WRONG AUDIENCE
Dominated by candidate-side content: interviewing.io, Exponent, IGotAnOffer,
HelloInterview, all "how to prepare for Meta/Google's AI-assisted interview."
These readers are job seekers, not buyers. Ranking here brings traffic that
will never book a demo.

HackerRank holds the one employer-side piece in this SERP.

### 3. AI cheating in hiring assessments — **TARGET THIS**
Employer-intent, and the competition is weak. The ranking pages are small
vendor blogs: Glider AI, Testlify, wecreateproblems, matchcard.co.uk,
qbsglobal.blog, Hire Success. No G2, no HackerRank, no CodeSignal.

The decisive detail: the consensus answer in those results is that the most
cheat-resistant instrument is **a work sample — a realistic task mirroring the
job, followed by a conversation about it.** That is a description of Truly's
product. The query's best honest answer and the thing being sold are the same,
which is the rare case where content marketing is not a stretch.

Representative queries in the cluster:
- how to stop AI cheating in technical interviews
- how candidates use AI to cheat assessments
- AI-proof technical interview / assessment
- work sample test vs take-home assignment
- can you still use take-home assignments in 2026

## Recommended first page

One page against cluster 3, arguing the position the SERP already agrees with:
detection and proctoring lose; observation wins. Draft in
`docs/draft-ai-proof-hiring.md`.

## What shipping it requires

The site is a single-page Vite SPA with no router. A second URL needs either a
router plus per-route prerendering (scripts/prerender.js already does the hard
part and would extend to a route list), or a second HTML entry point. Estimate
half a day, mostly wiring rather than content.
