# Curso Angular 9 Essencial

## Backend

* **Criar arquivo package.json** 
> `$ npm init -y` 

#### API
* **Instalar json-server**
> `$ npm i json-server`

#### Exemplor arquivo db.json
```json
{
  "products": [
    {
      "id": 1,
      "name": "Caneta Bic Preta",
      "price": 1.89
    },
    {
      "id": 2,
      "name": "Notebook Mac",
      "price": 12000.89
    },
    {
      "id": 4,
      "name": "Sansung S20+",
      "price": 4895.89
    }
  ]
}
```
#### Configurar package.json para executar a API
```json
"scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
```
#### Executar a API
> `$ npm start`

# Frontend

#### Intalando o Angular Material
> `$ ng add @angular/material`

#### Criando cabeçalho (header)
* **Componente**
> `$ ng g c components/template/header`
* **Modelo (interface)**
> `$ ng g i components/template/header/header-data --type=model`
* ** Serviço (services)**
> `$ ng g s components/template/header/header`

#### Rodapé (footer)
* **Componente**
> `$ ng g c components/template/footer`

#### Navegação (menu)
* **Componente**
> `$ ng g c components/template/nav`

#### Início 
* **Componente**
>`$ ng g c views/home`

#### Produtos
* **Componente**
>`$ ng g c views/product-crud`
>`$ ng g c components/product/product-create`
>`$ ng g c components/product/product-read`
>`$ ng g c components/product/product-update`
>`$ ng g c components/product/product-delete`
* **Modelo (interface)**
>`$ ng g i components/product/product --type=model`
* **Serviços (services)**
>`$ ng g s components/product/product`

## Extras

#### Diretivas (directive)
>`$ ng g d directives/red`
>`$ ng g d directives/for`

#### [Schematic](https://material.angular.io/guide/schematics)
* **Table**
>`$ ng generate @angular/material:table <component-name>`

#### Bindings
* **Binding de evento**
>Colocar o evento entre parentes cria um eventBinding chamando a função atribuida a esse evento.
>Exemplo: (click)="funcaoQualquer()"
* **Binding de propriedade**
>Colocar as propriedades entre colchetes faz com que recebar o valor como variável. 
>Exemplo: [id]="variavel"

#### Tipos de tamanhos
* **rem**
>Medida relativa ao fixado no elemento raiz, geralmente usado no `<html>`. 

* **em**
>Medida relativa ao fixado no elemento pai, por exemplo relativo ao `<body>` ou `<div>`

**Exemplo**
```css
body {
  font-size: 14px;
}
div {
  font-size: 1.2em; /* calculado como 14px * 1.2, ou 16.8px */
}
```
