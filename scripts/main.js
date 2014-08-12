/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();

jQuery(function ($) {
  var github_api_url = "https://api.github.com/";

  var getCommitsAPIEndpoint = function (owner, repository) {
    return github_api_url + 'repos/' + owner + '/' + repository + '/commits'; //?author=webmakersteve';
  }

  $.each( $('.project-highlight'), function () {
    var githubURL = $(this).attr('data-url');

    var parser = document.createElement('a');
    parser.href = githubURL;

    // Strip out the FQDN
    var path = parser.pathname || false;
    if (!path) return;

    // Split it by forward slashes
    var pathInfo = path.split("/");

    // We only want the last two
    var userIndex = pathInfo.length-2,
        repoIndex = pathInfo.length-1,
        user = pathInfo[userIndex] || false,
        repo = pathInfo[repoIndex] || false;

    if (!user || !repo) return;

    var URL = getCommitsAPIEndpoint (user, repo),
        commitsContainer = $('.latest-commit', this);

    // Now we have the endpoint we can do a JSON request
    $.ajax({
      url: URL,
      beforeSend: function () {
        commitsContainer.show();
      }
    })
    .done(function (data) {
      $('.loading', commitsContainer).hide();

      var commit,
          message,
          author,
          avatar,
          sha,
          url;

      for (x in data) {
        commit = data[x].commit;

        message = commit.message;
        sha = data[x].sha.substring(0,6);
        url = commit.html_url;

        avatar = "http://www.gravatar.com/avatar/" + data[x].author.gravatar_id + "?s=20";
        author = data[x].author.login

        // We have all the data we need.
        var li = $('<li></li>');
        li.html('<small><i class="gravatar" style="background-image:url('+avatar+')"></i> <span class="author">'+author+'</span>: <span class="msg">'+message+'</span></small>');
        $('ul', commitsContainer).append(li);
        // We just want one :(
        break;

      }
    })

  });

})
