ReUse - Hardware Marketplace

# Segurança

Caso ocorra alguma dificuldade para testar o protótipo do projeto, estaremos disponibilizando o link para o youtube. Demonstrando a utilização do aplicativo dentro emulador Android, na versão 16.
Youtube:
https://youtube.com/shorts/1iOH-9lkdGI?feature=share

# Integrantes  
- Gustavo Galvão – RM: 565969  
- Lucas Tamura – RM: 563249  

# Objetivo da Sprint
Nesta Sprint, nosso time criou a base do aplicativo mobile ReUse. O foco principal foi estabelecer uma organização de interface, usando os componentes do React Native. Com o foco em facilitar o acesso a componentes de hardware de forma sustentável e econômica.

### Desafio
O desafio proposto é desenvolver uma tela inicial para comunicar o propósito da plataforma, apresentando uma estrutura organizada e coerente para evoluções futuras.

## INSTRUÇÕES PARA AQUELES QUE QUEREM RODAR O PROJETO PURO

Siga estas instruções simples para configurar o ambiente e testar o aplicativo:
•	VS Code: Abra a pasta do projeto reuse no Visual Studio Code.

•	Node.js: Certifique de ter o Node.js instalado para usar o gerenciador npm no terminal do próprio VS Code.

•	Expo Go: Instale a CLI do Expo globalmente rodando o comando no terminal:
npm install -g expo-cli

2. Instalação de Dependências
Abra o terminal integrado do VS Code (Ctrl + ') e execute:
npm install
Este comando baixará todas as bibliotecas necessárias listadas no package.json para o projeto.

3. Execução do App
• Certifique-se de que o emulador Android (configurado na Opção 1) ainda esteja aberto e rodando.

• No terminal do VS Code, execute o comando:

npm run android

• O Expo irá compilar o bundle e abrir o app automaticamente no emulador no Android Studio.


### Estrutura do projeto

app/(tabs)/: Onde fica a navegação e as telas principais.

_layout.tsx: Configura as abas inferiores e ícones.

index.tsx: Tela inicial (Home) com a busca e produtos.

menu.tsx: Tela de perfil e configurações.

assets/: Imagens, logos e ícones do aplicativo.

components/: Peças reutilizáveis e estilos separados.

Home.styles.tsx / Menu.styles.tsx: Arquivos de design.

ProductCard.tsx: O visual dos cards de hardware.

Products.tsx: Onde estão os dados (IDs) dos produtos.

constants/: Configurações fixas como o theme.ts (cores).

hooks/: Lógicas auxiliares para o funcionamento do app.

Arquivos de Configuração:

app.json: Nome, ícone e tela de abertura.

package.json: Lista de bibliotecas instaladas.

tsconfig.json: Regras do TypeScript.
