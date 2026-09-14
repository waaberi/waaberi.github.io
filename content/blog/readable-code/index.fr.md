---
title: "Quand une fonction courte est plus lisible"
date: 2026-09-05T12:00:00-04:00
description: "Un court exemple avec du code et quelques questions sur les noms de fonctions."
draft: true
---

> Article fictif pour vérifier un format plus court.

Une fonction nommée `prepare()` laisse beaucoup de questions ouvertes. Un nom plus précis peut aider à comprendre le résultat attendu.

```python
def sorted_note_names(notes):
    return sorted(note.name for note in notes)
```

Quelques questions à se poser pour cet exemple :

1. Le nom décrit-il la valeur retournée ?
2. L’entrée est-elle claire au point d’appel ?
3. Une version plus longue serait-elle plus facile à comprendre ?

La réponse dépend du contexte. Cet article sert surtout à vérifier la présentation du texte et du code.
