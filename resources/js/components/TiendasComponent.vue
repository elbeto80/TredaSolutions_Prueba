<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Tiendas</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">Tiendas</li>
                        </ol>
                    </div>
                </div>
            </div>
            <hr style="margin: 0;" />
        </section>

        <section class="content">
            <div class="card card-solid">
                <div class="card-body padding_07em">
                    <div class="row">
                        <div class="col-md-12  mb-3">
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevaTienda">Nueva tienda</button>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm" v-model="campoBuscar" @keyup.enter="getTiendas">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter" @click="getTiendas">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button" @click="limpiarBusqueda">Limpiar</button>
                        </div>

                        <div class="col-md-12">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre tienda</th>
                                        <th scope="col">Fecha apertura</th>
                                        <th scope="col">Productos</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="listaTiendas.length <= 0">
                                        <td colspan="5"> <h5>No Hay Elementos Para Mostrar</h5> </td>
                                    </tr>
                                    <tr v-for="(tienda,index) in listaTiendas" :key="tienda.id" v-else>
                                        <th scope="row" v-text="index+1"></th>
                                        <td v-text="tienda.nombre"></td>
                                        <td v-text="formato_fecha_corta(tienda.fecha_apertura)"></td>
                                        <td>
                                            <button class="btn btn-success btn-xs" title="Ver productos de tienda">
                                                <i class="nav-icon fas fa-shopping-basket"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button class="btn btn-warning btn-xs" title="Editar tienda" @click="editarTienda(tienda)" data-toggle="modal" data-target="#modalNuevaTienda">
                                                <i class="nav-icon fas fa-pencil-alt"></i>
                                            </button>
                                            <button class="btn btn-danger btn-xs" title="Eliminar tienda" @click="eliminarTienda(tienda)">
                                                <i class="nav-icon far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Modal registro tienda -->
        <div class="modal fade" id="modalNuevaTienda" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nueva tienda</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="vaciarCampos">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="nombreTienda">Nombre tienda</label>
                                <input type="text" class="form-control" id="nombreTienda" v-model="nombreTienda" autocomplete="off">
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="fechaApertura">Fecha apertura</label>
                                <input type="date" class="form-control" id="fechaApertura" v-model="fecha_apertura" autocomplete="off">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="guardarTienda">Guardar</button>
                        <button  id="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal" data-backdrop="false" @click="vaciarCampos">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                idTienda: 0,
                nombreTienda: '',
                fecha_apertura: '',
                listaTiendas: [],
                campoBuscar: '',
            }
        },

        methods: {
            async getTiendas() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get('/getTiendas',{
                    params: {
                        campoBuscar: me.campoBuscar,
                    }
                })
                .then(function (response) {
                    me.listaTiendas = response.data.info.tiendas;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            async guardarTienda() {
                if( !this.validarCampos() ) { return false; }
                let me = this;
                CargandoSweet(0, 'Guardando...');
                await axios.post('/tiendas/save', {
                    idTienda       : me.idTienda,
                    nombreTienda   : me.nombreTienda.trim(),
                    fecha_apertura : me.fecha_apertura,
                })
                .then(function (response) {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    Success_Error_Mostrar("Registro Correcto", response.data.info, "success");
                    me.getTiendas();
                    $("#closeModal").trigger( "click" );
                    me.vaciarCampos();
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            validarCampos() {
                if( this.nombreTienda.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Nombre de tienda abligatorio', 'warning');
                    return false;
                }

                if( this.fecha_apertura == '' ) {
                    Success_Error_Mostrar('Falta información', 'Fecha de apertura es abligatorio', 'warning');
                    return false;
                }
                return true;
            },

            formato_fecha_corta(fecha){  // regresa formato en fecha para mostrar en tabla
                if (fecha) {
                  return moment(fecha, 'YYYY-MM-DD h:mm:ss').format('DD/MM/YYYY');
                }
            },

            vaciarCampos() {
                this.idTienda = 0;
                this.nombreTienda = '';
                this.fecha_apertura = '';
            },

            editarTienda(tienda) {
                this.idTienda = tienda.id;
                this.nombreTienda = tienda.nombre;
                this.fecha_apertura = tienda.fecha_apertura;
            },

            async eliminarTienda(tienda) {
                await Swal.fire({
                    title: "Esta Seguro?",
                    text: "Desea eliminar tienda " + tienda.nombre + "?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#6c757d',
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                })
                .then((result) => {
                    if (result.value) {
                        let me = this;
                        CargandoSweet(0, 'Eliminando...');
                        axios.post('/tiendas/delete', {
                            idTienda: tienda.id
                        })
                        .then(function (response) {
                            CargandoSweet(1);
                            if(response.data.error) {
                                Success_Error_Mostrar('Error', response.data.info, 'error');
                                return false;
                            }
                            Success_Error_Mostrar("", response.data.info, "success");
                            me.getTiendas();
                            me.vaciarCampos();
                        })
                        .catch(function (error) {
                            CargandoSweet(1);
                            console.log(error);
                            Success_Error_Mostrar('Error', error, 'error');
                        });
                    } 
                });
            },

            limpiarBusqueda() {   // limpia la busqueda en la tabla segun campo
                this.campoBuscar = '',
                this.getTiendas();
            }
        },
        
        async mounted() {
            await this.getTiendas();
        }
    }
</script>