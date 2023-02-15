<h1 align="center">💵 API-ORÇAMENTO </h1>

<h2>Lista de usuários:</h2>
<strong> /users </strong>
<p>Endpoint que retorna todos os usuários cadastrados.</p>

<h2>Lista de produtos:</h2>
<strong> /products </strong>
<p> Endpoint que retorna todos os produtos cadastrados.</p>

<h2>Cart:</h2>
<strong> /cart/:userId </strong>
<p> Endpoint que recebe o id do usuário e dos produtos selecionados e retorna o valor final a ser pago de acordo com a taxa do usuário:</p>

<ul>
  <li>
    <h3>Exemplo:</h3>
   </li>
</ul>

<h3>URL</h3>
<img src="https://user-images.githubusercontent.com/102433664/218914177-44ab21d3-460d-4c4b-80e8-2979a376a54d.png" />

<h3>Body</h3>
<img src="https://user-images.githubusercontent.com/102433664/218231416-4003ae6a-2b5a-476d-8642-f52454be83be.png" />

<h3>Resultado</h3>
<img src="https://user-images.githubusercontent.com/102433664/218913901-9c382632-fcd8-48ba-8904-260b92801c54.png" />


<p> O usuário <strong>1</strong> comprou os produtos com <strong>id: 1,2 e 3</strong>, que ao total <strong>somaria 14365</strong>,
mas esse usuário tem uma <strong>taxa de 79</strong> (irá pagar apenas 79% do valor), <strong>resultando em um valor final de 11348.</strong> </p>

### [Deploy](https://api-orcamento.onrender.com/)

<h3> Tecnologias utilizadas </h3>
  <img src="https://skillicons.dev/icons?i=ts&perline=10" />
