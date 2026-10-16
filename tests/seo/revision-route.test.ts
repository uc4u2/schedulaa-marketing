import assert from "node:assert/strict";
import test from "node:test";

import { GET } from "../../src/app/api/revision/route";

test("revision endpoint exposes only the non-secret Render commit", async () => {
  const originalCommit = process.env.RENDER_GIT_COMMIT;
  process.env.RENDER_GIT_COMMIT = "0123456789abcdef0123456789abcdef01234567";

  try {
    const response = GET();
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.deepEqual(await response.json(), {
      commit: "0123456789abcdef0123456789abcdef01234567",
    });
  } finally {
    if (originalCommit === undefined) {
      delete process.env.RENDER_GIT_COMMIT;
    } else {
      process.env.RENDER_GIT_COMMIT = originalCommit;
    }
  }
});

test("revision endpoint returns null when Render has not supplied a commit", async () => {
  const originalCommit = process.env.RENDER_GIT_COMMIT;
  delete process.env.RENDER_GIT_COMMIT;

  try {
    const response = GET();
    assert.deepEqual(await response.json(), { commit: null });
  } finally {
    if (originalCommit !== undefined) {
      process.env.RENDER_GIT_COMMIT = originalCommit;
    }
  }
});
