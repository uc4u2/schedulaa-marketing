import assert from 'node:assert/strict';
import test from 'node:test';

import { readAttributionFromSearch } from '../../src/utils/attribution';

test('campaign attribution keeps only the approved non-PII keys', () => {
  const result = readAttributionFromSearch(
    '?utm_source=google&utm_medium=cpc&utm_campaign=salon&utm_term=booking&utm_content=hero&gclid=test-123&email=person%40example.com&phone=555',
  );
  assert.deepEqual(result, {
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'salon',
    utm_term: 'booking',
    utm_content: 'hero',
    gclid: 'test-123',
  });
  assert.equal('email' in result, false);
  assert.equal('phone' in result, false);
});

