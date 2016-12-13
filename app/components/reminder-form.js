import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    saveNewReminder(model) {
       model.date = model.date || new Date();
       model.save()
      this.sendAction()
    }
  }
});
