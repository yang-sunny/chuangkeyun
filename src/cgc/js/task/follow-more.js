//关注更多

//获取关注更多左侧bar
vm.getFollowMoreBar = function() {
  vm.data.lastId = [];
  // mock

  // var res = {
  //   "message": "",
  //   "result": [{
  //         "id": 2,
  //             "name": "全部",
  //                 "sortnum": 1,
  //                     "usercount": 59
  //   },{
  //         "id": 2,
  //             "name": "全部",
  //                 "sortnum": 1,
  //                     "usercount": 59
  //   },{
  //         "id": 2,
  //             "name": "全部",
  //                 "sortnum": 1,
  //                     "usercount": 59
  //   },{                  
  //             "name": "自媒体",
  //                 "sortnum": 2,
  //                     "usercount": 16

  //   }],
  //     "returncode": 0

  // }
  //     vm.renderFollowMoreBar(res.result);
  // return;

  //// mock

  vm.ajax({
    url: vm.data.url + '/getCategoryList.json',
    type: "GET",
    data: {},
    dataType: "json",
    success: function(res, xml) {
      res = JSON.parse(res);
      ApiBridge.callNative('ClientViewManager', 'hideLoadingView');

      if (!!res.result.length) {
        vm.renderFollowMoreBar(res.result);
      }
    },
    fail: function(status) {
      ApiBridge.callNative('ClientViewManager', 'loadingFailed', {}, function() {
        ApiBridge.callNative('ClientViewManager', 'showLoadingView');
        vm.getFollowMoreBar();
      })
    }
  });
}


//渲染关注更多左侧列表
vm.renderFollowMoreBar = function(data) {
  var html = '';
  var htmlUl = '';

  data.map(function(v) {
    v['name'] = v['name'].slice(0, 4);
    html += '<li ids=' + v['id'] + '>' + v['name'] + '</li>';
    htmlUl += '<ul class="c-att-ul js-follow-v-list"></ul>'
  })
  htmlUl = htmlUl + '<div class="c-loading"><span class="loading-icon"></span><p>加载中...</p></div>'

  $('.js-follow-more-bar').html(html);
  $('.js-follow-more-bar li').eq(0).addClass('on');
  
  htmlUl += '<div class="c-empty"><img src="./image/pic_empty.png"><p>暂无内容</p></div>';
  $('.js-follow-more-list').html(htmlUl);
  $('.js-follow-more-list ul').eq(0).show();

  //渲染右侧
  $('.js-follow-more-bar li').eq(0).click();
  //vm.getFollowMoreList($('.js-follow-more-bar li').eq(0).attr('ids'));
}

//获取关注更多第一个的关注列表
vm.getFollowMoreList = function(id, index) {
  // vm.data.followMoreId = id;
  vm.data.followMoreIndex = vm.data.followMoreIndex || 0;
  index = index || 0;

  //mock
  // var res = {
  // "message": "",
  // "result": {
  //   "lastId": "100000000|2017/4/27 14:00:05|18759205",
  //   "loadMore": true,
  //   "users": [{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "无限试驾无限试驾无限试驾无限试驾无限试驾",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://www2.autoimg.cn/youchuang/g8/M03/72/85/autohomecar__wKjBz1j-ueuAOxqEAALIEZP3Ens630.jpg"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "无限试驾无限试驾无限试驾无限试驾无限试驾",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://www2.autoimg.cn/youchuang/g8/M03/72/85/autohomecar__wKjBz1j-ueuAOxqEAALIEZP3Ens630.jpg"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://qnwww2.autoimg.cn/youchuang/g23/M11/38/89/autohomecar__wKgFXFjpvNiAZOtqAAtdS-yQuhw839.png?imageView2/1/w/120/h/120"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "无限试驾无限试驾无限试驾无限试驾无限试驾",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://www2.autoimg.cn/youchuang/g8/M03/72/85/autohomecar__wKjBz1j-ueuAOxqEAALIEZP3Ens630.jpg"
  //   },{
  //     "fansnum": "",
  //     "isattention": 1,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 6098853,
  //     "username": "无限试驾",
  //     "userpic": "https://www2.autoimg.cn/youchuang/g8/M03/72/85/autohomecar__wKjBz1j-ueuAOxqEAALIEZP3Ens630.jpg"
  //   },  {
  //     "fansnum": "",
  //     "isattention": 0,
  //     "title": "",
  //     "userdesc": "",
  //     "userid": 18759205,
  //     "username": "卡尔本次",
  //     "userpic": ""

  //   }]

  // },
  // "returncode": 0
  // }
  // vm.data.loadMore[index] = res.result.loadMore;
  // index = index || 0;
  // vm.data.lastId[index] = res.result.lastId;
  // vm.renderFollowMoreList(res.result.users, index);
  // return;

  // mock
  $('.c-empty').hide();
  
  ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
  vm.ajax({
    url: vm.data.url + '/getUserPageByCategory.json',
    type: "GET",
    data: {
      userCategoryId: id,
      size: 20,
      au: user.userAuth || '',
      lastId: vm.data.lastId[index] || ''
    },
    dataType: "json",
    success: function(res, xml) {
      res = JSON.parse(res);
      ApiBridge.callNative('ClientViewManager', 'hideLoadingView');

      if (!!res.result.users.length) {
        vm.data.loadMore[vm.data.followMoreIndex] = res.result.loadMore;

        vm.data.lastId[index] = res.result.lastId;
        vm.renderFollowMoreList(res.result.users, index);
      }else{
        $('.c-loading').hide();
        if(!!vm.data.isLoad){
          $('.c-empty').show();
        }
      }

      // 添加pv
      
      ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
        var eventid ='chejiahao_allbigvlist_page_pv';
        var pagename ='chejiahao_allbigvlist_page';
        var isdata = !!res.result.users.length? 1: 0;
      
        var pvMap = {
          "eventid": eventid,
          "pagename": pagename,
          "isdata": isdata,
          "reportjson": {
              "userid#1": user.userId
          }
        };
        ApiBridge.callNative('ClientPvManager', 'pagePv', pvMap)
      })
    },
    fail: function(status) {}
  });
  });
}

//渲染关注更多list
vm.renderFollowMoreList = function(data, index) {
  index = index || 0;

  // mock
  // var html = '';

  //     try{
  //           data.map(function(v) {
  //             html += '<li objecttypeid="10"> <a objecttypeid="10" class="c-att-href ' + (v['isattention'] == '1' ? 'on' : '') + '" userid=' + v['userid'] + ' username=' + v['username'] + ' userpic=' + v['userpic'] + ' usertitle=' + v['title'] + ' userdesc=' + v['userdesc'] + ' href="javascript:;" usertime=' + v['createtime'] + '>' + (!!v['isattention'] ? '已关注' : '+ 关注') + '</a> <img class="c-att-img" src="' + (v['userpic'] || './image/pic_head.png') + '" alt="" onload="vm.setBagImg(this)"> <h3 class="c-att-title">' + v['username'] + '</h3> <p class="c-att-fans">' + v['fansnum'] + '粉丝</p> <p class="c-att-info">' + v['userdesc'] + '</p> </li>';
  //           })
  //           if (!vm.data.isLoad) {
  //             $('.js-follow-more-list ul').eq(index).append(html);
  //           } else {
  //             $('.js-follow-more-list ul').eq(index).html(html);
  //           }

  //           $('.c-loading').hide();
  //           vm.data.isLoad = true;

  //           if(!vm.data.registLoad){
  //             return;
  //           }
  //           $('.js-follow-more-list').on('scroll',function(e){

  //             vm.data.registLoad = false;

  //             var $target = e.currentTarget;

  //             var $scrollHeight = $($target)[0].scrollHeight;
  //             var $height = $($target).height();
  //             var $scrollTop = $target.scrollTop; 
  //             $docScrollTop =  document.body.scrollTop
  //             if(vm.mobileType() == 'iOS'){
  //               if($scrollTop == 0){
  //                 $(window).scrollTop($docScrollTop)
  //               }
  //             }

  //             if($height + $scrollTop >= $scrollHeight){
                
  //               if(!!vm.data.isLoad){
  //               vm.data.isLoad = false;
  //                 $('.c-loading').show();
                  
  //                 if(!!vm.data.loadMore[vm.data.followMoreIndex]){
  //                   vm.getFollowMoreList(vm.data.followMoreId, vm.data.followMoreIndex);
  //                 }else{
  //                   $('.c-loading').hide();
  //                 }
  //               }
  //             }
  //           })
  //           // debugger
  //           // data.map(function(v,i){
  //           //   if(v['userpic']){
  //           //     debugger
  //           //     $('.js-follow-v-list li').eq(i).find('img').load(function(){
  //           //       $('.js-follow-v-list li').eq(i).find('img').css('background-image', 'none');
  //           //     })
  //           //   }
  //           // })

  //         }catch(e){
  //         }

  //         return;

  // mock

  //本地关注与线上数据判断已关注过滤
  //登录未登录 

  ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
    var html = '';

    // vm.data.userId = user.userId;
    //未登录 
    if (!Number(user.userId)) {
      ApiBridge.callNative("ClientDataManager", "getLocalDataForFollow", {}, function(follow) {

        //本地数据有
        //to do
        if (!!follow.result.length) {
          follow.result.map(function(v) {
            data.map(function(j) {
              if (v['userId'] == j['userid']) {
                j['isattention'] = '1';
              }
            })
          })
        }
        data.map(function(v) {
          html += '<li objecttypeid="10" userid=' + v['userid'] + '> <a objecttypeid="10" class="c-att-href ' + (v['isattention'] == '1' ? 'on' : '') + '" userid=' + v['userid'] + ' username=' + v['username'] + ' userpic=' + v['userpic'] + ' usertitle=' + v['title'] + ' userdesc=' + v['userdesc'] + ' href="javascript:;" usertime=' + v['createtime'] + '>' + (!!v['isattention'] ? '已关注' : '+ 关注') + '</a> <img src="' + (v['userpic'] || './image/pic_head.png') + '" alt="" onload="vm.setBagImg(this)"> <h3 class="c-att-title">' + v['username'] + '</h3> <p class="c-att-fans">' + (!!v['fansnum'] ? (v['fansnum'] + '粉丝') : '') + '</p> <p class="c-att-info">' + v['userdesc'] + '</p> </li>';
        });

        if (!vm.data.isLoad) {
          $('.js-follow-more-list ul').eq(index).append(html);
        } else {
          $('.js-follow-more-list ul').eq(index).html(html);
        }

        $('.c-loading').hide();
        vm.data.isLoad = true;
        if (!vm.data.registLoad) {
          return;
        }
        $('.js-follow-more-list').on('scroll', function(e) {
          ApiBridge.log('js-follow-more-list');
          vm.data.registLoad = false;

          var $target = e.currentTarget;

          var $scrollHeight = $($target)[0].scrollHeight;
          var $height = $($target).height();
          var $scrollTop = $target.scrollTop;

          $docScrollTop =  document.body.scrollTop
          if(vm.mobileType() == 'iOS'){
            if($scrollTop == 0){
              $(window).scrollTop($docScrollTop)
            }
          }

          if ($height + $scrollTop >= $scrollHeight) {
            ApiBridge.log('js-follow-more-list scrollHeight');
            //断网
            ApiBridge.callNative("ClientDataManager", "getNetworkState", {}, function(state) {
              vm.data.isNet = state.result;
              if (!Number(vm.data.isNet)) {
                if (!!vm.data.isLoad) {
                  vm.data.isLoad = false;
                  ApiBridge.callNative("ClientViewManager", "showErrorTipsViewForNoNetWork", {
                    top: 'topNavTop'
                  }, function() {
                    vm.data.isLoad = true;
                  })
                }
              } else {
                ApiBridge.log('vm.data.isLoad else');
                ApiBridge.log(vm.data.isLoad);
                if (!!vm.data.isLoad) {
                  ApiBridge.log('vm.data.isLoad');
                  vm.data.isLoad = false;
                  $('.c-loading').show();
                  ApiBridge.log('##################')
                  ApiBridge.log(vm.data.loadMore);
                  ApiBridge.log(vm.data.followMoreIndex);
                  ApiBridge.log(vm.data.loadMore[vm.data.followMoreIndex])
                  if (!!vm.data.loadMore[vm.data.followMoreIndex]) {
                    ApiBridge.log('vm.data.loadMore');
                    vm.getFollowMoreList(vm.data.followMoreId, vm.data.followMoreIndex);
                  } else {
                    $('.c-loading').hide();
                  }
                }
              }
            })
          }
        })
      })
    } else {
      try {
        data.map(function(v) {
          html += '<li objecttypeid="10" userid=' + v['userid'] + '> <a objecttypeid="10" class="c-att-href ' + (v['isattention'] == '1' ? 'on' : '') + '" userid=' + v['userid'] + ' username=' + v['username'] + ' userpic=' + v['userpic'] + ' usertitle=' + v['title'] + ' userdesc=' + v['userdesc'] + ' href="javascript:;" usertime=' + v['createtime'] + '>' + (!!v['isattention'] ? '已关注' : '+ 关注') + '</a> <img src="' + (v['userpic'] || './image/pic_head.png') + '" alt="" onload="vm.setBagImg(this)"> <h3 class="c-att-title">' + v['username'] + '</h3> <p class="c-att-fans">' + (!!v['fansnum'] ? (v['fansnum'] + '粉丝') : '') + '</p> <p class="c-att-info">' + v['userdesc'] + '</p> </li>';
        })
        if (!vm.data.isLoad) {
          $('.js-follow-more-list ul').eq(index).append(html);
        } else {
          $('.js-follow-more-list ul').eq(index).html(html);
        }

        $('.c-loading').hide();
        vm.data.isLoad = true;

        if (!vm.data.registLoad) {
          return;
        }
        $('.js-follow-more-list').on('scroll', function(e) {
          vm.data.registLoad = false;

          var $target = e.currentTarget;

          var $scrollHeight = $($target)[0].scrollHeight;
          var $height = $($target).height();
          var $scrollTop = $target.scrollTop;

          $docScrollTop =  document.body.scrollTop
          if(vm.mobileType() == 'iOS'){
            if($scrollTop == 0){
              $(window).scrollTop($docScrollTop)
            }
          }
          if ($height + $scrollTop >= $scrollHeight) {

            ApiBridge.callNative("ClientDataManager", "getNetworkState", {}, function(state) {
              vm.data.isNet = state.result;
              if (!Number(vm.data.isNet)) {
                if (!!vm.data.isLoad) {
                  vm.data.isLoad = false;
                  ApiBridge.callNative("ClientViewManager", "showErrorTipsViewForNoNetWork", {
                    top: 'topNavTop'
                  }, function() {
                    vm.data.isLoad = true;
                  })
                }
              } else {
                if (!!vm.data.isLoad) {
                  vm.data.isLoad = false;
                  $('.c-loading').show();
                  ApiBridge.log('##################')
                  ApiBridge.log(vm.data.loadMore);
                  ApiBridge.log(vm.data.followMoreIndex);
                  ApiBridge.log(vm.data.loadMore[vm.data.followMoreIndex])
                  if (!!vm.data.loadMore[vm.data.followMoreIndex]) {
                    vm.getFollowMoreList(vm.data.followMoreId, vm.data.followMoreIndex);
                  } else {
                    $('.c-loading').hide();
                  }
                }
              }
            })
          }
        })

      } catch (e) {}
    }

    //解决第一次加载不能点击问题, ps:具体原因不明,应该和事件委托无关
    //if (!!vm.data.isFollowMore) {
    //  $('.js-follow-more-bar li').eq(0).click();
    //  vm.data.isFollowMore = false;
    //}
  })
}

var $docScrollTop;
vm.data.loadMore = [];
if (/follow-more-tab/.test(window.location.href)) {
  //vm.data.isFollowMore = true;
  vm.data.isLoad = true;

  vm.data.registLoad = true;
  vm.getFollowMoreBar();

  vm.data.lastId = [];

  if(vm.mobileType() == 'iOS'){
    vm.viewBounces();
    // var $touchY;
    // $('.js-follow-more-list').on('touchstart',function(e){
    //   var touch = e.touches[0];

    //   $touchY = touch.pageY;
    // })
    // $('.js-follow-more-list').on('touchmove',function(e){

    //   var touch = e.touches[0];

    //   if($('.js-follow-more-list ul').eq(vm.data.followMoreIndex).find('li').length < 6){
    //     return false;
    //   } 
    //   // if($('.js-follow-more-list').scrollTop() == 0){
    //   //   if($touchY - touch.pageY < 0 || $('.js-follow-more-list ul').eq(vm.data.followMoreIndex).find('li').length < 6){
    //   //     return false;
    //   //   }
    //   // } 
    // })

    // $('.c-att-fixed').on('touchend',function(){
    //   $docScrollTop = document.body.scrollTop;
    // })
  }
}
