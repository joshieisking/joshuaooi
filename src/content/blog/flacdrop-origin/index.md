---
title: "The $5 MP3 player that sent me down a rabbit hole"
description: "A cheap Taobao find, a FLAC conversion problem, and how I ended up building my first Mac app."
date: 2026-04-17
---

I'd just got back from a holiday lugging around my daughter's Yoto Mini Player. Great device, don't get me wrong. But it's bulky, you need the cards that go with it, and it was just one more thing in the bag.

Around the same time I'd been seeing a lot of people talk about going analog. Single purpose devices. It got me thinking about one of the first devices my dad ever gave me. An orange and white Creative MP3 player. One of my favourite things as a kid.

So I went on Taobao, found a cheap knockoff for $5, and bought it. Figured I'd try to recreate that with my daughter.

The plan was simple. Load it up with music, sit with her, pick albums together. Get her into 90s pop. She's four, she doesn't get a say yet.

Here's where it got annoying. Most download sites give you FLAC files by default. High quality, large, and my $5 player couldn't read them. I looked at what it would take to fix that. Download the FLAC, find a converter site, upload it, wait, download the MP3, move it over. Then do that again for the next file. And the next. For entire albums.

That wasn't going to work.

It reminded me of flipping through CD stalls at pasar malams back in Malaysia. You'd browse, pick whatever looked interesting, buy a stack. I wanted that same energy. Just music, no friction.

I'd also been looking for something to build. I wanted to get a feel for Xcode, maybe eventually figure out the App Store process. Not to make money, just curiosity. This felt like the right problem to start with.

So I built [FLACDrop](/projects/flacdrop).

The idea was simple. A small Mac utility that sat quietly in the menu bar, watched my downloads folder, and whenever a FLAC file landed, it converted it to MP3, moved it to a target folder, and cleaned up the original. Zero input from me.

The core of it runs on [FFmpeg](https://ffmpeg.org), a free open source library that's been powering media tools like VLC for decades. I was using a tiny sliver of what it can do.

For the build I set up two agents. Codex to write the code, Claude to review the output and keep things aligned. The thing that made it work across multiple sessions was having a single document that tracked all the decisions, progress and context. Every time I hit a usage limit and had to switch agents, that document got me back up to speed immediately. No re-explaining, no drift. Honestly that file was probably more important than anything else in the project.

When it finally worked I downloaded a FLAC file and just watched. A few seconds later an MP3 appeared in the target folder.

That was it. (I'm not a Swift developer, by the way.)

If you want to try it out, [FLACDrop is on GitHub](https://github.com/joshieisking/FLACDrop). It's a Mac app. Download the repo, bundle it in Xcode and run it.
