import React from "react";


function Navbar() {

    return (
        <header class="p-3 mb-3 border-bottom bg-danger">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
                    </ul>
                    <div class="btn-group text-end">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
