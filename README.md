# Google author

Un projet pour apprendre à utiliser l'API de Google Books.

#### Comment lancer le projet :

- Cloner le projet
- `cd googleauthor`
- `npm install` or `npm i`
- `npm run dev`    

Pour compiler le projet en mode production :
- `npm run build`

#### Technologies/modules utilisés :

- React
- TailwindCSS
- React Icons
- Axios

#### Problèmes encontrés :

- Certains livres n'avait pas d'auteur ni d'image
- On ne peut pas faire une requête à chaque fois que le texte dans l'input change, sinon on fait trop de requêtes à l'API. J'ai donc fait une requête à chaque fois que l'utilisateur appuie sur la touche entrée.
