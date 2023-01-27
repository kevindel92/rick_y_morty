export default function validation (inputs){

    const regexPassword = /^(?=\w*\d)\S{6,10}$/;

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
    
    const  errors = {};

  if (!regexEmail.test(inputs.username)){
    errors.username = "Debe ser un correo";
  }
  if (!inputs.username){
    errors.username = "No puede estar vacio";
  }
  if(inputs.username.length > 35){
    errors.username = "No puede superar los 35 caracteres";
  }
  if(!regexNumber.test(inputs.password)){
    errors.password = "Debe tener por lo menos un numero";
  }
  if(!regexPassword.test(inputs.password)){
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }
  return errors;
}