import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  name: '',
  date: '',
  notes: '',

  actions: {
    saveNewReminder() {
       const reminder = this.getProperties('name', 'date', 'notes');
       this.get('store').createRecord('reminder', reminder).save().then(() => {
         this.setProperties({name: '', date: '', notes: ''});
       }
     )
    }
  }
});
