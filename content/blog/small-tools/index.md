---
title: "Small tools, useful constraints"
date: 2026-09-09T12:00:00-04:00
description: "A sample essay about keeping the first version of a project small enough to finish."
draft: true
---

> Placeholder post for testing the blog. The scenario below is an example, not a report about a real project.

Imagine a folder full of files that all need the same small change. Doing it once is easy. Doing it every week is where a small tool starts to make sense.

The interesting question is not how much the tool could eventually do. It is what the first useful version needs to do today. That question usually produces a much shorter list.

## Start with one concrete job

For this example, the job is to turn a directory of notes into a readable index. No accounts, no dashboard, and no settings screen. Just a folder, a command, and a result that is easy to inspect.

Before writing code, it helps to describe what a successful run looks like:

1. Find the Markdown files in a directory.
2. Read a title from each file.
3. Write a list of links in a predictable order.
4. Leave the original notes untouched.

Those constraints make the first version easier to explain. They also make it easier to notice when a proposed addition belongs in a later version.

## Make the result easy to check

A tiny script can start by showing what it found:

```python
from pathlib import Path

notes = sorted(Path("notes").glob("*.md"))

for note in notes:
    title = note.stem.replace("-", " ")
    print(f"- [{title}]({note.name})")
```

This is deliberately incomplete. It does not read front matter or handle every possible filename. But it creates something visible, and that gives the next decision a concrete starting point.

Would a title from the first heading be more useful? Should the index include a short description? Would a date help? Each question is easier to answer with an actual result in front of you.

## Decide what to leave out

An example checklist might look like this:

| Capability | First version | Later, if useful |
| --- | --- | --- |
| List Markdown files | Yes | |
| Keep a stable order | Yes | |
| Extract descriptions | | Maybe |
| Watch for changes | | Maybe |
| Add a web interface | | Only with a reason |

The point of the table is to keep a decision visible. Something in the last column can become important later without needing to be part of the first implementation.

## Stop at a useful place

A good stopping point is a version that solves the original task and is understandable the next time you open it. A small usage example, a clear error message, and a predictable output can matter more than another option.

There is room for polish after that. There is also room to discover that the small version was enough.

---

This longer demo includes headings, a code block, a table, a quotation, and several paragraphs to check the reading layout. [Return to all posts](/blog/).
