---
translationKey: webpack-vite
locale: es
slug: migracion-webpack-vite
title: "Migración de Webpack a Vite: mejorando el rendimiento y la experiencia de desarrollo"
excerpt: Migración del portal ChileAtiende desde Webpack a Vite, reduciendo significativamente los tiempos de compilación y recarga en caliente.
date: "2026-03-21"
coverImage: /images/projects/webpack-vite.PNG
author: Dev Eliyonai Molero
category: Vite
metaDescription: "Caso de estudio técnico: actualización a Laravel 12 y Node 20, reemplazo de Webpack por Vite y reducción del build de 10 a menos de 1 minuto."
keywords:
  - Laravel 12
  - Vite
  - Webpack
  - Vue 2
  - Migración frontend
  - Node 20 LTS
  - CI/CD
  - AWS S3
  - CloudFront
  - ES Modules
---

## Introducción

Modernizar una aplicación *legacy* es una de las tareas más complejas y gratificantes de la ingeniería de software. Nuestro equipo asumió el upgrade de un sistema desde **Laravel 6 hasta Laravel 12**, un salto de seis versiones mayores que transformó la arquitectura del backend.

El proyecto también mantenía un ecosistema frontend acoplado a **Node 12 y Webpack mediante Laravel Mix**. El objetivo fue actualizar a **Node 20 LTS** y sustituir Webpack por **Vite** para mejorar el desarrollo y los despliegues.

## El desafío: dependencias y breaking changes

Saltar de Node 12 a Node 20 y cambiar el bundler introdujo múltiples *breaking changes*. Fue necesario auditar y actualizar cada dependencia para asegurar su compatibilidad con el nuevo runtime.

> **Mantener Vue 2 en un ecosistema moderno**
>
> Migrar simultáneamente cientos de componentes a Vue 3 habría elevado demasiado el riesgo operativo. Configuramos Vite con `@vitejs/plugin-vue2`, modernizando el entorno de compilación sin reescribir la capa de componentes.

También modificamos puntos sensibles como `app.js` y `bootstrap.js`, adaptando la inicialización global de Vue y sus plugins a los nuevos estándares de empaquetado.

## Webpack frente al orden estricto de Vite

Webpack había sido permisivo con el orden implícito de dependencias e importaciones. Vite utiliza **ES Modules nativos** y procesa el árbol de dependencias de forma más estricta.

Hojas de estilo, utilidades globales y plugins que antes se cargaban implícitamente dejaron de funcionar o aparecieron en un orden incorrecto. Mapeamos el árbol de dependencias y reorganizamos las importaciones para que la inicialización fuera explícita y determinista.

## De diez minutos a menos de uno en CI/CD

La nueva arquitectura debía compilar los assets estáticos, subirlos a **AWS S3** y distribuirlos globalmente mediante **Amazon CloudFront**.

Con Webpack, `npm install` y `npm run prod` tardaban más de diez minutos. La sincronización con S3 era rápida, pero la compilación convertía al pipeline en un cuello de botella.

- **Tiempo de compilación:** pasó de más de 10 minutos a menos de 1 minuto.
- **Peso del bundle:** el *tree shaking* de Vite redujo los assets finales y mejoró la carga para el usuario.

## Lecciones aprendidas

La migración demostró que es posible modernizar el tooling —Vite, Node 20 y Laravel 12— sin forzar una reescritura inmediata de Vue 2. Auditar dependencias y hacer explícito el orden de importación permitió equilibrar estabilidad operativa y modernización técnica, reduciendo aproximadamente un 90% la espera en el pipeline.
