# Pet-Shop-Project


## 1. Implemented Pet Pricing

![](gif/1.gif)

### Features
The buyer has to pay the owner 10 ether + gas to adopt a pet. 

#### Modifications to the code
1) Adoption contract
In `contracts/Adoption.sol`, the adopt function is modified to a payable function.
	`function adopt(uint petId) public payable returns (uint)`

2) App
In `src/app.js`, the `handle adoption` funtion should now set the price of adoption.
	`adoptionInstance.adopt(petId, {from: account, value: 1e19, gas: 100000});  `

#### Difficulties
1) Transaction error
`Transaction Failed! Error: [ethjs-rpc] rpc error with payload`
Solution: Reset Metamask account and clear Chrome cash


