---
sidebar_position: 3
---

# Créer un article de blog

Docusaurus crée une **page pour chaque article de blog**, mais aussi une **page d'index de blog**, un **système de balises**, un flux **RSS**...

## Créez votre premier article

Créez un fichier sur `blog/2021-02-28-greetings.md` :

```md title="blog/2021-02-28-greetings.md"
---
limace: salutations
titre: Salutations !
auteurs:
  - nom: Joël Marcey
    titre: Co-créateur de Docusaurus 1
    URL: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - nom: Sébastien Lorber
    titre: Mainteneur de Docusaurus
    URL: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
mots-clés: [salutations]
---

Félicitations, vous avez publié votre premier message !

N'hésitez pas à jouer et à modifier ce message autant que vous le souhaitez.
```

Un nouveau billet de blog est désormais disponible sur [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
