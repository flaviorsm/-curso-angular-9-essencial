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

# Extras

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