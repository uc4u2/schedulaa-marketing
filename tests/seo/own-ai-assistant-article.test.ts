import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import sitemap from "../../src/app/sitemap";
import posts from "../../src/legacy-content/blog/posts.js";

type ArticleLink = { label: string; href: string };
type ArticleFaq = { question: string; answer: string };
type ArticleSubsection = { links?: ArticleLink[] };
type ArticleSection = {
  image?: { src: string; alt: string; width?: number; height?: number };
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

test("own-assistant article publishes the human rewrite and its required metadata", () => {
  assert.ok(article);
  assert.equal(
    article.seoTitle,
    "AI assistant for service businesses | Schedulaa",
  );
  assert.ok(article.seoTitle.length <= 60);
  assert.equal(
    article.description,
    "Schedulaa connects your own AI assistant — Muse, ChatGPT or Grok — to your bookings, invoices, estimates, schedules and website. You approve anything that matters.",
  );
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
  assert.match(copy, /October 17–18, 2026/);
  assert.match(copy, /Nothing happens without your OK/);
  assert.match(copy, /matched Schedulaa's own numbers to the cent/);
  assert.doesNotMatch(copy, /read-only|customers\.contact\.read|assistant_whoami|granted scopes/i);
  assert.match(copy, /On October 19 we said this publicly/);
  assert.doesNotMatch(copy, /nobody else has (AI|MCP)/i);

  assert.equal(article.inlineWaitlist, true);
});

test("own-assistant article stays within the requested editorial length and includes required commands", () => {
  const sectionText = flattenStrings(article.sections).join(" ");
  const wordCount = sectionText.trim().split(/\s+/).length;
  assert.ok(
    wordCount >= 900,
    `expected at least 900 words, received ${wordCount}`,
  );
  assert.ok(
    wordCount <= 1200,
    `expected no more than 1200 words, received ${wordCount}`,
  );

  for (const command of [
    "Book Sarah for Friday at 2.",
    "Nothing happens without your OK",
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
      "Can I connect ChatGPT, Muse or Grok to Schedulaa?",
      "What can it actually do for me, day to day?",
      "Is it safe to let an AI assistant touch my business?",
      "How is this different from an AI receptionist?",
      "When can I try it?",
    ],
  );

  assert.match(flattenStrings(article.sections).join(" "), /Join the early-access waitlist below/);
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
