---
translationKey: quickcheckout
locale: en
slug: quickcheckout
title: QuickCheckout
excerpt: An embeddable payment form with secure isolation, real-time validation, and a conversion-focused user experience.
date: "2026-03-21"
coverImage: /images/projects/quick-checkout.PNG
author: Dev Eliyonai Molero
category: Payments
metaDescription: "How we designed a PayTech solution to remove Webpay triple redirects through an NPM SDK, secure postMessage communication, and PCI-DSS compliance."
keywords:
  - PayTech
  - Webpay
  - FinTech Chile
  - IFrame Security
  - postMessage
  - Card encryption
  - AWS KMS
  - BIN validation
  - Payment conversion
---

## Introduction

Payment friction is one of the biggest threats to Chilean e-commerce conversion. Many gateways redirect users from the merchant to the gateway, then to the issuing bank, back to the gateway, and finally to the merchant. This fragmented journey increases cart abandonment.

We designed **QuickCheckout** to turn that journey into one continuous flow: a conversion-focused payment form that can be embedded in any platform without breaking the merchant's visual identity.

## The challenge: isolation, security, and PCI-DSS

Card-data collection is regulated by **PCI-DSS**. Allowing merchants to process card numbers directly significantly expands their security and audit scope. The form had to look native while ensuring sensitive information never reached merchant servers.

> **Secure integration architecture**
>
> - **Client SDK:** a lightweight NPM package initializes the environment and injects a container.
> - **Rendering iframe:** an isolated frontend hosted on secure infrastructure renders the real payment form.

## Secure communication and configuration

The merchant sends initialization data such as its identifier, amount, and session public key through `window.postMessage`. Strict origin validation rejects every message that does not come from the registered merchant domain.

Before rendering, the backend verifies that the key exists, remains active, and belongs to the requesting merchant. It also enforces geographic business rules, immediately blocking foreign attempts when international transactions are not allowed by the contract.

## Progressive encryption with AWS KMS

QuickCheckout protects cardholder data before the user presses “Pay”. The iframe progressively encrypts sensitive fields with a public key as they are entered.

The PayTech backend is the only component authorized through strict IAM roles to use **AWS KMS**, decrypt the package, and process the transaction.

## Real-time BIN validation

Not every merchant accepts the same payment methods. When the user enters the first eight card digits, the frontend requests BIN validation from the backend.

The server checks an updated BIN table against the merchant contract. If a credit card is used where only debit is enabled, for example, the form blocks submission and clearly explains the accepted methods. This avoids late declines and unnecessary user frustration.

## Results

QuickCheckout demonstrated that fintech regulatory requirements do not need to compromise user experience. Isolated iframes, secure `postMessage` communication, AWS KMS, and real-time validation reduced PCI-DSS exposure while removing the triple-redirect flow and improving conversion.
