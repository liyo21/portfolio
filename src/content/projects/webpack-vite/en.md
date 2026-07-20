---
translationKey: webpack-vite
locale: en
slug: webpack-to-vite-migration
title: "Migrating from Webpack to Vite: improving performance and developer experience"
excerpt: Migration of the ChileAtiende portal from Webpack to Vite, significantly reducing build and hot-reload times.
date: "2026-03-21"
coverImage: /images/projects/webpack-vite.PNG
author: Dev Eliyonai Molero
category: Vite
metaDescription: "Technical case study: upgrading to Laravel 12 and Node 20, replacing Webpack with Vite, and cutting build time from 10 minutes to under one."
keywords:
  - Laravel 12
  - Vite
  - Webpack
  - Vue 2
  - Frontend migration
  - Node 20 LTS
  - CI/CD
  - AWS S3
  - CloudFront
  - ES Modules
---

## Introduction

Modernizing a legacy application is one of the most demanding and rewarding tasks in software engineering. Our team upgraded a system from **Laravel 6 to Laravel 12**, a six-major-version leap that transformed the backend architecture.

The project also had a frontend toolchain tied to **Node 12 and Webpack through Laravel Mix**. Our goal was to move to **Node 20 LTS** and replace Webpack with **Vite** to improve development and deployment performance.

## The challenge: dependencies and breaking changes

Moving from Node 12 to Node 20 while replacing the main bundler introduced significant breaking changes. Every dependency had to be audited and upgraded to ensure compatibility with the new runtime.

> **Keeping Vue 2 in a modern toolchain**
>
> Migrating hundreds of components to Vue 3 at the same time would have created excessive operational risk. We configured Vite with `@vitejs/plugin-vue2`, modernizing the build environment without rewriting the component layer.

This also required changes to sensitive Laravel entry points such as `app.js` and `bootstrap.js`, including global Vue initialization and plugin setup.

## Webpack flexibility versus Vite's strict module order

Webpack had tolerated implicit dependency and import ordering. Vite relies on **native ES Modules** and evaluates the dependency graph more strictly.

Stylesheets, global utilities, and Vue plugins that previously loaded implicitly stopped working or loaded in the wrong order. We mapped the dependency tree and reorganized imports so initialization became explicit and deterministic.

## From ten minutes to under one in CI/CD

The new infrastructure compiled static frontend assets, uploaded them to **AWS S3**, and distributed them through **Amazon CloudFront**.

With Webpack, `npm install` and `npm run prod` took more than ten minutes. S3 synchronization was fast, but local compilation made the pipeline a bottleneck.

- **Build time:** reduced from more than 10 minutes to under 1 minute.
- **Bundle size:** Vite's tree shaking reduced final asset weight and improved loading performance.

## Lessons learned

The migration showed that development tooling—Vite, Node 20, and Laravel 12—can be modernized without forcing an immediate Vue 2 rewrite. Dependency auditing and explicit import ordering created a practical balance between operational stability and technical modernization while cutting pipeline waiting time by roughly 90%.
