import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('reminder', params.reminder_id);
  },
  actions: {
    deleteReminder(model) {
      model.destroyRecord('reminder', model.id);
      this.transitionTo('reminders');
    }
  }
});
