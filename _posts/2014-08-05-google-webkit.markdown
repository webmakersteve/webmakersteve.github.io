---
layout: post
title:  "Google Web Starter Kit"
date:   2014-08-05 22:08:29
categories: jekyll update
subtitle: First Post!
---

You'll notice this blog is built on Google's fabulous Web Starter Kit front-end framework. Or maybe you didn't. And in that case, you should.

Once you get past the weird class names, which are probably made by Google for namespacing reasons, because I'm sure they subscribe to the cult of anti-namespace pollution. 

**NOTE:**
I agree! Namespace pollution is a terrible thing! Just don't hang me for using one global variable, please! Especially when there is no other solution than to rewrite the entire file!

Here's an example of where it gets a little ridiculous

{% highlight javascript %}
var bs = browserSync.init(null, {});
bs.events.on('init', function (api) {
	// We need to get this snippet
	// To the templating API
    var snippet = api.options.snippet;

    // NO NO DON'T SET IT TO THE PROCESS
    process.env.snippet = snippet || false;
});
{% endhighlight %}

I mean come on. How else was I going to get that all the way to the layout template? I would have to have gulp start the program passing that as an argument, then read arguments in the index.js file and set it to a configuration which can then be accessed by the regular common.js requires. Or... I could just set it to the process and laugh at the extra 45 minutes I saved. Plus, gulp is for dev only!

That code above actually comes from one of the projects I'm working on, which was merging the web-starter-kit with a kraken installation to allow browsersync to do its magic in a templated language. It also reloads the process when models or controllers are changed, saving a ton of headaches.

[You can see it here][cloudapp]. Yeah I know there's a lot of commits already. [@chrisdotcode][chrisdotcode] already made fun of me for that and some of their names.

It's pretty barebones and not barebones at the same time. I love bootstrap. It is easy to use, intuitive, well-documented, nice-looking, all-accomodating, and a million other positive adjectives. But my biggest problem is how annoying it is to change the column sizes. They implement gutters, which are great for making responsive layouts easily, but then just cause a host of problems when you actually have a fixed width column even on a specific screen size.

Google Web Starter kit doesn't have gutters, but we need to append the ```g--last``` class to everything that will act as a last column. I know. It's annoying.

It also uses SASS, which I didn't want to like because I'm such a **Node.js** guy, but LESS has some serious stuff to learn for quality of life, like the **!default** keyword.

Anyway. Check it out. I'll try to reuse as many Web Starter Kit elements as possible in this site, though the overall theme may (and will, eventually) change. But until then, enjoy this vanilla experience!

[cloudapp]: https://github.com/91ferns/cloudapp
[chrisdotcode]: https://code.sc