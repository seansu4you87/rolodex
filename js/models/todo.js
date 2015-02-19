Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Decide it sucks and don\'t use it!',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Learn React.js',
    isCompleted: false
  },
  {
    id: 4,
    title: 'Profit!',
    isCompleted: false
  }
];