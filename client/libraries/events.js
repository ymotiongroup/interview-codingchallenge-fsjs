"use strict";

define("events",["jquery"], function($){

  var events = (function() {

    let  toggleClass = function(parent,event,child,style,second,child_2) {
          var config = {
            parent: parent,
            event: event,
            child: child,
            class: style,
            second: second,
            child_2 : child_2
          }
            $(config.parent).on(config.event,function() {
              $(config.child).toggleClass(config.class);
                config.second ?
                  $(child_2).toggleClass(config.class)
                  :
                  console.log('not allowed')
            });
        }

        return {
          toggleClass: toggleClass
        }
  })();

   return events;

});
