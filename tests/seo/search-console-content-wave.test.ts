import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import posts from "../../src/legacy-content/blog/posts.js";

const readSource = (path: string) =>
  readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");

test("cross-border payroll guide owns the validated Search Console intent with explicit boundaries", () => {
  const post = (posts as any[]).find(
    (item) => item.slug === "canada-us-payroll-one-system",
  );
  assert.ok(post);
  assert.match(
    post.seoTitle,
    /cross-border companies handle payroll in Canada/i,
  );
  assert.match(post.h1, /cross-border companies handle payroll/i);
  assert.equal(post.dateModified, "2026-10-08");

  const copy = JSON.stringify(post);
  assert.match(copy, /Canada excluding Quebec/i);
  assert.match(copy, /Full U\.S\. payroll finalization is currently limited/i);
  assert.match(
    copy,
    /does not promise government e-filing, automatic remittance/i,
  );
  assert.match(copy, /\/payroll\/canada/);
  assert.match(copy, /\/payroll\/usa/);
});

test("cross-border guide has Article/Breadcrumb schema and contextual payroll links", () => {
  const blogSource = readSource("src/app/blog/[slug]/page.tsx");
  assert.match(
    blogSource,
    /post\.slug === 'canada-us-payroll-one-system'[\s\S]*?target: 'payroll'/,
  );
  assert.match(blogSource, /isCrossBorderPayrollArticle/);
  assert.match(blogSource, /cross-border-payroll-article-jsonld/);
  assert.match(blogSource, /cross-border-payroll-breadcrumb-jsonld/);

  const payrollSource = readSource("src/legacy-content/payroll/config.js");
  assert.match(payrollSource, /Canada–U\.S\. payroll guide/);
  assert.match(payrollSource, /\/blog\/canada-us-payroll-one-system/);
});
