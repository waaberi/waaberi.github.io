---
title: {{ replace .File.ContentBaseName "-" " " | title | jsonify }}
date: {{ .Date }}
description: ""
draft: true
---

<!-- Write your post in Markdown. Add a short description for the post list,
then set draft to false when it is ready to publish. -->
