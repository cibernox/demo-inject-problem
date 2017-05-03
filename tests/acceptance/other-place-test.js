import { test } from 'qunit';
import moduleForAcceptance from 'demo-inject-problem/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | other-place');

test('visiting /other-place', function(assert) {
  visit('/other-place');

  andThen(function() {
    assert.equal(currentURL(), '/other-place');
  });
});
