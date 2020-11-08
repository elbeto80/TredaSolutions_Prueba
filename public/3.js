(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
      miniatura: ''
    };
  },
  computed: {
    imagen: function imagen() {
      return this.miniatura;
    }
  },
  methods: {
    obtenerImagen: function obtenerImagen(e) {
      var file = e.target.files[0];

      if (!file || file == '') {
        this.miniatura = '';
        return false;
      }

      this.imagenProd = file;
      this.cargarImagen(file);
    },
    cargarImagen: function cargarImagen(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.miniatura = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    guardarProducto: function guardarProducto() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var me, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.validarCampos()) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                me = _this2;
                CargandoSweet(0, 'Guardando...');
                formData = new FormData();
                formData.append('nombreProducto', _this2.nombreProducto.trim());
                formData.append('sku', _this2.sku.trim());
                formData.append('file', _this2.imagenProd);
                formData.append('descripcion', _this2.descripcion.trim());
                formData.append('valor', _this2.valor);
                formData.append('tienda', _this2.tienda);
                formData.append('idProducto', _this2.idProducto);
                _context.next = 14;
                return axios.post('/producto/save', formData).then(function (response) {
                  CargandoSweet(1);

                  if (response.data.error) {
                    Success_Error_Mostrar('Error', response.data.info, 'error');
                    return false;
                  }

                  Success_Error_Mostrar("Registro Correcto", response.data.info, "success");
                  me.vaciarCampos();
                  me.getProductos();
                  $("#closeModal").trigger("click");
                })["catch"](function (error) {
                  CargandoSweet(1);
                  console.log(error);
                  Success_Error_Mostrar('Error', error, 'error');
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    vaciarCampos: function vaciarCampos() {
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
    validarCampos: function validarCampos() {
      if (this.nombreProducto.trim() == '') {
        Success_Error_Mostrar('Falta información', 'Nombre producto abligatorio', 'warning');
        return false;
      }

      if (this.sku.trim() == '') {
        Success_Error_Mostrar('Falta información', 'SKU es abligatorio', 'warning');
        return false;
      }

      if (this.descripcion.trim() == '') {
        Success_Error_Mostrar('Falta información', 'Descripcion es abligatorio', 'warning');
        return false;
      }

      if (this.valor == '') {
        Success_Error_Mostrar('Falta información', 'Valor es abligatorio', 'warning');
        return false;
      }

      if (this.tienda == '') {
        Success_Error_Mostrar('Falta información', 'Tienda es abligatorio', 'warning');
        return false;
      }

      if (!this.idProducto) {
        if (this.imagenProd == '') {
          Success_Error_Mostrar('Falta información', 'Imagen es abligatorio', 'warning');
          return false;
        }
      }

      return true;
    },
    getParametrosProd: function getParametrosProd() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var me;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                CargandoSweet(0, 'Cargando...');
                me = _this3;
                _context2.next = 4;
                return axios.get('/getParametrosProd').then(function (response) {
                  me.listaTiendas = response.data.info.tiendas;
                  var html = '<option value="0" disabled selected>Seleccionar tienda...</option>';
                  me.listaTiendas.forEach(function (info) {
                    html += '<option value=' + info.id + '>' + info.nombre + '</option>';
                  });
                  $("#tienda").html(html);
                  CargandoSweet(1);
                })["catch"](function (error) {
                  CargandoSweet(1);
                  console.log(error);
                  Success_Error_Mostrar('Error', error, 'error');
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getProductos: function getProductos() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var me;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                CargandoSweet(0, 'Cargando...');
                me = _this4;
                _context3.next = 4;
                return axios.get('/getProductos', {
                  params: {
                    campoBuscar: me.campoBuscar
                  }
                }).then(function (response) {
                  me.listaProductos = response.data.info.productos;
                  CargandoSweet(1);
                })["catch"](function (error) {
                  CargandoSweet(1);
                  console.log(error);
                  Success_Error_Mostrar('Error', error, 'error');
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    limpiarBusqueda: function limpiarBusqueda() {
      // limpia la busqueda en la tabla segun campo
      this.campoBuscar = '', this.getProductos();
    },
    validarNumeros: function validarNumeros(event) {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !== 8 && event.keyCode !== 9) {
        event.preventDefault();
      }
    },
    eliminarProducto: function eliminarProducto(producto) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Swal.fire({
                  title: "Esta Seguro?",
                  text: "Desea eliminar producto " + producto.nombre + "?",
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#6c757d',
                  confirmButtonText: 'Aceptar',
                  cancelButtonText: 'Cancelar'
                }).then(function (result) {
                  if (result.value) {
                    var me = _this5;
                    CargandoSweet(0, 'Eliminando...');
                    axios.post('/producto/delete', {
                      idProducto: producto.id
                    }).then(function (response) {
                      CargandoSweet(1);

                      if (response.data.error) {
                        Success_Error_Mostrar('Error', response.data.info, 'error');
                        return false;
                      }

                      Success_Error_Mostrar("", response.data.info, "success");
                      me.getProductos();
                      me.vaciarCampos();
                    })["catch"](function (error) {
                      CargandoSweet(1);
                      console.log(error);
                      Success_Error_Mostrar('Error', error, 'error');
                    });
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    editarProducto: function editarProducto(producto) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.getParametrosProd();

              case 2:
                setTimeout(function () {
                  _this6.idProducto = producto.id;
                  _this6.nombreProducto = producto.nombre;
                  _this6.sku = producto.sku;
                  _this6.descripcion = producto.descripcion;
                  _this6.valor = producto.valor;
                  _this6.tienda = producto.tienda; // this.imagenProd = '';
                  // this.miniatura = '';
                }, 100);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this7.getProductos();

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Inicio")])],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Productos")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("hr", { staticStyle: { margin: "0" } })
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "card card-solid" }, [
        _c("div", { staticClass: "card-body padding_07em" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12  mb-3" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#modalNuevoProd",
                    "data-backdrop": "static",
                    "data-keyboard": "false"
                  },
                  on: { click: _vm.getParametrosProd }
                },
                [_vm._v("Nuevo producto")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-6 col-xs-12" }, [
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.campoBuscar,
                      expression: "campoBuscar"
                    }
                  ],
                  staticClass: "form-control form-control-sm",
                  attrs: { type: "text" },
                  domProps: { value: _vm.campoBuscar },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.getProductos($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.campoBuscar = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-sm-6 col-xs-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { value: "filter" },
                  on: { click: _vm.getProductos }
                },
                [_vm._v("Buscar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.limpiarBusqueda }
                },
                [_vm._v("Limpiar")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.listaProductos.length <= 0
                    ? _c("tr", [_vm._m(3)])
                    : _vm._l(_vm.listaProductos, function(producto, index) {
                        return _c("tr", { key: producto.id }, [
                          _c("th", {
                            attrs: { scope: "row" },
                            domProps: { textContent: _vm._s(index + 1) }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { textContent: _vm._s(producto.nombre) }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { textContent: _vm._s(producto.sku) }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: {
                              textContent: _vm._s(producto.descripcion)
                            }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: { textContent: _vm._s(producto.valor) }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: {
                              textContent: _vm._s(producto.nombretienda)
                            }
                          }),
                          _vm._v(" "),
                          _c("td", {
                            domProps: {
                              textContent: _vm._s(producto.imagenPro)
                            }
                          }),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-warning btn-xs",
                                attrs: {
                                  title: "Editar tienda",
                                  "data-toggle": "modal",
                                  "data-target": "#modalNuevoProd"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editarProducto(producto)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "nav-icon fas fa-pencil-alt"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger btn-xs",
                                attrs: { title: "Eliminar tienda" },
                                on: {
                                  click: function($event) {
                                    return _vm.eliminarProducto(producto)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "nav-icon far fa-trash-alt"
                                })
                              ]
                            )
                          ])
                        ])
                      })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalNuevoProd",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myLargeModalLabel",
          "aria-hidden": "true",
          "data-backdrop": "static",
          "data-keyboard": "false"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "exampleModalLabel" }
                },
                [_vm._v("Nuevo producto")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  },
                  on: { click: _vm.vaciarCampos }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.guardarProducto($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "marginBotto_0",
                          attrs: { for: "nombreProducto" }
                        },
                        [_vm._v("Nombre producto")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.nombreProducto,
                            expression: "nombreProducto"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "nombreProducto",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.nombreProducto },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.nombreProducto = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c(
                        "label",
                        { staticClass: "marginBotto_0", attrs: { for: "sku" } },
                        [_vm._v("SKU")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.sku,
                            expression: "sku"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "sku", autocomplete: "off" },
                        domProps: { value: _vm.sku },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.sku = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "marginBotto_0",
                          attrs: { for: "descripcion" }
                        },
                        [_vm._v("Descripción")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.descripcion,
                            expression: "descripcion"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "descripcion",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.descripcion },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.descripcion = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "marginBotto_0",
                          attrs: { for: "valor" }
                        },
                        [_vm._v("Valor")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.valor,
                            expression: "valor"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "valor",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.valor },
                        on: {
                          keydown: _vm.validarNumeros,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.valor = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6 form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "marginBotto_0",
                          attrs: { for: "valor" }
                        },
                        [_vm._v("Tienda")]
                      ),
                      _vm._v(" "),
                      _c("select", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tienda,
                            expression: "tienda"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "tienda" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.tienda = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12 form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "marginBotto_0",
                          attrs: { for: "file" }
                        },
                        [_vm._v("Imagen")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "custom-file" }, [
                        _c("input", {
                          attrs: {
                            id: "file",
                            type: "file",
                            accept: ".jpg, .jpeg, .png, .gif, .bmp"
                          },
                          on: { change: _vm.obtenerImagen }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _vm.miniatura
                        ? _c("label", { staticClass: "marginBotto_0" }, [
                            _vm._v("Vista previa")
                          ])
                        : _vm._e(),
                      _c("br"),
                      _vm._v(" "),
                      _c("img", { attrs: { src: _vm.imagen, width: "120px" } })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.guardarProducto }
                },
                [_vm._v("Guardar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    id: "closeModal"
                  },
                  on: { click: _vm.vaciarCampos }
                },
                [_vm._v("Cerrar")]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Productos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre Producto")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("SKU")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tienda")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Imagen")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ppciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "8" } }, [
      _c("h5", [_vm._v("No Hay Elementos Para Mostrar")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductosComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ProductosComponent.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosComponent.vue?vue&type=template&id=0c04ebd5& */ "./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5&");
/* harmony import */ var _ProductosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductosComponent.vue?vue&type=template&id=0c04ebd5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductosComponent.vue?vue&type=template&id=0c04ebd5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosComponent_vue_vue_type_template_id_0c04ebd5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);