# Projeto Checkout Flip

Este projeto é um exemplo de implementação de um checkout com integração dos dados do cartão de crédito com a imagem do cartão, juntamente com validações especiais no formulário de entrada dos dados do cartão.

Pode ser visto no link https://checkout-flip.netlify.app/

## Funcionalidades

- Exibição da imagem do cartão de crédito correspondente ao número digitado pelo usuário.
- Validação do número do cartão de crédito utilizando o algoritmo de Luhn.
- Validação da data de expiração do cartão.
- Validação do código de segurança (CVV) do cartão.
- Validação do nome do titular do cartão.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)
- YARN (gerenciador de pacotes do Node.js)

## Instalação

Siga as instruções abaixo para configurar e executar o projeto localmente:

1. Clone este repositório em sua máquina local:

   ```
   git clone https://github.com/joaonetogit/Checkout-Flip.git
   ```

2. Navegue até o diretório raiz do projeto:

   ```
   cd Checkout-Flip
   ```

3. Instale as dependências do projeto utilizando o NPM:

   ```
   yarn install
   ```

## Uso

Após a instalação, você pode executar o projeto localmente com o seguinte comando:

```
yarn dev
```

Isso iniciará o servidor e você poderá acessar o projeto no seu navegador através do endereço `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie uma branch com a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e faça commit delas: `git commit -m 'Minha nova feature'`.
4. Envie para o branch principal: `git push origin minha-feature`.
5. Abra uma Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, sinta-se à vontade para entrar em contato comigo através do e-mail [joaoneto.work@gmail.com] ou visite meu perfil no [meu GitHub](https://github.com/joaonetogit).
