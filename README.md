# Pet-Shop-Project


## 1. Implemented Pet Pricing

![](gif/1.gif)

### Features
The buyer has to pay the owner 10 ether + gas to adopt a pet. 

#### Modifications to the code
1) Adoption contract
In `contracts/Adoption.sol`, the adopt function is modified to a payable function. So the header is modified as the following:
```javascript
function adopt(uint petId) public payable returns (uint)

```
2) App
In `src/app.js`, the `handle adoption` funtion sets the price of adoption. So the return statement is modified as the following:
```javascript
return adoptionInstance.adopt(petId, {from: account, value: 1e19, gas: 100000});
```

#### Difficulties
1) Transaction error
`Transaction Failed! Error: [ethjs-rpc] rpc error with payload`
Solution: Reset Metamask account and clear Chrome cash

## 2. Differentiation Pet Pricing

![](gif/2.gif)

### Features
The price of pets in the 1st column is 1 ether, pets in the 2nd column is 2 ether, and so on. 

### Modifications to the code
1) Pet Information
In `src/pets.json`, I added a price variable. For example, a single pet would have the following data:
```json
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama",
    "price": 1
```

2) App
In `src/app.js`, we want `data` to also include the price data. In the `init` function, when we read through the json data row by row, we should be taking the price data through the following code:
```javascript
petTemplate.find('.btn-adopt').attr('data-price', data[i].price);
```
Now, in the `handle adoption` funtion, we are able to retrieve price through accessing `data` as the follows:
```javascript
var price = parseInt($(event.target).data('price')) * 1e18;
```
We multiply 1e18 to convert an integer value to an ether value (eg. price 1 -> 1 ether).
We can charge the buyer the corresponding price by returning the following:
```javascript
return adoptionInstance.adopt(petId, {from: account, value: price});
```

### Difficulties
Initially, I was retrieving price through calling
```javascript
petTemplate.find('.pet-price').text(data[i].price);
```
This code was copied through how we handle `name`, `age`, or `location`. However, when I called 
```javascript
var price = parseInt($(event.target).data('price')) * 1e18;
```
to get the price, it returned `NaN`.
I realized these data are used for display purposes, not to retrive later on like `id`. So, I switched this code to the following and the problem was resolved:
```javascript
petTemplate.find('.btn-adopt').attr('data-price', data[i].price);
```

