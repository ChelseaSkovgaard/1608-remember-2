import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    saveNewReminder(model) {
      //  const reminder = this.getProperties('title', 'date', 'notes');
       model.date = model.date || new Date();
      //  this.get('store').createRecord('reminder', model)
      console.log('yay')
       model.save().then(()=> {
         this.sendAction()
       })
    }
 //    editReminder(model) {
 //      console.log(model)
 //   const edits = this.getProperties('title', 'date', 'notes');
 //   edits.date = edits.date || new Date(edits.date);
 //    this.get('store').findRecord('reminder', model.id).then((edit) => {
 //      edit.set('title', edits.title);
 //      edit.set('date', edits.date);
 //      edit.set('notes', edits.notes);
 //     this.setProperties({title: '', date: '', notes: ''});
 //    });
 // }
}
});
