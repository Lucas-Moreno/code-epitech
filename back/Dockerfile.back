# Utilise l'image Node.js
FROM node:18

# Crée un répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances
RUN npm install

RUN npm install -g ts-node

# Copie les fichiers de l'application dans le répertoire de travail
COPY . .

# Expose le port sur lequel l'application va écouter
EXPOSE 3001

# Commande de démarrage de l'application
CMD [ "ts-node", "index.ts" ]
