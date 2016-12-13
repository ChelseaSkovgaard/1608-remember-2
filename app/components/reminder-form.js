import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    saveNewReminder(model) {
       model.date = model.date || new Date();
       model.save().then(()=> {
         this.sendAction()
       })
    }
  }
});
