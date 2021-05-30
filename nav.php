<?php
  echo
  '<div class="container-fluid nav-container">
    <div class="row justify-content-md-center">
      <div class="col-auto g-md-0">
        <a href="index.php" class="nav-link logo px-0 px-md-3">Oblivion Tracker</a>
      </div>
      <div class="col d-md-none text-end">
        <button class="hamburger" type="button" data-bs-toggle="collapse"
            data-bs-target="#pagenavlinks" aria-expanded="false"  aria-controls="pagenavlinks"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon page-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse col-md-auto g-0" id="pagenavlinks">
        <div class="nav flex-column flex-md-row">
          <a href="weapons.php" class="nav-link quick-link">Weapons</a>
          <a href="" class="nav-link quick-link">Armour</a>
          <a href="" class="nav-link quick-link">Settlements</a>
          <a href="" class="nav-link quick-link">Dungeons</a>
          <a href="gates.php" class="nav-link quick-link">Oblivion Gates</a>
        </div>
      </div>
    </div>
  </div>'
?>