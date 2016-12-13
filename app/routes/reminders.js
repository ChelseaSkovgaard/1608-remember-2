import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('reminder');
  },

  actions: {
    deleteReminder(model) {
      let reminderToDelete = this.get('store').peekRecord('reminder',  model.id);
       reminderToDelete.destroyRecord('reminder', model.id);
     }
   }
});
