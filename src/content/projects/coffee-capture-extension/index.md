---
title: "Coffee Capture"
description: "Chrome extension that captures cafes from Google Maps into Distilled in one click."
date: 2026-03-31
repoURL: "https://github.com/joshieisking/coffee-capture-extension"
---

A Chrome extension companion to [Distilled](/projects/distilled). The workflow: I come across a cafe worth adding, whether from an article, a YouTube review, or just browsing around. I open Google Maps, search for the place, and click the extension. It auto-fills everything it can see from the Maps page into a sidebar panel: name, address, coordinates, operating hours. It also pulls socials and website metadata in the background. I review, make any edits, hit approve, and the entry lands in the Distilled database.

The whole thing is designed around one constraint: nothing gets saved without my eyes on it first. The extension captures and enriches, but I'm the final filter. That's what keeps the database trusted.

Built with React and Chrome Manifest V3 for the extension, Supabase Edge Functions for the backend enrichment, and a shared schema to keep everything compatible with how Distilled expects data.
