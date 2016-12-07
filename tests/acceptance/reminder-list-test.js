/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

skip('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('.spec-reminder-item');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(find('.spec-individual-reminder-item').length, 1);
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});
