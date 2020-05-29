// Budget controller
const budgetController = (function () {})();

// UI controller
const UIController = (function () {
  const DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMstrings;
    },
  };
})();

// App Controller
const controller = (function (budgetCtrl, uiCntrl) {
  const setupEventListeners = function () {
    const getDom = uiCntrl.getDOMStrings();

    document
      .querySelector(getDom.inputButton)
      .addEventListener("click", addItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        addItem();
      }
    });
  };

  const addItem = function () {
    // get the filled input data
    const input = uiCntrl.getInput();
    // add the item to the budget controller
    // add the item to the ui
    // calculate the budget
    // display budget on the ui
  };

  return {
    init: function () {
      console.log("App started");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
