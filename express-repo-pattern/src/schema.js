const schema = [
{
	"name": "Card",
	"opt": {
		"idInt": false,
		"orig": {
			"schema": "UserInfo",
			"table": "User"
		}
	},
	"properties": {
		"cardId": {
			"type": "String",
			"required": true,
			"length": 36,
			"id": 1	 
		},
		"cType": {
			"type": "String",
			"required": true,
			"length": 36
		},
		"desc": {
			"type": "String",
			"required": true,
			"length": 3000	 
		},
	},
	"eName": "Card",
	"pKey": "cardId"
},
{
	"name": "Loan",
	"opt": {
		"idInt": false,
		"orig": {
			"schema": "ProductInfo",
			"table": "Product"
		}
	},
	"properties": {
		"loanId": {
			"type": "String",
			"required": true,
			"length": 36,
			"id": 1	 
		},
		"lType": {
			"type": "String",
			"required": true,
			"length": 36
		},
		"desc": {
			"type": "String",
			"required": true,
			"length": 3000	 
		},
	},
	"eName": "Loan",
	"pKey": "loanId"
}
];

// [
//   {
//     name: 'User',
//     fields: [
//       { name: 'name', type: 'string' },
//       { name: 'email', type: 'string' },
//     ],
//   },
//   {
//     name: 'Product',
//     fields: [
//       { name: 'name', type: 'string' },
//       { name: 'price', type: 'number' },
//     ],
//   },
//   // Add more schema definitions as needed
// ];

module.exports = schema;