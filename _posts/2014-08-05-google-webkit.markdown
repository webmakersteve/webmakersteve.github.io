---
layout: post
title:  "Google Web Starter Kit"
date:   2014-08-05 22:08:29
categories: jekyll update
subtitle: First Post!
---

You'll notice this blog is built on Google's fabulous Web Starter Kit front-end framework. Or maybe you didn't. And in that case, you should.

Once you get past the weird class names, which are probably made by Google for namespacing reasons, because I'm sure they subscribe to the cult of anti-namespace pollution. **NOTE:** I agree! Namespace pollution is a terrible thing! Just don't hang me for using one global variable, please! Especially when there is no other solution than to rewrite the entire file!

It's pretty barebones and not barebones at the same time. I love bootstrap. It is easy to use, intuitive, well-documented, nice-looking, all-accomodating, and a million other positive adjectives. But my biggest problem is how annoying it is to change the column sizes. They implement gutters, which are great for making responsive layouts easily, but then just cause a host of problems when you actually have a fixed width column even on a specific screen size.

Google Web Starter kit doesn't have gutters, but we need to append the ```g--last``` class to everything that will act as a last column. I know. It's annoying.

It also uses SASS, which I didn't want to like because I'm such a **Node.js** guy, but LESS has some serious stuff to learn for quality of life, like the **!default** keyword.

Anyway. Check it out. I'll try to reuse as many Web Starter Kit elements as possible in this site, though the overall theme may (and will, eventually) change. But until then, enjoy this vanilla experience!