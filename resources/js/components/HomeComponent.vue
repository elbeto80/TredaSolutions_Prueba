<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Inicio</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">Inicio</li>
                            <!-- <li class="breadcrumb-item active">Blank Page</li> -->
                        </ol>
                    </div>
                </div>
            </div>
            <hr style="margin: 0;" />
        </section>

        <section class="content">
            <div class="card card-solid div_card">
                <div class="card-body pb-0">
                    <div class="row">
                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-success">
                                <div class="inner">
                                    <h3 v-text="totalTiendas"></h3>
                                    <h4>Tiendas</h4>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-store"></i>
                                </div>
                                <router-link to="/tiendas" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <h3 v-text="totalProductos"></h3>
                                    <h4>Productos</h4>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-shopping-basket"></i>
                                </div>
                                <router-link to="/productos" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                totalTiendas: 0,
                totalProductos: 0,
            }
        },

        methods: {
            async getParametrosHome() {
                CargandoSweet(0, 'Cargando...');
                let me = this;
                await axios.get('/getParametrosHome')
                .then(function (response) {
                    me.totalTiendas = response.data.info.tiendas;
                    me.totalProductos = response.data.info.productos;
                    CargandoSweet(1);
                })
                .catch(function (error) {
                    CargandoSweet(1);
                    console.log(error);
                    Success_Error_Mostrar('Error', error, 'error');
                });
            },
        },

        async mounted() {
            await this.getParametrosHome();
        }
    }
</script>