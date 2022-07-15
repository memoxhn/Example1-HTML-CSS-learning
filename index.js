const showName = () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    if (!firstName || !lastName) {
        alert("Porfavor llena todos los campos");
        return;
    }

    const fullName = `${firstName} ${lastName}`;

    alert(`My name is: ${fullName}`);
};

const compareTwoNumbers = () => {
    const firstNumber = document.getElementById("first-number").value;   
     const secondNumber = document.getElementById("second-number").value;  

    if (Number(firstNumber) > Number(secondNumber)) {
        alert("El primer numero es Mayor")
    }
    if (Number(firstNumber) === Number(secondNumber)) {
        alert("El primer numero es igual al segundo numero ")
    }
    if (Number(firstNumber) <  Number(secondNumber)) { alert("El primero es menor al segundo") }

};
