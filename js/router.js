Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    // this is some fucking bullshit.  Basically saying it's the same model as the TodosRoute
    // Fuck ember.  Could the syntax really not be `this.modelFor('TodosRoute') or something?
    // Kill myself
    // </rant>
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },

  renderTemplate: function(controller) {
    this.render('todos/index', { controller: controller });
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },

  renderTemplate: function(controller) {
    this.render('todos/index', { controller: controller });
  }
});