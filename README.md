BRIEF‑CROISE

Un projet de gestion de personnel et d’assignation dans des rooms.

🚀 Description

Ce projet permet de :

Créer et stocker des employés (nom, rôle, email, téléphone, image, expériences, localisation)

Les afficher automatiquement dans une sidebar

Assigner un employé à une salle (room) selon son rôle et les règles d’accès au room.

Afficher la liste des employés par room et gérer les ajouts / suppressions

Utiliser le DOM, des tableaux d’objets (GlobalArr, RoomArr).

Interface responsive simple — HTML / CSS / JavaScript

📂 Structure du projet

index.html — page principale du sitweb

style.css — styles de l’interface

scripts.js — logique JavaScript (création d’employés, manipulation du DOM, assignation aux rooms)

README.md — documentation (toi‑même)

🧱 Fonctionnalités principales

Création d’employés

Formulaire de création avec champs : nom, image (URL), rôle, email, téléphone, expériences

Validation des champs (nom non vide, email correct, téléphone conforme)

Employé ajouté dans GlobalArr.

Affichage immédiat dans la sidebar.

Assignation aux rooms

Lorsqu’un employé est sélectionné pour une room, le site affiche un formulaire de sélection (liste des employés éligibles)

Ajout de l’employé à la room, mise à jour des tableaux RoomArr

Limitation du nombre d’employés par room en 3 personne et vous pouvez le changer.

Mise à jour visuelle immédiate dans la room concernée

Affichage et interactions

Sidebar: liste de tous les employés créés

Chaque room : liste des employés assignés

Profil d’un employé : affichage détaillé (image, nom, rôle, email, téléphone, localisation, expériences)

Suppression d’un employé d’une room via bouton «‑»

Empêche les doublons (emp employé déjà présent) ou assignation non conforme au rôle

🔧 Instructions d’installation & démarrage

Clone le dépôt :

git clone https://github.com/aminelebrini/BRIEF-CROISE.git


Ouvre index.html dans ton navigateur ou lance via un serveur local (ex. Live Server sur VSCode)

Dans ton navigateur :

Créer des employés via le formulaire «Validation»

Aller dans une room via les boutons + pour assigner un employé

Visualiser les employés dans la sidebar et dans les rooms

🌐 Accès au site web

Vous pouvez accéder au site web via le lien suivant :
https://brief-croise.vercel.app/
