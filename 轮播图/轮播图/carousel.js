/** * Created by mac on 2017/9/12. */ $.carousel = {    iNow : 0,                    //当前图片索引    isStart : false,         //是否开始轮播    interval : null,                liItems : null,                 length : 0,                   //图片长度    oPage : null,                //页码按钮    oBtn : null,                //前后按钮        init : function(banner,oPage,btnBox) {        //初始化对象参数        var _this = this;        this.liItems = $(banner).find('ul').find('li');        this.length = this.liItems.length;        this.oPage = $(banner).find(oPage);        this.oBtn = $(banner).find(btnBox);        //动态创建页码        this.liItems.first('li').css({'opacity': 1, 'z-index': 1}).siblings('li').css({'opacity': 0, 'z-index': 0});        var aDom = '';        for (var i = 0; i < this.length; i++){            aDom += '<li></li>';        }        $(aDom).appendTo(this.oPage);        this.oPage.find('li:first').addClass("num-selected");        // this.oBtn.hide();        //显示前后按钮        $(banner).hover(function (){            _this.stop();            _this.oBtn.fadeIn(100);        }, function (){            _this.start();            _this.oBtn.fadeOut(100);        });        //鼠标移入，显示对应图片        this.oPage.find('li').hover(function (){            _this.stop();            var out = _this.oPage.find('li').filter('.num-selected').index();            _this.iNow = $(this).index();            // console.log(out);            // console.log(_this.iNow);            if(out!=_this.iNow) {                _this.play(out, _this.iNow)            }        }, function (){            _this.start();        });        //显示上一张或下一张        $(btnBox).find('a:last').click(function(){_this.next()});        $(btnBox).find('a:first').click(function(){_this.prev()});        //开始轮播        this.start()    },       //开始函数    start : function(){        if(!this.isStart) {            this.isStart = true;            var _this = this;            this.interval = setInterval(function(){                _this.next();            },2000);        }    },    //停止函数    stop : function (){        clearInterval(this.interval);        this.isStart = false;    },     //向前    prev : function (){        var out = this.iNow;        this.iNow = (--this.iNow + this.length) % this.length;        this.play(out, this.iNow);    },    //向后    next : function (){        var out = this.iNow;        this.iNow = ++this.iNow % this.length;        this.play(out, this.iNow);    },       play : function (out, iNow){        this.length = this.liItems.length;        if(iNow == length){            iNow == 1;        }        this.liItems.eq(out-1).stop().animate({opacity:0,'z-index':0},200).end().eq(iNow-1).stop().animate({opacity:1,'z-index':1},200);        console.log(out);        console.log(iNow);        this.oPage.find('li').removeClass('num-selected').eq(iNow-1).addClass('num-selected');    }};$(function(){　　$.carousel.init('#banner','.inbanner-btn','.banner-page');})