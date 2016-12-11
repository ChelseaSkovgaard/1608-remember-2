import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder() {
       const reminder = this.getProperties('title', 'date', 'notes');
       reminder.date = new Date(reminder.date);
       this.get('store').findRecord('reminder', 1).then(() => {
         this.set('title','');
         this.set('date', '');
         this.set('notes', '');
       });
    }
  }
});
