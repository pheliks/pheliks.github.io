# Viktor Zamaraev’s website

A static Eleventy site, published to GitHub Pages. Node.js replaces the old Ruby/Jekyll toolchain. All existing public page paths, content, section anchors, images, downloads and the custom domain are retained. The navigation remains Home, Publications, Talks and Teaching.

## Publish the restoration

1. In this repository’s **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Keep the existing custom domain, `www.victorzamaraev.com`, and DNS records.
2. Merge the restoration pull request into `master`.
3. The **Build and publish website** workflow builds, checks and deploys the site. If necessary, run it manually from the Actions tab, selecting `master`.

After that one-time setup, committing or merging changes to `master` automatically updates the website. Pull requests run the build and checks without deploying. A failed build does not replace the last successful deployment. The deploy job checks that Pages uses GitHub Actions, then verifies the live homepage, publications, talks, teaching and stylesheet. Branch publishing must stay disabled: its Jekyll publisher can overwrite the Eleventy deployment with incomplete pages.

The old `Source` branch is retained as historical reference; **make future edits on `master`**. There is no longer a separate manual source/build/push process. Do not commit `_site/` or `node_modules/`.

## Update content

The existing YAML records and their fields are retained:

| Content | Edit |
| --- | --- |
| Biography | `src/_data/records/bioRecords.yml` |
| Journal and conference publications | `src/_data/records/publications.yml` |
| Talks | `src/_data/records/talks.yml` |
| Teaching | `src/_data/records/teaching.yml` |
| Main navigation | `src/_data/records/navigation.yml` |
| Shared profile and layout | `src/_includes/base.njk` |
| Workshop and other pages | `src/<existing-page-path>/index.md` |
| Blog posts | `src/YYYY/MM/DD/<slug>.md` |
| Images and PDF downloads | `assets/` |
| Minimal responsive design | `src/assets/site.css` |

To add a publication or talk, copy a neighboring YAML record and edit its fields. List order controls display order. Publication numbering is generated automatically. Quote values containing colons and keep indentation consistent.

The four main pages use the original Liquid templates and YAML. Existing pages contain HTML in `.md` files, with an explicit Liquid or Nunjucks renderer in `templateEngineOverride`. This prevents Markdown from inserting paragraph tags inside HTML lists and grids. Edit these pages as HTML; their published wording, links and manually edited workshop details are preserved. New pages and posts can use regular Markdown by omitting `templateEngineOverride`. Keep each page’s `permalink` unchanged to preserve existing links, and retain heading `id` values when editing a section.

New posts can be written entirely in Markdown. For example, add `src/2026/11/05/new-post.md`:

```yaml
---
layout: base.njk
title: New post
permalink: /2026/11/05/new-post.html
description: A short description
tags: [posts]
date: 2026-11-05
author: true
---
```

Write the article below that block. The Atom feed and sitemap update automatically. New images go into `assets/images/` and use paths such as `/assets/images/example.jpg`.

## Preview and validate

Install Node.js 24 (also recorded in `.nvmrc`), then:

```sh
npm ci
npm start
```

Open the local address printed by Eleventy. Content updates rebuild automatically. To run the production build and checks:

```sh
npm test
```

The checks cover all 13 original page paths, local links, fragment targets, images, canonical URLs, the feed, sitemap and custom domain. They do not assert that external websites are still online.

`npm run verify:migration` additionally compares the restored pages with a snapshot of the published content at commit `2c71de4`. This is a one-time preservation audit: it will intentionally report differences after you edit existing content. The regular publishing workflow runs `npm test`, which allows content changes and new posts.

## Restoration findings

- `Source` held Jekyll 4.0.1, Bundler 2.1.4 and Minimal Mistakes 4.19.3 dependencies; `master` held generated HTML, with additional manual edits and a duplicate `_site` directory.
- Several published canonical URLs, the sitemap and metadata pointed at `http://localhost:4000`. These now use the existing custom domain.
- The YAML templates reproduce the four published main pages without losing text or links. Workshop pages and articles were recovered from the published branch to preserve manual edits, including the 2023 minisymposium details.
- Existing historical About and Jekyll example pages remain accessible. The 404 message is preserved in the shared layout.
- No biographical facts, affiliations, dates or external destinations were modernized. External links may lead to old or unavailable pages; they were deliberately retained.
- The new layout uses system fonts, responsive navigation and local CSS. It needs no client-side JavaScript or third-party theme assets. The retired Universal Analytics integration is no longer loaded.

Dependencies are locked in `package-lock.json`. Dependabot proposes monthly dependency and GitHub Actions updates; review and merge those after checks pass.
