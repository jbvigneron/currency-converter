# TP Javascript n°2 - Promo UDEV EPSI Arras
## Conversion de devises
### Seul ou en binôme
### Rappel : 1 € = 6.55957 FRF

####Créer un formulaire HTML composée de :
- Un champs pour saisir le montant à convertir
- 2 radio pour choisir le type de conversion : en € ou en FRF
- 1 bouton ayant pour libellé "Convertir"
- Un champs en lecture seule pour afficher le résultat de la conversion

####Déroulement :
1. Je saisie une valeur à convertir
2. Je sélectionne l'opération de conversion :
- Convertir en €
- Convertir en FRF
3. Je clique sur le bouton Convertir
4. J'obtiens le résultat de la conversation avec une **précision de 2 chiffres après la virgule**

#####Règle 1 :
- Je rentre 1 dans le champs de saisie
- Je sélectionne la conversion en FRF
- J'obtiens le résultat 6.56

#####Règle 2 :
- Je rentre 2 dans le champs de saisie
- Je sélectionne la conversion en €
- J'obtiens le résultat 0.30

#####Règle 3 :
- Je clique directement sur le bouton Convertir sans saisir de montant ni sélectionner d'opération
- J'obtiens un message d'erreur 'Veuillez saisir un montant'

#####Règle 4 :
- Je rentre la valeur '1' dans le champs de saisie
- Je clique ensuite sur le bouton Convertir sans sélectionner d'opération
- J'obtiens un message d'erreur 'Veuillez sélectionner le type d'opération'

###Conseils :
- Utilisez un IDE suffisamment "complet" et "robuste" (ex: SublimeText, Visual Studio Code, WebStorm etc.)
- Aidez-vous de la console du navigateur

###Autre :
Vous pouvez intégrer le CDN Bootstrap pour apporter du CSS :
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css