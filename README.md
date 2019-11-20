# Pet-Shop-Project


## 1. Implemented Pet Pricing

![](gif/1.gif)

### Features
The buyer has to pay the owner 10 ether + gas to adopt a pet. 

### Modifications to the code
#### 1) Adoption contract
In `contracts/Adoption.sol`, the adopt function is modified to a payable function. So the header is modified as the following:
```javascript
function adopt(uint petId) public payable returns (uint)

```
#### 2) App
In `src/app.js`, the `handle adoption` funtion sets the price of adoption. So the return statement is modified as the following:
```javascript
return adoptionInstance.adopt(petId, {from: account, value: 1e19, gas: 100000});
```

### Difficulties
#### 1) Transaction error
`Transaction Failed! Error: [ethjs-rpc] rpc error with payload`
Solution: Reset Metamask account 

## 2. Differentiation Pet Pricing

![](gif/2.gif)

### Features
Each pet has a unique price ranging from 1 - 8 ether. 

### Modifications to the code
#### 1) Pet Information
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

#### 2) App
In `src/app.js`, we want `data` to also include the price data. In the `init` function, when we read through the json data row by row, we should be taking the price data through the following code:
```javascript
petTemplate.find('.pet-price').text(data[i].price);
petTemplate.find('.btn-adopt').attr('data-price', data[i].price);
```
The first line is to display the text in the pet shop website, and the second line is to save the price data in `data`, so we can retrieve the price later. Now, in the `handle adoption` funtion, we are able to retrieve price through accessing `data` as the follows:
```javascript
var price = parseInt($(event.target).data('price')) * 1e18;
```
We multiply 1e18 to convert an integer value to an ether value (eg. price 1 -> 1 ether).
We can charge the buyer the corresponding price by returning the following:
```javascript
return adoptionInstance.adopt(petId, {from: account, value: price});
```

#### 3) html 
In `src/index.html`, we define how our website layout will look like. Under displaying the location, we will display the price through the following code:
```html
<strong>Price</strong>: <span class="pet-price">1</span><br/><br/>
```



