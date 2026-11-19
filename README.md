# Portfólio e currículo | Silas Freitas

Portfólio pessoal desenvolvido para uma atividade acadêmica.

Site publicado: [Acessar o portfólio](https://portfolio-silas-theta.vercel.app/)

## Páginas

- **Home:** apresentação com animação de digitação que alterna meu nome e minhas áreas de atuação.
- **Sobre Mim:** breve biografia, ferramentas que utilizo em design e programação e tecnologias usadas no site.
- **Projetos:** galeria de Design com capas e links do Behance e aba de Programação com repositórios do GitHub.
- **Experiência Acadêmica:** cursos, instituições de ensino e períodos de formação.
- **Experiência Profissional:** atividades profissionais, organizações e períodos de atuação.
- **Contato:** links para LinkedIn, Behance e GitHub, além do meu e-mail.

## Tecnologias utilizadas

- **Next.js e React** para estruturar as páginas, criar componentes e implementar as interações.
- **JavaScript, HTML e CSS** para a lógica, a estrutura semântica e o layout responsivo.
- **Lucide React e Simple Icons** para os ícones da interface e das ferramentas.
- **Poppins e Archivo Variable**, distribuídas com Fontsource. Os títulos priorizam Scale VF quando disponível no dispositivo.
- **Node.js e npm** para executar o projeto e instalar as dependências.
- **Figma** para criar o protótipo e definir a identidade visual.

## Integração com a API do GitHub

A aba **Programação** consulta a **API REST do GitHub** para listar meus repositórios públicos. Cada card exibe o nome do projeto, a linguagem principal, uma breve descrição quando disponível e um link para o repositório.

A consulta é feita no servidor e funciona sem token. Se a API estiver indisponível, o site exibe uma cópia local dos dados e informa o visitante.

## Como executar localmente

Com Node.js 20.9 ou superior instalado, abra o terminal na pasta do projeto e execute:

```bash
npm ci
npm run dev
```

Acesse [http://127.0.0.1:3000](http://127.0.0.1:3000). O projeto não precisa de variáveis de ambiente.
