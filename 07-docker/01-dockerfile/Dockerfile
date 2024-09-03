ARG version=latest

# FROM = à partir de quelle image on veut travailler
# Dit au docker d'aller puller ubuntu 
# le tag ('latest') est optionnel
FROM ubuntu:${version}

# Comment
# INSTRUCTION arguments 

# L'ordre des instructions est important

# 'RUN' pour ajouter une ligne de commande
# '\' pour indiquer qu'on passe à la ligne 
# '&&' : on ajoute une commande
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Dans le terminal : 'docker build -t node:dev .'

LABEL author='Perrine'
LABEL email='perrine@perrine.com'

ARG folder=/var/www
# ARG file-hello-world.js

# ENV clé=sa valeur
    #ENV environment=dev
# Laisser choisir l'utilisateur entre dev, prod, test : 
# ARG environment=dev
# ENV environment=${environment}
    # Dans le terminal : 'docker build -t node:dev --build-arg environment=prod .'


# WORKDIR /the/workdir/path
# Maintenant, au lieu de mettre '/var/www/' on peut juste mettre '.'
# En développement web, on travaille toujurs dans le même répertoire
# WORKDIR /var/www/
WORKDIR ${folder}

# Copie du fichier hello-world.js dans le dossier /var/www/ du container
# COPY source + destination
# COPY ./hello-world.js .
COPY ./hello-world.js .
# COPY ./test.txt ./test/
# On aurait pu faire : 
    # ADD ./hello-world.js .
    # Le ADD permettrait de prendre en compte des sources distantes (ce que ne permet pas la copie - seulement fichiers locaux)

# Dans le terminal : 'docker run -ti node:dev'

# CMD ["node", "hello-world.js"]
# ENTRYPOINT ["node", "hello-world.js"]
    # Diff CMD/ENTRYPOINT : CMD permet à l'uilisateur d'entrer un autre comportement, ce que l'ENTRYPOINT interdit

# On peut aussi faire :
# ENTRYPOINT [ "node" ]
# CMD [ "hello-world.js" ]