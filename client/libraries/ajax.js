"use strict";

define('ajax',['jquery','render'],function($,_ren){

  var _ajax = (() => {

    /* Pulling Data from DBS */
    let get = () => {
      $.get('/api/hobbies/',function(data){
        _ren.show(data);
      });
    };

    /*
    $.ajax({
        url: '/script.cgi',
        type: 'DELETE',
         success: function(result) {
        // Do something with the result
        }
    });

    */

    return {
      info: get
    }

  })();

  return _ajax;
});
