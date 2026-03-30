function validarDatos(){

    if (!document.form,nombre.value) {
        alert("Se necesita un Nombre");
        document.form,nombre.focus();
        return false;
    }

    if (!document.form.apellidop.value){
        alert("Se necesita Apellido Paterno");
        document.form.apellidop.focus();
        return false;
    }

    if (!document.form.apellidom.focus.value){
        alert("Se necesita Apellido Materno");
        document.form.apellidom.focus.focus();
        return false;
    }

    return true; //permite enviar el formulario
}