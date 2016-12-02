define(['jquery','events','ajax'],function($,events,_ajax){
  events.toggleClass('.menu_icon','click','.menu','on',true,'.logo');
  _ajax.info();
});
