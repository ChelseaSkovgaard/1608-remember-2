import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder() {
      const edits = this.getProperties('title', 'date', 'notes');
      edits.date = new Date(edits.date);
       this.get('store').findRecord('reminder', 1).then((edit) => {
         edit.set('title', edits.title);
         edit.set('date', edits.date);
         edit.set('notes', edits.notes);
        this.setProperties({title: '', date: '', notes: ''});
       });
    }
  }
});
