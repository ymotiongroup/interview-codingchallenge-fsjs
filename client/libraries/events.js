"use strict";

define("events",["jquery","ajax"], function($,_ajax){

  var events = (() => {

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
        };

        let update = () => {
          let config = {
            parent: '.update',
            event: 'click'
          }
          $('.write').find('div').length === 0 ?
            setTimeout(function(){
              $(config.parent).on(config.event, function(){
                  _ajax.update($(this).attr('id'))
              })
            },1500)
            :
            console.log('null')
        };

        return {
          toggleClass: toggleClass,
          update: update
        }
  })();

   return events;

});
