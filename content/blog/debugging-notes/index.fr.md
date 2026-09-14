---
title: "Une séance de débogage, mise par écrit"
date: 2026-09-07T12:00:00-04:00
description: "Un exemple de problème décomposé en observations et en vérifications simples."
draft: true
---

> Article fictif pour vérifier la présentation d’un exemple technique.

Supposons qu’une page affiche la bonne information après un rechargement, mais une ancienne valeur après une navigation interne.

## Noter les différences

- Le rechargement affiche le résultat attendu.
- La navigation interne affiche une ancienne valeur.
- La requête réussit dans les deux cas.

Ces observations permettent de préciser la prochaine vérification : comparer les données reçues avec les données affichées.

```javascript
const recu = { titre: "Nouveau titre" };
const affiche = { titre: "Ancien titre" };

console.table({ recu, affiche });
```

> Une note utile décrit l’observation, la modification et le résultat.

C’est aussi une structure possible pour un court article technique : un symptôme concret, une petite expérience et une explication.
