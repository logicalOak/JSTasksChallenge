// Решение номер 1, базовое
// window.addEventListener("load", function () {
// 	let inp1 = document.querySelector(".inp1");
// 	let inp2 = document.querySelector(".inp2");
// 	let inputs = document.querySelectorAll(".input");
// 	let btn = document.querySelector(".go");
// 	let res = document.querySelector(".res");
// 	let operation = document.querySelector(".operation"); // Наш Select

// 	// регулярное выражение, оставляющее при вводе только числа
// 	for (let i = 0; i < inputs.length; i++) {
// 		inputs[i].addEventListener("input", function () {
// 			btn.disabled = false;
// 			this.value = this.value.replace(/[^0-9\\.]+/g, "");
// 		});
// 	}

// 	btn.addEventListener("click", function () {
// 		let result;
// 		let num1 = parseInt(inp1.value);
// 		let num2 = parseInt(inp2.value);
// 		if (inp1.value === "" || inp2.value === "") {
// 			res.innerHTML = "Вы не ввели числа";
// 		} else {
// 			switch (operation.value) {
// 				case "sum":
// 					result = num1 + num2;
// 					break;
// 				case "sub":
// 					result = num1 - num2;
// 					break;
// 				case "mult":
// 					result = num1 * num2;
// 					break;
// 				case "div":
// 					result = num1 / num2;
// 					break;

// 				default:
// 					break;
// 			}
// 			res.innerHTML = result;
// 			btn.disabled = true;
// 		}

// 		operation.addEventListener("change", () => (btn.disabled = false));
// 	});
// });

// Решение номер 2
window.onload = () => {
	let inp1 = document.querySelector(".inp1");
	let inp2 = document.querySelector(".inp2");
	let inputs = document.querySelectorAll(".input");
	let btn = document.querySelector(".go");
	let res = document.querySelector(".res");
	let operation = document.querySelector(".operation");

	// Объявляем функции с помощью function expression. В этом случае не происходит всплытия функций и события нужно вызывать ниже
	// Функции
	const calculate = () => {
		const number1 = Number.parseInt(inp1.value, 10);
		const number2 = Number.parseInt(inp2.value, 10);

		const doCalculation = () => {
			switch (operation.value) {
				case "sum":
					return number1 + number2;
				case "sub":
					return number1 - number2;
				case "mult":
					return number1 * number2;
				case "div":
					return number1 / number2;
			}
		};

		if (!number1 || !number2) {
			return (res.innerHTML = "Вы не ввели числа");
		}

		btn.disabled = true;
		res.innerHTML = doCalculation();
	};

	const enableCalculate = () => (btn.disabled = false);

	const setOperation = () => enableCalculate();

	// События
	// Запуск вычисления
	btn.addEventListener("click", calculate);

	// Изменить операцию
	operation.addEventListener("change", setOperation);

	// Проверить поле валидатором и при вводе значений разблокировать кнопку
	inputs.forEach((input) => {
		input.addEventListener("input", function () {
			btn.disabled = false;
			this.value = this.value.replace(/[^0-9\\.]+/g, "");
		});
	});
};
