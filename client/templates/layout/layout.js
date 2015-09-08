Template.layout.rendered = function(){
  console.log('layout rendered');
  $('#testInput').pickadate();
    $('.datepicker').pickadate();

//     var $input = $('.datepicker').pickadate();
// var picker = $input.pickadate('picker');
// picker.on('open', function() {
//     console.log('Opened.. and here I am!');
// })
// $('button').on('click', function(event) {
//     event.stopPropagation();
//     picker.open();
// });
};

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