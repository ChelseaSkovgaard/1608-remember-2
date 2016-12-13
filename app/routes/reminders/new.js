import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('reminder');
  },
  actions: {
    saveNewReminder() {
      console.log('fuck')
      this.transitionTo('reminders')
    }
  }
});
