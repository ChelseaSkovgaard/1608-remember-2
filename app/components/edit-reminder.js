import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder() {
      const edits = this.getProperties('editTitle', 'editDate', 'editNotes');
      console.log(edits)
       this.get('store').findRecord('reminder', 1).then(() => {
         this.set('title', edits.editTitle);
         this.set('date', edits.editDate);
         this.set('notes', edits.editNotes);
       });
    }
  }
});
