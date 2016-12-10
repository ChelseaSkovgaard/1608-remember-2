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

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(find('.spec-individual-reminder-item').length, 1);
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});

test('clicking the create new reminder button redirects the url', function(assert){

  visit('/');
  click('#spec-create-new-reminder-btn');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
    assert.equal(find('.new-reminder-input').length, 3);
  });
});

test('clicking the save reminder button renders a new reminder', function(assert){

    visit('/');
    click('#spec-create-new-reminder-btn');
    andThen(function() {
      assert.equal(currentURL(), '/reminders/new');
    });
    fillIn('.spec-title-input', 'New Reminder');
    fillIn('.spec-date-input', '2016-12-10');
    fillIn('.spec-note-input', 'Do not forget!');
    click('#spec-save-reminder-btn');
    andThen(function(){
      assert.equal(find('.spec-reminder-item').length, 1, 'should show one newly added reminder');
    });
    click('.spec-reminder-item');
    andThen(function(){
      assert.equal(find('.spec-reminder-title').text().trim(), 'New Reminder', 'should show new reminder title');
      assert.equal(find('.spec-reminder-date').text().trim(), 'Fri Dec 09 2016 17:00:00 GMT-0700 (MST)', 'should show formatted date');
      assert.equal(find('.spec-reminder-notes').text().trim(), 'Do not forget!', 'should show new reminder notes');
    });
  });
