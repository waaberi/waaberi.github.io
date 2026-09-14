---
title: "Petits outils, contraintes utiles"
date: 2026-09-09T12:00:00-04:00
description: "Un exemple d’article sur une première version assez petite pour être terminée."
draft: true
---

> Article fictif pour tester le blogue. Le scénario ci-dessous est un exemple, pas le récit d’un projet réel.

Imaginons un dossier de notes qu’il faut organiser chaque semaine. Un petit outil pourrait transformer ce dossier en une liste de liens facile à parcourir.

## Une tâche précise

La première version pourrait se limiter à quatre étapes :

1. Trouver les fichiers Markdown.
2. Lire leur titre.
3. Produire une liste dans un ordre prévisible.
4. Conserver les notes originales.

## Un résultat facile à vérifier

```python
from pathlib import Path

notes = sorted(Path("notes").glob("*.md"))

for note in notes:
    title = note.stem.replace("-", " ")
    print(f"- [{title}]({note.name})")
```

Cet exemple est volontairement incomplet. Il permet surtout de voir un premier résultat avant de décider ce qui mérite d’être ajouté.

| Fonction | Première version | Plus tard |
| --- | --- | --- |
| Lister les fichiers | Oui | |
| Garder un ordre stable | Oui | |
| Ajouter une description | | Peut-être |
| Créer une interface web | | Si nécessaire |

## S’arrêter à une version utile

Un outil qui résout la tâche initiale et reste facile à comprendre constitue déjà un bon point d’arrêt. Les améliorations suivantes peuvent attendre un besoin concret.

[Retour à tous les articles](/fr/blog/).
