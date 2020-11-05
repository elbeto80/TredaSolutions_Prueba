<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link to="/" class="brand-link">
        <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <router-link to="/" class="d-block">Alberto Alvarez</router-link>
            </div>
        </div>

        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/tiendas" class="nav-link">
                        <i class="nav-icon fas fa-store"></i>
                        <p>
                            Tiendas
                        </router-link>
                    </a>
                </li>

                <li class="nav-item">
                    <router-link to="/productos" class="nav-link">
                        <i class="nav-icon fas fa-shopping-basket"></i>
                        <p>
                            Productos
                        </p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</aside>