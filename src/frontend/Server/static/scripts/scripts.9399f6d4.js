"use strict";angular.module("corexapodControllerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("corexapodControllerApp").controller("MainCtrl",["$scope","$http",function(a,b){jQuery("li.active").removeClass("active"),jQuery('a[ng-href="#"]').parent("li").addClass("active"),jQuery("table a").click(function(){jQuery("table a").addClass("disabled"),jQuery("#info").addClass("alert-warning");var a=jQuery(this).attr("href");return b.get(a).success(function(){jQuery("#info").removeClass("alert-warning"),jQuery("table a").removeClass("disabled")}).error(function(){jQuery("#info").removeClass("alert-warning").addClass("alert-danger").text("与后台程序连接丢失或机器人无响应"),jQuery("table a").removeClass("disabled")}),!1});var c=function(){b.get("/act/battery").success(function(b){jQuery("#info.alert-danger").removeClass("alert-danger").text("等待用户操作"),jQuery("#battery").css("width",b.battery),jQuery("#battery span").text(b.battery),a.totalUseTime=b.totalUseTime,a.powerCycle=b.powerCycle}).error(function(){jQuery("#info").removeClass("alert-warning").addClass("alert-danger").text("与后台程序连接丢失或机器人无响应")})};setTimeout(c,5e3),c()}]),angular.module("corexapodControllerApp").controller("AboutCtrl",["$scope",function(){jQuery("li.active").removeClass("active"),jQuery('a[ng-href="#/about"]').parent("li").addClass("active")}]);