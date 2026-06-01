import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const {
  parseSseResponsesImageItemsForTest,
  extractResponsesStreamResponseIdForTest,
} = require('../backend/src/routes/proxy.js');

test('SUB2API responses SSE parser extracts response id from created event without image items', () => {
  const text = [
    'event: response.created',
    'data: {"type":"response.created","response":{"id":"resp_0c8a3d8253be949d016a1d1cc5fdec819bb9c1cf94a533d089","object":"response","status":"in_progress"}}',
    '',
  ].join('\n');

  assert.deepEqual(parseSseResponsesImageItemsForTest(text), []);
  assert.equal(
    extractResponsesStreamResponseIdForTest(text),
    'resp_0c8a3d8253be949d016a1d1cc5fdec819bb9c1cf94a533d089',
  );
});
