---
layout: post
title:  "Test Driven Development"
date:   2014-08-12 20:19:00
categories: programming
subtitle: "Best Practices Part 3"
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

Thanks for checking this out, and we'll continue this series in the next post! Be sure to come back.
