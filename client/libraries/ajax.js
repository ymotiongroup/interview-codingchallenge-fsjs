"use strict";

define('ajax',['jquery','render'],function($,_ren){

  var _ajax = (() => {

    /* Pulling Data from DBS */
    let get = () => {
      $.get('/api/hobbies/',function(data){
        _ren.show(data);
      });
    };

    let _reload = () => {
      $.get('/api/hobbies/',function(data){
        _ren.reload(data);
      });
    }

    let updating = (id) => {
      $.ajax({
          url: '/api/hobbies/' + id,
          type: 'PUT',
          contentType: 'application/json',
          data: '{ "hobbie": "Put Hobbie","hobbie_type": "put Hobbie Type" }',
           success: function(result) {
              _ajax.reload()
          }
      });
    }

    return {
      info: get,
      update: updating,
      reload: _reload
    }

  })();

  return _ajax;
});
