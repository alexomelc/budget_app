var budgetController = (function() {

	let Expense = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let Income = function (id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: [],
			inc: []
		}
	};
	
	return {
		addItem: function (type, des, val) {
			let newItem, ID;

			if(data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length-1].id + 1;
			} else {
				ID = 0;
			}

			if(type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if(type === 'inc') {
				newItem = new Income(ID, des, val)
			}

			data.allItems[type].push(newItem);

			return newItem;
		},

		testing: function () {
			console.log(data)
		}
	}

})();

var UIController = (function() {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputAdd: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
		},

		getDOMstrings: function () {
           return DOMstrings;
		}

    }

})();

var controller = (function(budgetCtrl, UICtrl) {


    let setupEventListeners = function () {
		let DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputAdd).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function() {
			if(event.keyCode === 13) {
				ctrlAddItem();
			}
		});
	};




    let ctrlAddItem = function() {

        let input = UICtrl.getInput();
        console.log(input);

        let newItem =  budgetCtrl.addItem(input.type, input.description, input.value)

    };

    return {
        init: function () {
            console.log('aapp run');
            setupEventListeners();
		}
    }


})(budgetController, UIController); 


controller.init();