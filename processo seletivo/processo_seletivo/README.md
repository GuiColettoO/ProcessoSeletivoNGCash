Para iniciar o projeto é necessario:
yarn init -y
yarn add -D typescript nodemon ts-node @types/express @types/node
yarn add express pg typeorm dotenv reflect-metadata

para conectar o projeto:
yarn dev

para criar uma migration e uma tabela usar"
yarn migration:generate 
yarn migration:run