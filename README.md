🐋 Desafio Full Cycle - Módulo Docker: Nginx com Node
Repositório responsável pelo desafio de Nginx com Node usando Docker do curso da Full Cycle

📝 Instruções
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
Suba tudo em um repositório e faça a entrega.
* A linguagem de programação para este desafio é Node/JavaScript.


🚀 Tecnologias
Docker
Node.js
MySQL
Nginx

🔥Como executar o projeto
Executar o comando docker-compose para subir os containers:
docker-compose up -d
Agora basta acessar a aplicação em seu browser:
http://localhost:8080 - Listará todos os nomes cadastrados na base

Adicional:
http://localhost:8080/people - Criei a uri que recebe um json {name:'Nome da pessoa'} para cadastrar novas pessoas 
