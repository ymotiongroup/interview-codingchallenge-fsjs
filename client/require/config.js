// config file
require.config({
  paths: {
     jquery: '/bower_components/jquery/dist/jquery.min',
     'events': '/libraries/events',
     'ajax': '/libraries/ajax',
     'render': '/libraries/render'
  },
  urlArgs: "bust=" + (new Date()).getTime()
});

// starting
require(['config'],function(){
  require(['init']);
});
