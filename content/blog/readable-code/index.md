---
title: "When a shorter function is easier to read"
date: 2026-09-05T12:00:00-04:00
description: "A short demo with inline code, a code block, and a few questions about naming."
draft: true
---

> Placeholder post for checking a shorter article.

Consider a function named `prepare()`. It might validate input, sort records, or write a file. The name leaves a lot of work for the reader.

For a small example, a more specific name can explain the operation:

```python
def sorted_note_names(notes):
    return sorted(note.name for note in notes)
```

The important detail here is the connection between the name and the result. A reader can form an expectation before inspecting the implementation.

Three useful questions for this example:

1. Does the name describe the returned value?
2. Is the input clear at the call site?
3. Would a longer implementation make the behavior easier to understand?

The answer will depend on the surrounding code. This demo simply provides a compact article with a few different text styles.
