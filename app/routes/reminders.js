import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('reminder');
  },

  actions: {
    deleteReminder(model) {
      this.get('store').findRecord('reminder',  model.id).then(() => {
       model.destroyRecord('reminder', model.id);
     });
   }
  }
});
