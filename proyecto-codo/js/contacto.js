const form = document.getElementById("user-form");
const submitButton = document.getElementById("submit-btn");

let timeout = null;

let validatedFields = {
    nickname: false,
    telefono: false,
    email: false
}

document.querySelectorAll(".formulario-contacto1").forEach((box) => {
  const boxInput = box.querySelector("input");

  if (boxInput != null) {
    boxInput.addEventListener("keydown", (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(`Input ${boxInput.name} value:`, boxInput.value);

        validation(box, boxInput);
        console.log(validatedFields);
      }, 300);
    });
  }
});

validation = (box, boxInput) => {
  //if(boxInput.name == 'nickname'){
  console.log("validacion para nombre");
  if ((boxInput.value == "")) {
    validatedFields[boxInput.name] = false;
    box.classList.remove("form-success");
    box.classList.add("form-error");
  } else {
    validatedFields[boxInput.name] = true;
    box.classList.remove("form-error");
    box.classList.add("form-success");
  }
  if (validatedFields.nickname == true &&
    validatedFields.telefono == true &&
    validatedFields.email == true) {
        document.getElementById("submit-btn").disabled = false;
    } else {
        document.getElementById("submit-btn").disabled = true;
    }

  //}
};
