"use strict";

define('render',['jquery','ajax'],function($,_ajax){

  const _ren = ( () => {

    /* Pulling Data From DBS */
    let _getting = (data) => {
      let config = {
        parent:'.write'
      }
      console.log(data);
      for(var i in data){
        let html = `
          <div class="hobbies">
            <div>
            <strong>${data[i].hobbie}</strong>
            <span>${data[i].hobbie_type}</span>
            <i>${data[i]._id}</i>
            </div>
            <div>
              <div class="update"></div>
              <div class="remove"></div>
            </div>
          </div>
        `;
        $(config.parent).append(html);
      }
    };

    return {
      show: _getting
    }

  })();

  return _ren;
});
