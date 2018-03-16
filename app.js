var budgetController = (function() {



})();

var UIController = (function() {

    return {
        getInput: function () {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }


		}
    }

})();

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function() {
        
        if(event.keyCode === 13) {  
            ctrlAddItem();
        }
    });

})(budgetController, UIController); 
 