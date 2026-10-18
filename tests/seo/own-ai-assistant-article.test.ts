import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import sitemap from "../../src/app/sitemap";
import posts from "../../src/legacy-content/blog/posts.js";

type ArticleLink = { label: string; href: string };
type ArticleFaq = { question: string; answer: string };
type ArticleSubsection = { links?: ArticleLink[] };
type ArticleSection = {
  faq?: ArticleFaq[];
  links?: ArticleLink[];
  subsections?: ArticleSubsection[];
};
type ArticlePost = {
  slug: string;
  seoTitle: string;
  description: string;
  h1: string;
  author: string;
  datePublished: string;
  articleSchema: boolean;
  faqSchema: boolean;
  inlineWaitlist: boolean;
  sections: ArticleSection[];
};

const slug = "first-platform-your-own-ai-assistant-can-operate";
const article = (posts as unknown as ArticlePost[]).find(
  (post) => post.slug === slug,
);
if (!article) {
  throw new Error(`Missing blog article: ${slug}`);
}

const flattenStrings = (value: unknown): string[] => {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap(flattenStrings);
  }
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(flattenStrings);
  }
  return [];
};

test("own-assistant article publishes the reviewed metadata and honest launch boundary", () => {
  assert.ok(article);
  assert.equal(
    article.seoTitle,
    "AI assistant for service businesses | Schedulaa",
  );
  assert.ok(article.seoTitle.length <= 60);
  assert.equal(article.description.length, 160);
  assert.equal(
    article.h1,
    "The First All-In-One Platform Your Own AI Assistant Can Actually Operate",
  );
  assert.equal(article.author, "Joseph — Founder, Schedulaa");
  assert.equal(article.datePublished, "2026-10-19");
  assert.equal(article.articleSchema, true);
  assert.equal(article.faqSchema, true);
  assert.equal(article.inlineWaitlist, true);

  const copy = flattenStrings(article.sections).join(" ");
  assert.match(copy, /October 17, 2026/);
  assert.match(copy, /assistant_whoami/);
  assert.match(
    copy,
    /assistant\.whoami, customers\.read, and customers\.contact\.read/,
  );
  assert.match(copy, /full breadth is not live today/i);
  assert.match(copy, /rolling out in batches/i);
  assert.match(copy, /October 19, 2026/);
  assert.doesNotMatch(copy, /nobody else has (AI|MCP)/i);
});

test("own-assistant article stays within the requested editorial length and includes required commands", () => {
  const sectionText = flattenStrings(article.sections).join(" ");
  const wordCount = sectionText.trim().split(/\s+/).length;
  assert.ok(
    wordCount >= 1200,
    `expected at least 1200 words, received ${wordCount}`,
  );
  assert.ok(
    wordCount <= 1800,
    `expected no more than 1800 words, received ${wordCount}`,
  );

  for (const command of [
    "Change my homepage photo and button colour.",
    "Book Sarah for Friday at 2.",
    "At 9 AM and 5 PM, tell me who has a shift, who clocked in, who is late, and who forgot to clock out.",
  ]) {
    assert.match(
      sectionText,
      new RegExp(command.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  }
});

test("own-assistant article has the required FAQ and verified internal destinations", () => {
  const faq = article.sections.flatMap((section) => section.faq || []);
  assert.deepEqual(
    faq.map((item) => item.question),
    [
      "Can I connect ChatGPT / Muse / Grok to my booking software?",
      "What can my AI assistant actually do in Schedulaa?",
      "Is it safe to let an AI assistant operate my business software?",
      "How is this different from an AI receptionist?",
      "When can I try it?",
    ],
  );

  const internalLinks = article.sections
    .flatMap((section) => [
      ...(section.links || []),
      ...(section.subsections || []).flatMap(
        (subsection) => subsection.links || [],
      ),
    ])
    .map((link) => link.href);
  assert.deepEqual(internalLinks.sort(), [
    "#early-access",
    "/booking",
    "/business-finance/invoices",
    "/website-builder",
  ]);
});

test("own-assistant article is indexable in the English sitemap and uses shared schema and waitlist rendering", () => {
  const expectedUrl = `https://www.schedulaa.com/en/blog/${slug}`;
  const matches = sitemap().filter((entry) => entry.url === expectedUrl);
  assert.equal(matches.length, 1);
  assert.equal(
    sitemap().some(
      (entry) => entry.url === `https://www.schedulaa.com/fa/blog/${slug}`,
    ),
    false,
  );

  const pageSource = fs.readFileSync("src/app/blog/[slug]/page.tsx", "utf8");
  assert.match(pageSource, /post\.articleSchema/);
  assert.match(pageSource, /post\.faqSchema/);
  assert.match(pageSource, /OwnAiEarlyAccessForm/);
  assert.match(pageSource, /schedulaa-logo-navbar\.png/);

  const formSource = fs.readFileSync(
    "src/components/blog/OwnAiEarlyAccessForm.tsx",
    "utf8",
  );
  assert.match(
    formSource,
    /What is the one job you would hand your assistant first\?/,
  );
  assert.match(formSource, /openMarketingLeadWidget/);
  assert.match(formSource, /\/api\/marketing-leads\/chatbot/);
});
