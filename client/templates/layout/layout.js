 Template.layout.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.layout.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });