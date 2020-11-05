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
                                    <h3>usuarios</h3>
                                    <p>Usuarios</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </div>
                                <router-link to="/administracion/usuarios" class="small-box-footer">
                                    Ver más <i class="fas fa-arrow-circle-right"></i>
                                </router-link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-6">
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <h3>prestamos</h3>
                                    <p>Total Prestamos</p>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-book"></i>
                                </div>
                                <router-link to="/prestamos/prestamos" class="small-box-footer">
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
            }
        },

        methods: {
        }
    }
</script>