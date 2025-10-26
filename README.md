# composition
Permet rédiger une composition en partant d'un sujet et en progressant par étape et avec méthode. Toutes les étapes sont automatisables en utilisant le LLM de Mistral IA, mais il est avant tout possible d'éditer les faits, arguments et idées pour aboutir au résultat souhaité.

Cela prend la forme d'une page web tout en un qu'il faut ouvrir en local dans son navigateur. Pour accéder à l'IA, il faut lancer un petit serveur avec node.js qui servira de relai. A partir de la page web, il est possible de charger des anciennes compositions ou d'exporter la composition actelle dans un fichier JSON qui reprend toutes les données de la composition, du sujet, des étapes préparatoires et de la composition finale.

La page web web a été codée grâce au vibe coding. Le prompt qui a permi de générer cette page web est présent.

Dans la page web, il y a des prompts qui vont guider chaque étape. Ces différents prompts sont modifiables. Par exemple, lors de la dernière étape, il est demandé de générer la composition qui est un texte de 1000 mots. Cette valeur est tout à fait modifiable.

La performance va grandement dépendre du sujet abordé. Sur des sujets relativement précis, l'étape 2 est assez utile pour retrouver des faits et des pistes d'idées. Il y a néanmoins toujours des hallucinations sur les citations et sur certains faits. Les idées générées ainsi que la composition reflètent fortement les biais d'entraînement de l'IA.



