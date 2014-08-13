---
layout: post
title:  "Programming Best Practices exist for a Reason"
date:   2014-08-12 20:19:00
categories: programming
subtitle: "Mainly for you"
---

I know sometimes it seems like coding standards are constantly working against you, but they aren't.

Here are some reasons for popular modern practices.

## Test-First Development

This is probably one of the newer ones but is more important than can be expressed through words. I mean, you aren't going to do test-first development on some small website, but when you get into the field of web applications, it does some pretty amazing things for you, and not all of them code related.

### Confidence

The first thing test-first oriented development does is give you confidence. When you make a large scale web app that does many different things, it's hard to keep track of the inter-related parts. When you want to add a new feature, sometimes you're afraid because you may break something more important. Then, you have more work on your hands in the future just to get yourself back to production standards.

With the confidence moving forward that your code will still be working by running an automated test, you can focus your time on awesome improvements.

### Accountability

When working with others, test-first development lets you blame them when something goes wrong. Having their own branch tested before merging it with the master lets you see who is accountable when something goes wrong. If your coworker creates changes to something, when it is tested you may find out it will break existing functionality.

Instead of finding out that something isn't working weeks later while it's sitting on production or being QA'd, you can find problems earlier, before they get to deep into the codebase and out of peoples' memories to figure out.

### Continuous Integration

Continuous integration means merging your code into the master trunk more frequently and testing that it still passes quality standards before the merge. When you write your tests, you can have the code tested, "deployed", and run in a pristine state to make sure it works when built from source.

There are many tools that do this, like Jenkins, Travis CI, and Gitlab CI. They create virtual machine states and build your code and its dependencies to make sure it works and tests correctly. You can mirror your production environment and be confident that your code will work as expected even on a clean install.

It also helps because it's **automatic** and **continuous**. At the end of the day a build will run and if it doesn't pass you know! Even if you didn't run the tests yourself. Then, you can make the fixes and get your build to pass before the end of the day instead of having code that breaks several of the tests.

## Mobile-First Development

So, let's move away from the nitty gritty low level practices and get to a high level practice - mobile-first. Why mobile first? What does it even mean?

When designing responsively you make extensive use of css ```@media``` queries. These are how you apply your styles to specific screen sizes. Mobile first means make sure your mobile styles are the "initial" styles, and you work your way up to bigger screens.

What's the point? Well, there are quite a few points, actually. Mobile first let's you avoid using max-width media queries in addition to non-queried declarations - thereby saving you from creating an artificial breakpoint in the end. You will need global styles, so just put them in the mobile section, or unqueried section, and let them live there.

Further, you will be supporting browsers that don't have support for media queries. Those browsers will drop the ```@media``` declaration and will just load all of the stylesheets. Since CSS cascades, putting your desktop styles after your mobile styles will make sure the desktop site loads fine, and the vast majority if not all of mobile browsers will support ```@media```.

## Don't Recreate the Wheel

This is one I always had difficulty with because it felt like I was cheating. When I first did [secure.91ferns.com][https://secure.91ferns.com] I thought it would have been cheating to use a web framework like Cake or Zend - so I wrote it framework free. Sure, it was all custom and that was great, but it left a lot of holes in the code and made me repeat a lot of the code I wrote.

If I had just used a framework it would be easier to read my code, easier for others to read my code, and easier to extend what I did. Now, making modifications is a huge hassle and one I try to avoid as much as possible. These frameworks were written with *best practices* in mind and were written by teams of very talented and experienced programmers - don't be afraid to leverage their wisdom in every project you do.

I hope this helps make sense of why development has moved in a certain direction, and hope it helps you stay on track. Development changes - don't fall behind! Keep reading and programming and learning and you'll give yourself much more job security.
