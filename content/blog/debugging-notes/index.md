---
title: "A debugging session, written down"
date: 2026-09-07T12:00:00-04:00
description: "An example of turning a confusing bug into a short set of observations and checks."
draft: true
---

> Placeholder post. This is an invented debugging example for previewing article formatting.

Suppose a page shows the right information after a refresh, but the wrong information after navigating from another page. That difference is a useful starting point: the two paths reach the same screen through different steps.

## Write down what changes

- A fresh load shows the expected result.
- In-app navigation shows an older result.
- The request succeeds in both cases.

Those observations do not identify the cause yet. They do make the next check more specific: compare the data received by the page with the data it actually renders.

## Keep the experiment small

```javascript
const received = { title: "New title" };
const displayed = { title: "Old title" };

console.table({ received, displayed });
```

The example values are enough to demonstrate the question. If the received value is correct, the next place to look is the path between receiving it and displaying it.

> A useful note records what was observed, what was changed, and what happened next.

That is also a reasonable structure for a short technical post: a concrete symptom, a small experiment, and an explanation of the result.
