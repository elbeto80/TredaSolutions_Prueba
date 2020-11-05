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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modalRegistrarEditorial" data-backdrop="static" data-keyboard="false">Nueva Editorial</button>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-sm">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <button class="btn btn-primary btn-sm" value="filter">Buscar</button>
                            <button class="btn btn-secondary btn-sm" type="button">Limpiar</button>
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
            async getTiendas() {
                let me = this;
                await axios.get('/getTiendas')
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
             }
        },
        
        async mounted() {
            await this.getTiendas();
        }
    }
</script>