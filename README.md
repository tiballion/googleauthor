# Google author

Un projet pour apprendre à utiliser l'API de Google Books.

#### Comment lancer le projet :

- Cloner le projet
- `cd googleauthor`
- `npm i`
- `npm run dev`

Pour compiler le projet en mode production :

- `npm run build`

#### Technologies/modules utilisés :

- Vite
- React
- Typescript
- TailwindCSS
- React Icons
- Axios

#### Problèmes encontrés :

- Certains livres n'avait ni d'auteur ni d'image
- On ne peut pas faire une requête à chaque fois que le texte dans l'input change, sinon on fait trop de requêtes à l'API et les résultats sont inexacts. Il faut donc attendre que l'utilisateur ait fini de taper avant de faire la requête.
