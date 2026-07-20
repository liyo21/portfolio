---
translationKey: aws-kms
locale: en
slug: web-application-data-encryption
title: Data encryption in web applications
excerpt: Implementation of sensitive data encryption with AWS KMS, protecting the confidentiality of information both in transit and at rest.
date: "2026-03-21"
coverImage: /images/projects/aws-kms.PNG
author: Dev Eliyonai Molero
category: AWS
metaDescription: "A real-world case study: from an ethical hacking finding to end-to-end encryption with AWS KMS, client caching, and replay attack mitigation."
keywords:
  - AWS KMS
  - Asymmetric encryption
  - Data security
  - Ethical Hacking
  - Replay Attacks
  - Cryptography
  - Software architecture
---

## Introduction

In modern software development, sensitive-data security cannot be an afterthought. An **Ethical Hacking** assessment performed by our internal cybersecurity team uncovered a critical vulnerability in a citizen-facing system: its cryptographic scheme relied on an exposed static key that was never rotated.

A compromised static key puts the entire data history at risk. We therefore redesigned the solution around **AWS Key Management Service (KMS)** and evaluated it against the security and scalability requirements of a high-impact public platform.

## The challenge: end-to-end protection for citizen data

Our goal was to encrypt payloads from the frontend to the backend while removing the shared-key coupling. The client had to encrypt information but never decrypt it, limiting the impact of a compromised browser environment.

> **Key design requirements**
>
> - **Strict asymmetry:** the frontend encrypts with a public key and only the backend can decrypt with the private key.
> - **Least privilege:** private-key material never leaves AWS KMS.
> - **Replay protection:** an intercepted payload cannot be submitted again.
> - **Cryptographic efficiency:** security must not introduce unacceptable latency.

## Research and solution design

We selected an **asymmetric-key architecture** in which AWS KMS acts as the secure root of trust.

- **Private-key isolation:** the key remains inside AWS Hardware Security Modules. Only the backend can request decryption through tightly scoped IAM roles.
- **Hybrid cryptographic flow:** because direct asymmetric operations impose payload-size and cost constraints, KMS manages secure key material while the application uses a transfer-optimized encryption flow.

## Technical implementation and performance

The frontend obtains the public key through a backend endpoint and caches it in `localStorage` for a controlled period. Reusing a still-valid public key reduces HTTP requests, KMS interactions, latency, and infrastructure costs. Once it expires, the client requests fresh key material before encrypting the sensitive payload.

This design reduced user-facing latency without exposing private material.

## Protecting the backend from replay attacks

Encryption alone does not prevent an attacker from resubmitting a valid intercepted request. Before decrypting, the backend applies two controls:

1. **Unique nonces:** every request includes a one-time identifier. Previously processed values are rejected.
2. **Strict timestamps:** the payload carries a timestamp and is discarded when it falls outside a very short validity window.

## Results and lessons learned

The redesign resolved the ethical hacking finding and brought the system closer to enterprise security standards. Moving key management out of application code and into AWS KMS eliminated the risk of private credentials leaking through source repositories.

The main lesson was that **security and performance do not have to compete**. Public-key caching, KMS custody, least-privilege IAM roles, nonces, and timestamps produced an efficient and scalable solution for protecting sensitive citizen information.
