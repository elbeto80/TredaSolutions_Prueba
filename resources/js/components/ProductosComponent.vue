<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Productos</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                            <li class="breadcrumb-item active">Productos</li>
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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevoProd" data-backdrop="static" data-keyboard="false" @click="getParametrosProd">Nuevo producto</button>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm" v-model="campoBuscar" @keyup.enter="getProductos">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter" @click="getProductos">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button" @click="limpiarBusqueda">Limpiar</button>
                        </div>

                    </div>

                    <div class="col-md-12">
                        <table class="table table-bordered">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre Producto</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Tienda</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Ppciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="listaProductos.length <= 0">
                                    <td colspan="8"> <h5>No Hay Elementos Para Mostrar</h5> </td>
                                </tr>
                                <tr v-for="(producto,index) in listaProductos" :key="producto.id" v-else>
                                    <th scope="row" v-text="index+1"></th>
                                    <td v-text="producto.nombre"></td>
                                    <td v-text="producto.sku"></td>
                                    <td v-text="producto.descripcion"></td>
                                    <td v-text="producto.valor"></td>
                                    <td v-text="producto.nombretienda"></td>
                                    <td v-text="producto.imagenPro"></td>
                                    <td>
                                        <button class="btn btn-warning btn-xs" title="Editar tienda" @click="editarProducto(producto)" data-toggle="modal" data-target="#modalNuevoProd">
                                            <i class="nav-icon fas fa-pencil-alt"></i>
                                        </button>
                                        <button class="btn btn-danger btn-xs" title="Eliminar tienda" @click="eliminarProducto(producto)">
                                            <i class="nav-icon far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal registro producto-->
        <div class="modal fade" id="modalNuevoProd" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nuevo producto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="vaciarCampos">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form enctype="multipart/form-data" @submit.prevent="guardarProducto">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="nombreProducto" class="marginBotto_0">Nombre producto</label>
                                    <input type="text" class="form-control" id="nombreProducto" v-model="nombreProducto" autocomplete="off">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="sku" class="marginBotto_0">SKU</label>
                                    <input type="text" class="form-control" id="sku" v-model="sku" autocomplete="off">
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="descripcion" class="marginBotto_0">Descripción</label>
                                    <input type="text" class="form-control" id="descripcion" v-model="descripcion" autocomplete="off">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="valor" class="marginBotto_0">Valor</label>
                                    <input type="text" class="form-control" id="valor" v-model="valor" autocomplete="off" @keydown="validarNumeros">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="valor" class="marginBotto_0">Tienda</label>
                                    <select class="form-control" id="tienda" v-model="tienda">
                                    </select>
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="file" class="marginBotto_0">Imagen</label>
                                    <div class="custom-file">
                                        <input id="file" type="file" accept=".jpg, .jpeg, .png, .gif, .bmp" @change="obtenerImagen">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label v-if="miniatura" class="marginBotto_0">Vista previa</label><br>
                                    <img :src="imagen" width="120px">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="guardarProducto">Guardar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closeModal" @click="vaciarCampos">Cerrar</button>
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
                idProducto: '',
                nombreProducto: '',
                sku: '',
                descripcion: '',
                valor: '',
                listaTiendas: [],
                listaProductos: [],
                tienda: 0,
                campoBuscar: '',
                
                imagenProd: '',
                miniatura: '',
            }
        },

        computed: {
            imagen() {
                return this.miniatura;
            }
        },

        methods: {
            obtenerImagen(e) {
                let file = e.target.files[0];
                if( !file || file == '' ) {
                    this.miniatura = '';
                    return false;
                }
                this.imagenProd = file;
                this.cargarImagen(file);
            },
            cargarImagen(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.miniatura = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            async guardarProducto() {
                if( !this.validarCampos() ) { return false; }
                let me = this;
                CargandoSweet(0, 'Guardando...');
                let formData = new FormData();
                formData.append('nombreProducto', this.nombreProducto.trim());
                formData.append('sku', this.sku.trim());
                formData.append('file', this.imagenProd);
                formData.append('descripcion', this.descripcion.trim());
                formData.append('valor', this.valor);
                formData.append('tienda', this.tienda);
                formData.append('idProducto', this.idProducto);

                await axios.post('/producto/save',formData)
                .then(response => {
                    CargandoSweet(1);
                    if(response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                    }
                    Success_Error_Mostrar("Registro Correcto", response.data.info, "success");
                    me.vaciarCampos();
                    me.getProductos();
                    $("#closeModal").trigger("click");
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            vaciarCampos() {
                this.idProducto = 0;
                this.nombreProducto = '';
                this.sku = '';
                this.descripcion = '';
                this.valor = '';
                this.tienda = 0;
                this.imagenProd = '';
                this.miniatura = '';
                $("#file").val('');
            },

            validarCampos() {
                if( this.nombreProducto.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Nombre producto abligatorio', 'warning');
                    return false;
                }

                if( this.sku.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'SKU es abligatorio', 'warning');
                    return false;
                }                

                if( this.descripcion.trim() == '' ) {
                    Success_Error_Mostrar('Falta información', 'Descripcion es abligatorio', 'warning');
                    return false;
                }

                if( this.valor == '' ) {
                    Success_Error_Mostrar('Falta información', 'Valor es abligatorio', 'warning');
                    return false;
                }

                if( this.tienda == '' ) {
                    Success_Error_Mostrar('Falta información', 'Tienda es abligatorio', 'warning');
                    return false;
                }

                if( !this.idProducto ) {
                    if( this.imagenProd == '' ) {
                        Success_Error_Mostrar('Falta información', 'Imagen es abligatorio', 'warning');
                        return false;
                    }
                }
                return true;
            },

            async getParametrosProd() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get('/getParametrosProd'
                )
                .then(function (response) {
                    me.listaTiendas = response.data.info.tiendas;
                    
                    let html = '<option value="0" disabled selected>Seleccionar tienda...</option>';
                    me.listaTiendas.forEach(info => {
                        html += '<option value='+info.id+'>'+info.nombre+'</option>';
                    });
                    $("#tienda").html(html);

                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },

            async getProductos() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get('/getProductos',{
                    params: {
                        campoBuscar: me.campoBuscar,
                    }
                })
                .then(function (response) {
                    me.listaProductos = response.data.info.productos;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },
            
            limpiarBusqueda() {   // limpia la busqueda en la tabla segun campo
                this.campoBuscar = '',
                this.getProductos();
            },

            validarNumeros(event) {
                if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)  && event.keyCode !==8 && event.keyCode !==9  ){
                    event.preventDefault();
                }
            },

            async eliminarProducto(producto) {
                await Swal.fire({
                    title: "Esta Seguro?",
                    text: "Desea eliminar producto " + producto.nombre + "?",
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
                        axios.post('/producto/delete', {
                            idProducto: producto.id
                        })
                        .then(function (response) {
                            CargandoSweet(1);
                            if(response.data.error) {
                                Success_Error_Mostrar('Error', response.data.info, 'error');
                                return false;
                            }
                            Success_Error_Mostrar("", response.data.info, "success");
                            me.getProductos();
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

            async editarProducto(producto) {
                await this.getParametrosProd();
                setTimeout(() => {
                    this.idProducto = producto.id;
                    this.nombreProducto = producto.nombre;
                    this.sku = producto.sku;
                    this.descripcion = producto.descripcion;
                    this.valor = producto.valor;
                    this.tienda = producto.tienda;
                    // this.imagenProd = '';
                    // this.miniatura = '';
                }, 100);
            }
        },
        
        async mounted() {
            await this.getProductos();
        }
    }
</script>