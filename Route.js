Router.map(function() {

    this.route('/', function() {
        Router.go('Meteor');
    });

    this.route('/Magic', function() {
        this.render('hello');
    });

    this.route('/Meteor', function() {
        this.render('welcome');
    });

});