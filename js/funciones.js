$.extend(true, $.fn.dataTable.defaults, {
    searching: true,
    ordering: true,
    oLanguage: {
        "sSearch": "Buscar ",
        "sLengthMenu": "Mostrar _MENU_ registros por página",
        "sZeroRecords": "No se encontraron registros",
        "sInfo": "Mostrar _START_ a _END_ de _TOTAL_ registro(s)",
        "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
        "sInfoFiltered": "(filtrados desde _MAX_ registros totales)"
    }
});

$(document).ready(function () { 
    $('#myTable').DataTable({
        pagingType: 'full_numbers',
    });
});

$('#btnMostrar').click(function(){
    $('#myTable').show();
});

$('#btnOcultar').click(function(){
    $('#myTable').hide();
});

$('#btnSwitch').click(function(){
    $('#myTable').toogle();
});

$('#btnColor').click(function(){
    $('#myTable thead tr').addClass('table-primary');
});

$('#btnQuitarColor').click(function(){
    $('#myTable thead tr').removeClass('table-primary');
    $('#myTable').removeClass('table-dark');
});

$('#btnPintar').click(function(){
    $('#myTable').addClass('table-dark');
});


function validarCampos(){
    let resp = true;

    let txtNombre = document.getElementById("txtNombre");
    let txtCorreo = document.getElementById("txtCorreo");
    let taMensaje = document.getElementById("txtMensaje");

    resp = mostrarMensaje(txtNombre, document.getElementById("msjNombre"), resp);
    resp = mostrarMensaje(txtCorreo, document.getElementById("msjCorreo"), resp);
    resp = mostrarMensaje(taMensaje, document.getElementById("msjMensaje"), resp);
    
    if(resp){
        alert('Formulario Enviado!');
    }
}

function mostrarMensaje(Elemento, Mensaje, resp){
    let salida = resp;
    if (Elemento.value!='') {
        Mensaje.classList.add("text-success");
        Mensaje.classList.remove("text-danger");
        Mensaje.innerHTML = "Ok";
    } else {
        Mensaje.classList.add("text-danger");
        Mensaje.classList.remove("text-success");
        Mensaje.innerHTML = "Favor ingresar dato faltante";
        salida = false;
    }
    return salida;
}