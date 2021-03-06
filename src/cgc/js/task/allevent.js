//绑定事件
vm.bindEvent = function() {

  //点击关注 或者 跳转作者客页
  $('.js-follow-v-list').on('click', 'li', vm.author2);
  $('.js-follow-list').on('click', 'li', vm.author2);

  //关注更多 -->跳转作者客页
  $('.js-follow-more-list').on('click', 'li', vm.author2);


  //标签部分视频点击创建
  $('.js-tag-list').on('click', '.c-tag-media', vm.createMedia);

  //标签列表 -->评论跳转到评论页
  $('.js-tag-list').on('click', '.c-common', vm.tagCommon);

  //标签列表 -->跳转文章最终页
  $('.js-tag-list').on('click', 'li', vm.article);

  //作者主页点击关注
  $('.c-auth-top').on('click', '.c-auth-follow', vm.article);

  //标签列表 -->点击头像或名字跳转个人主页
  //$('.js-tag-list').on('click', '.c-media-info', vm.author2);

  //标签列表 -->点赞动作
  $('.js-tag-list').on('click', '.c-zan', vm.likeZan);

  //点击作者主页Tag获得TagId对应的News列表
  $('.c-tab-title').on('click', 'li', vm.getTagContent);

  //跳转关注更多
  $('.c-att-more').on('click', vm.followV);

  //点击关注更多左侧bar 获取右侧list
  $('.js-follow-more-bar').on('click', 'li', vm.getFollowMore);

  //点击标签列表页轻文图片跳转大图预览
  $('.js-tag-list').on('click', '.c-qing-img', vm.getQingInfo);

  //作者主页 -->点赞
  $('.c-tab-list').on('click', '.c-zan', vm.likeZan);

  //作者主页 -->评论跳转到评论页
  $('.c-tab-list').on('click', '.c-common', vm.tagCommon);

  //作者主页 点击轻文图片跳转大图预览
  $('.c-tab-list').on('click', '.c-qing-img', vm.getQingInfo);

  //作者主页 -->跳转文章最终页
  $('.c-tab-list').on('click', 'li', vm.article);

  //标签部分视频点击创建
  $('.c-tab-list').on('click', '.c-tag-media', vm.createMedia);

  //点击作者头像获取UserId跳转作者主页
  // $('.js-tag-list').on('click', '.c-auth-img', vm.author2);
}

// pv
vm.chejiahaoClick = function(pvMap){
  ApiBridge.callNative('ClientPvManager', 'pageClick', {
    "eventid":  pvMap.eventid,
    "pagename": pvMap.pagename,
    "reportjson": pvMap.reportjson
  });
}

//点击作者头像获取UserId跳转作者主页
vm.toAuthor = function(pagetype, $curTarget) {
  ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
    vm.data.isClicked = false;

    var userId = $curTarget.attr('userid');
    var pagetype = (user.userId == userId) ? 5 : 7;

    ApiBridge.callNative('ClientViewManager', 'pushViewController', {
      pagetype: pagetype,
      animationtype: 1,
      set: {
        modename: 'author',
        ispagefullscreen: 1,
        navigationalpha: 0,
        navigationbacktype: 1,
        // navigationrighticon: {
        //   icon1: 'articleplatform_icon_share_p',
        // },
        navigationtype: 2
      },
      param: {
        userId: userId
      }
    });

    // pv
    var pvMap = {
      "eventid":  'chejiahao_list_bigvuser_click',
      "pagename": 'chejiahao_list_bigvuser',
      "reportjson": {
        "userid1#1": user.userId,
        "userid2#2": userId
      }
    };
    vm.chejiahaoClick(pvMap);
  })
}

vm.author2 = function(e) {
  e.stopPropagation();
  var $followTarget = e.target;
  var $curTarget = $(e.currentTarget);

  if ($followTarget.tagName == 'A') {
    var $type = $($followTarget).hasClass('on') ? 1 : 0;
    var $info = {
      imgurl: $($followTarget).attr('userpic'),
      time: $($followTarget).attr('usertime') || '',
      userid: $($followTarget).attr('userid'),
      title: $($followTarget).attr('title'),
      description: $($followTarget).attr('userdesc') || '',
      username: $($followTarget).attr('username')
    }

    //单独拿出来vivo7使用
    ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
      var pvMap = {
        "eventid":  'chejiahao_cancelorattention_click',
        "pagename": 'chejiahao_cancelorattention',
        "reportjson": {
          "userid#1": user.userId || '',
          "typeid#2": !$type ? '1': '2',
          "userid2#3": $curTarget.attr('userid') || '',
          "objecttypeid#4": $curTarget.attr('objecttypeid') || ''
        }
      };
      vm.chejiahaoClick(pvMap);

      //已登录
      if (!!Number(user.userId)) {
        if (!$type) {
          var $url = 'https://chejiahaoopen.api.autohome.com.cn/OpenUserService.svc/Follow';
        } else {
          var $url = 'https://chejiahaoopen.api.autohome.com.cn/OpenUserService.svc/UnFollow';
        }
        vm.ajax({
          url: $url,
          type: "POST",
          isJson: true,
          data: {
            userId: $($followTarget).attr('userid'),
            _appid: vm.mobileType() == 'iOS' ? 'app' : 'app_android',
            pcpopclub: user.userAuth,
            autohomeua: user.userAgent
          },
          dataType: "json",
          success: function(res, xml) {
            res = JSON.parse(res);
            if (!!res.result) {
              if((!!$info.icon1) || (/author/.test(window.location.href))){
                var icon1 = {
                  icon1: !$type ? 'articleplatform_icon_correct' : 'articleplatform_icon_add',
                  icon1_p: !$type ? 'articleplatform_icon_correct_p' : 'articleplatform_icon_add_p',
                };
                vm.setRightIcon(icon1);
              }

              if (!$type) {
                $($followTarget).addClass('on');
                $($followTarget).html('已关注')
                ApiBridge.callNative('ClientViewManager', 'showToastView', {
                  type: 1,
                  msg: '关注成功'
                });
                //判断流
                if(/tag-name/.test(window.location.href)){
                  $($followTarget).remove();
                }
              } else {
                $($followTarget).removeClass('on');
                $($followTarget).html('+  关注')
                ApiBridge.callNative('ClientViewManager', 'showToastView', {
                  type: 1,
                  msg: '取消关注成功'
                })
              }
            }
          },
          fail: function(status) {}
        });
      } else {
        if (!$type) {
          var $url = 'addLocalDataForFollow';
        } else {
          var $url = 'deletLocalDataForFollow';
        }
        var post = !$type ? $info : { userid: $info.userid };
        ApiBridge.callNative('ClientDataManager', $url, post, function(result) {
          if (!!result.result) {
            if((!!$info.icon1) || (/author/.test(window.location.href))){
              var icon1 = {
                icon1: !$type ? 'articleplatform_icon_correct' : 'articleplatform_icon_add',
                icon1_p: !$type ? 'articleplatform_icon_correct_p' : 'articleplatform_icon_add_p',
              };

              vm.setRightIcon(icon1);

              //target = !!$('.c-att-href').length ? $('.c-att-href') : $('.c-auth-follow');
            }

            if (!$type) {
              $($followTarget).addClass('on');
              $($followTarget).html('已关注')
              ApiBridge.callNative('ClientViewManager', 'showToastView', {
                type: 1,
                msg: '关注成功'
              })
              //判断流
              if(/tag-name/.test(window.location.href)){
                $($followTarget).remove();
              }
            } else {
              $($followTarget).removeClass('on');
              $($followTarget).html('+  关注')
              ApiBridge.callNative('ClientViewManager', 'showToastView', {
                type: 1,
                msg: '取消关注成功'
              })
            }
          }
        })
      }
    })

    return;
  }

  // mock
  // var pagetype = (vm.data.userId == userId) ? 7 : 5;
  // vm.toAuthor(pagetype, userId);

  // mock

  ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
    if(!!vm.data.isClicked){
      return;
    }
    vm.data.isClicked = true;

    var pagetype = (user.userId == $curTarget.attr('userid')) ? 5 : 7;
    vm.toAuthor(pagetype, $curTarget);
  })
}
vm.data.isClicked = false;

vm.article = function(e) {
  e.stopPropagation();
  var $followTarget = e.target;
  var $curTarget = e.currentTarget;
  
  ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
    //未登录 
    if (!Number(user.userId)) {
      if(e.target.className != 'c-att-t' && e.target.className != 'c-tag-media' && e.target.className != 'c-tag-video' && e.target.className != 'c-auth-info-img' && !$(e.target).hasClass('c-auth-follow') && !$(e.target).hasClass('c-tab-ue')){
        ApiBridge.log('delete audio')
        if (vm.data.tagListIndex == 0 || vm.data.tagListIndex == 4) {
          ApiBridge.callNative('ClientAudioManager', 'deleteById', {
            mediaid: vm.data.mediaid,
          });
        }
      }
    } else {
      if(e.target.className != 'c-zan' && !$(e.target).hasClass('zan-icon') && e.target.className != 'c-att-t' && e.target.className != 'c-tag-media' && e.target.className != 'c-tag-video' && e.target.className != 'c-auth-info-img' && !$(e.target).hasClass('c-auth-follow') && !$(e.target).hasClass('c-tab-ue')){
        ApiBridge.log('delete audio')
        if (vm.data.tagListIndex == 0 || vm.data.tagListIndex == 4) {
          ApiBridge.callNative('ClientAudioManager', 'deleteById', {
            mediaid: vm.data.mediaid,
          });
        }
      }
    }
  })

  if(e.target.className == 'c-auth-img' || e.target.className == 'c-auth-title'){
    if($($curTarget).attr('page') == 'author'){
      return ;
    }
    ApiBridge.callNative("ClientDataManager", "getUserInfo", {}, function(user) {
      var pagetype = (user.userId == $($curTarget).attr('userid')) ? 5 : 7;
      vm.toAuthor(pagetype, $($curTarget));
    })
    return;
  }
  
  //头像空白页跳转到最终页
  if(e.target.className == 'c-media-info'){
    var typeid = $($curTarget).attr('mediatype');
    var odjectid = (typeid == '3' || typeid == '4') ? $($curTarget).attr('mediaid') : $($curTarget).attr('newsid');
    var pvMap = {
      "eventid":  'chejiahao_list_detail_click',
      "pagename": 'chejiahao_list_detail',
      "reportjson": {
        "userid#1": vm.data.userId,
        "typeid#2": $($curTarget).attr('mediatype'),
        "objectid#3": odjectid,
        "position#4": $($curTarget).attr('position')
          
      }
    };

    vm.chejiahaoClick(pvMap);

    ApiBridge.callNative('ClientViewManager', 'pushViewController', {
      pagetype: 2,
      animationtype: 2,
      param: {
        newsid: $($curTarget).attr('newsid'),
        type: $($curTarget).attr('mediatype'),
        autoscrolltocomment: 0
      }
    });

    return;
  }
  if (e.target.tagName != 'LI' && e.target.className == 'c-qing-img' &&  $(e.target).attr('imgnum') >= 3) {
    return;
  }

  if(e.target.className == 'c-att-delete'){
    
    vm.deleteNewModal(e);
    return;
  }
  if (e.target.tagName == 'A') {
    var $type = $(e.target).hasClass('on') ? 1 : 0;
    var $info = {
      test: '11',
      imgurl: $($followTarget).attr('userpic'),
      time: $($followTarget).attr('usertime') || '',
      userid: $($followTarget).attr('userid'),
      title: $($followTarget).attr('title'),
      description: $($followTarget).attr('userdesc') || '',
      username: $($followTarget).attr('username')
    }
    
    vm.followToggle($($followTarget).attr('userid'), $type, $info, $($followTarget));
    return;
  }
  if (e.target.className == 'c-auth-info-img' && ($($curTarget).attr('mediatype') == 3 || $($curTarget).attr('mediatype') == 4)) {
    return;
  }
  if (e.target.tagName != 'LI' && e.target.className != 'c-qing-img' && e.target.className != 'c-auth-info-img' && (e.target.className != 'c-tab-jj ' && e.target.className != 'c-tab-jj short' && e.target.className != 'c-tab-jj long') && e.target.className != 'c-media-audio') {
    return;
  }

  var typeid = $($curTarget).attr('mediatype');
  var odjectid = (typeid == '3' || typeid == '4') ? $($curTarget).attr('mediaid') : $($curTarget).attr('newsid');
  var pvMap = {
    "eventid":  'chejiahao_list_detail_click',
    "pagename": 'chejiahao_list_detail',
    "reportjson": {
      "userid#1": vm.data.userId,
      "typeid#2": $($curTarget).attr('mediatype'),
      "objectid#3": odjectid,
      "position#4": $($curTarget).attr('position')
        
    }
  };
  vm.chejiahaoClick(pvMap);
    
  $target = $(e.currentTarget);
  ApiBridge.callNative('ClientViewManager', 'pushViewController', {
    pagetype: 2,
    animationtype: 2,
    param: {
      newsid: $target.attr('newsid'),
      type: $target.attr('mediatype'),
      autoscrolltocomment: 0
    }
  });
}
//点击tab获取相应的列表
vm.getTagContent = function(e) {
  e.stopPropagation();

  vm.data.isTagChange = true;
  vm.data.authInfo = {};
  document.body.scrollTop = 0;
  $('.c-tab-empty').hide();

  $target = $(e.currentTarget);
  ApiBridge.log(vm.data.tagListIndex)
  ApiBridge.log('vm.data.tagList')
  vm.data.tagListIndex = $target.index();
  
  if ($target.index() !== 3 || $target.index() !== 0) {
    ApiBridge.callNative('ClientVideoManager', 'deleteById', {
      mediaid: vm.data.mediaid,
    });
  }
  if ($target.index() !== 4 || $target.index() !== 0) {

    ApiBridge.callNative('ClientAudioManager', 'deleteById', {
      mediaid: vm.data.mediaid,
    });
  }

  //判断是否请求过内容
  if($('.c-tab-bd ul').eq($target.index()).html() == ''){
    vm.initAuthorTag($target.index());
  }else{
    // vm.navWatch(vm.data.authInfo);
    $('.c-tab-empty').hide();
  }
}

vm.bindEvent();
