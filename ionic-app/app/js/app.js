(function(){
  angular
  .module(
    'ionic-app',
    [
      //app dependencies
      'ionic',
      'pascalprecht.translate',
      'ngCookies',
      //app modules dependencies
      'ionic-app.menu',
      'ionic-app.home'
    ]);
})();
