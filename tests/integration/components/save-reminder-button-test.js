import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('save-reminder-button', 'Integration | Component | save reminder button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{save-reminder-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#save-reminder-button}}
      template block text
    {{/save-reminder-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
