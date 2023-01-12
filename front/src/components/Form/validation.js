export default function validarCampos(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexp_password = /[0-9]{6,10}$/;
    const errors = {};
    if (!inputs.username){
        errors.username="el nombre de usuario no puede estar vacío"
    }
    if (!regexEmail.test(inputs.username)){
        errors.username="el nombre de usuario tiene que ser un email"
      };
    if (inputs.username.length>35){
        errors.username="el nombre de usuario no puede tener más de 35 caracteres"
    }
    if (!regexp_password.test(inputs.password)){
        errors.password="la contraseña tiene que tener al menos un número y una longitud entre 6 y 10 caracteres"
     };
    return errors
}