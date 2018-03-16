var budgetController = (function() {



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

    };

    return {
        init: function () {
            console.log('aapp run');
            setupEventListeners();
		}
    }


})(budgetController, UIController); 
 