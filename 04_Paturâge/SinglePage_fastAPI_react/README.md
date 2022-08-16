# SinglePage_fastAPI_react

<p align="center">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white">
    <img src="https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white">
    <img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=WebStorm&logoColor=white">
</p>

Création d'une application à page unique via fastAPI et React. 

Pour lancer le projet, il suffit de lancer certaines commandes

Pour la partie backend, rendez vous sur [localhost:8000/](localhost:8000/)

````
$ cd backend
$ python -m venv env
$ python env/Scripts/activate
(env)$ pip install -r requirements.txt
(env)$ python main.py
````

Pour la partie frontend, rendez vous sur [localhost:3000/](localhost:3000/)

````
$ cd frontend
$ npm install
$ npm start
````

## Création d'une todo list

Différentes routes sont créées afin d'effectuer les manipulations du CRUD, à savoir :

- Afficher les données (READ) - *get*
- Créer de nouvelles données (CREATE) - *post*
- Mettre à jour les données (UPDATE) - *put*
- Supprimer les données (DELETE) - *delete*

![](img/routes.png)
![](img/todo.png)