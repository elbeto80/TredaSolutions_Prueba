function Success_Error_Mostrar(titulo, msj, icon, cerrar) {
    swal({
        title: titulo,
        text: msj.toString(),
        icon: icon,
    });

    if(cerrar == 1) {
    setTimeout(() => {
        swal.close()
    }, 1200);
    }
}

function CargandoSweet(op,msj) {
    if(op == 0) {
        Swal.fire({
            title: msj,
            allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
            Swal.showLoading();
            }
        });
    } else {
        Swal.close();
    }
}

function Error_Function(msj) {
    $("#errorMensaje").Toasts('create', {
        class: 'bg-danger', 
        title: 'Datos Incompletos',
        position: 'topLeft',
        autohide: true,
        delay: 3500,
        icon: 'fas fa-times fa-lg',
        body: msj
    })
}