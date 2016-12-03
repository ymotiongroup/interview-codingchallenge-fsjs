"use strict";

define('render',['jquery','ajax'],function($,_ajax){

  const _ren = ( () => {

    /* Pulling Data From DBS */
    let _getting = (data) => {
      let config = {
        parent:'.write'
      }
      for(var i in data){
        let html = `
          <div class="hobbies">
            <div>
            <strong>${data[i].hobbie}</strong>
            <span>${data[i].hobbie_type}</span>
            <i>${data[i]._id}</i>
            </div>
            <div>
              <div class="update" id="${data[i]._id}"></div>
              <div class="remove"></div>
            </div>
          </div>
        `;
        $(config.parent).append(html);
      }
    };

    let _reload = (data) => {
      let config = {
        parent: '.write'
      };
      $(config.parent).html();
      for(var i in data){
        let html = `
          <div class="hobbies">
            <div>
            <strong>${data[i].hobbie}</strong>
            <span>${data[i].hobbie_type}</span>
            <i>${data[i]._id}</i>
            </div>
            <div>
              <div class="update" id="${data[i]._id}"></div>
              <div class="remove"></div>
            </div>
          </div>
        `;
        $(config.parent).append(html);
      }
    }

    return {
      show: _getting,
      reload: _reload
    }

  })();

  return _ren;
});
