if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 2);
    }
  });

  lancy = function(){
    console.log('Hello World')
  };

  Template.welcome.rendered = function() {
    bootbox.alert("Hello world!");
  }

  Template.welcome.events({
    'click .test': function () {
      Router.go('Magic');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
