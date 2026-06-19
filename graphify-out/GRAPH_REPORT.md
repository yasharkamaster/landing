# Graph Report - landing  (2026-06-20)

## Corpus Check
- 27 files · ~500,223 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 190 nodes · 229 edges · 20 communities (18 shown, 2 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `be2b203d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `asset()` - 11 edges
2. `Deployment Guide for Dokploy` - 11 edges
3. `Troubleshooting: Connection Refused Error` - 11 edges
4. `Quick Dokploy Deployment Guide` - 9 edges
5. `🚀 Step-by-Step Deployment` - 9 edges
6. `Step 2: Configure Dokploy` - 5 edges
7. `Troubleshooting` - 5 edges
8. `🐛 Troubleshooting` - 5 edges
9. `🔍 Common Issues & Solutions` - 5 edges
10. `getLandingComponent()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `a()` --calls--> `asset()`  [INFERRED]
  components/landings/clinic/ClinicLanding.tsx → lib/landing-assets.ts
- `a()` --calls--> `asset()`  [INFERRED]
  components/landings/food/FoodLanding.tsx → lib/landing-assets.ts
- `a()` --calls--> `asset()`  [INFERRED]
  components/landings/luxury/LuxuryLanding.tsx → lib/landing-assets.ts
- `a()` --calls--> `asset()`  [INFERRED]
  components/landings/professional/ProfessionalLanding.tsx → lib/landing-assets.ts
- `foodAsset()` --calls--> `asset()`  [INFERRED]
  components/landings/food/FoodLanding.tsx → lib/landing-assets.ts

## Communities (20 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (25): 1.1 Initialize Git (if not already done), 1.2 Create GitHub Repository, 1.3 Push to GitHub, Build Errors, code:bash (git init), code:bash (git remote add origin https://github.com/YOUR_USERNAME/YOUR_), code:bash (npm install), code:bash (# Build the Docker image) (+17 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (6): a(), a(), foodAsset(), asset(), a(), a()

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (18): code:json ({), 🔍 Common Issues & Solutions, Error: `ERR_CONNECTION_REFUSED` on `165.232.187.10:4000`, Issue 1: Application Not Running, Issue 2: Wrong Port, Issue 3: Firewall/Security Group, Issue 4: Application Crashed, Option A: Check Dokploy's Assigned URL (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (7): convertAttrs(), escapeJsxText(), findMatchingClose(), generateLandingComponent(), htmlToJsx(), indentJsx(), styleStringToJsx()

### Community 5 - "Community 5"
Cohesion: 0.14
Nodes (13): 🌐 Access Your Landing Pages, Application Won't Start, Build Fails, Can't Access Landing Pages, code:bash (git add .), Form Submissions Not Working, 📋 Prerequisites Checklist, 💡 Pro Tips (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.27
Nodes (9): onExternalLoad(), refreshTailwind(), getAllLandingSlugs(), getLandingComponent(), getAllLandingSlugs(), getLandingContent(), generateMetadata(), generateStaticParams() (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (12): code:block1 (PORT=4000), Option A: Node.js Deployment (Recommended for simplicity), Option B: Docker Deployment (If you prefer containers), Step 1: Access Dokploy Dashboard, Step 2: Create New Application, Step 3: Connect GitHub Repository, Step 4: Configure Application Type, Step 5: Set Environment Variables (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (8): 2.1 Access Dokploy Dashboard, 2.2 Create New Application, 2.3 Configure Application Settings, 2.4 Set Environment Variables, code:bash (npm install), code:bash (npm start), code:block5 (PORT=4000), Step 2: Configure Dokploy

## Knowledge Gaps
- **54 isolated node(s):** `Prerequisites`, `code:bash (git init)`, `1.2 Create GitHub Repository`, `code:bash (git remote add origin https://github.com/YOUR_USERNAME/YOUR_)`, `2.1 Access Dokploy Dashboard` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Deployment Guide for Dokploy` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `Quick Dokploy Deployment Guide` connect `Community 5` to `Community 7`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `🚀 Step-by-Step Deployment` connect `Community 7` to `Community 5`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `asset()` (e.g. with `a()` and `a()`) actually correct?**
  _`asset()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Prerequisites`, `code:bash (git init)`, `1.2 Create GitHub Repository` to the rest of the system?**
  _54 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._