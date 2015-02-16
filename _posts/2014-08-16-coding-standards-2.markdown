---
layout: post
title:  "Mobile First"
date:   2014-08-16 20:19:00
categories: programming
subtitle: "Best Practices Part 2"
---

Part 2 on the method to the madness in programming.

Last article we talked about test-driven development and why it is beneficial. Today, we're going to focus on an important front-end development paradigm: mobile first.

## Mobile-First Development

Let's move away from the nitty gritty low level practices and get to a high level practice - mobile-first. Why mobile first? What does it even mean?

When designing responsively you make extensive use of css ```@media``` queries. These are how you apply your styles to specific screen sizes. Mobile first means make sure your mobile styles are the "initial" styles, and you work your way up to bigger screens.

What's the point? Well, there are quite a few points, actually. Mobile first let's you avoid using max-width media queries in addition to non-queried declarations - thereby saving you from creating an artificial breakpoint in the end. You will need global styles, so just put them in the mobile section, or unqueried section, and let them live there.

Further, you will be supporting browsers that don't have support for media queries. Those browsers will drop the ```@media``` declaration and will just load all of the stylesheets. Since CSS cascades, putting your desktop styles after your mobile styles will make sure the desktop site loads fine, and the vast majority if not all of mobile browsers will support ```@media```.

### Case Study: Twitter Bootstrap

Say what you want about Bootstrap, but it is a great framework. Sure, it isn't meant for sites that don't make use of almost all of its functionality, but that's the way all frameworks are. If I want to make a blog and all I need to do is publish posts, maybe WordPress isn't the best platform for it. Jekyll can do it just as well with less overhead and maintenance. Likewise, if I need a CMS for managing only text content on 5 pages, Drupal may be overkill.

Twitter bootstrap highlights a lot of important elements of CSS design, especially responsive. One of the first things it hammers in is mobile first.

{% highlight ruby %}

/* Extra small devices (phones, less than 768px) */
/* No media query since this is the default in Bootstrap */

/* Small devices (tablets, 768px and up) */
@media (min-width: @screen-sm-min) { ... }

/* Medium devices (desktops, 992px and up) */
@media (min-width: @screen-md-min) { ... }

/* Large devices (large desktops, 1200px and up) */
@media (min-width: @screen-lg-min) { ... }

{% endhighlight %}

From [http://getbootstrap.com/css/#grid][bootstrap]

If you look at that code excerpt from their own page, you'll see it says "no media query" for mobile designs. That is the essence of mobile first. Your mobile styles are the ones in the global CSS namespace, not your desktop styles. This is not to say that the desktop styles are less important or that they are not the core of the site. It's actually quite the contrary. The reason we do mobile first is because we care about mobile, and want consistency on desktop.

If Bootstrap didn't employ mobile first development techniques, the rendering on desktop environments would be strange if they didn't support @media queries. CSS is made to ignore rules it does not understand, so older browsers will just toss the media query declaration. That means when you write your styles

Part 3 in the series is coming soon. Don't forget to check it out!

[bootstrap]: http://getbootstrap.com/css/#grid
