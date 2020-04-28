# Backend

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

