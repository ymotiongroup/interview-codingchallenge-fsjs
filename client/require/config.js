// config file
require.config({
  paths: {
     jquery: '/bower_components/jquery/dist/jquery.min',
  },
  urlArgs: "bust=" + (new Date()).getTime()
});

// starting
require(['config'],function(){
  require(['init']);
});
