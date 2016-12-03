define(['jquery','events','ajax'],function($,events,_ajax){
  _ajax.info();
  events.toggleClass('.menu_icon','click','.menu','on',true,'.logo');
  events.update();
});
