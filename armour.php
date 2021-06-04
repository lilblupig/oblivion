<html lang="en-uk">
    <head>
        <?php
            include "head.php";
        ?>
    </head>

    <body>
        <nav>
            <?php
                include "nav.php";
            ?>
        </nav>

        <main>
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Armour</h1>
                    </div>
                    <div class="col-12">
                        <p>There are many types of armour that can be found in Oblivion, and these are split in to two major groups: light armour and heavy armour.</p>
                        <p>See below for a list of generic armour to collect.</p>
                    </div>
                </div>
            </section>

            <section class="container">
                <div class="row pb-4 text-center">
                    <div class="col-12">
                        <h2>Light Armour</h2>
                    </div>
                    <hr>
                    <div id="rough-leather-list" class="col-12">
                        <h3>Rough Leather</h3>
                        <p>*Exists only in tutorial, no greaves are available</p>
                    </div>
                    <div id="fur-list" class="col-12">
                        <h3>Fur</h3>
                    </div>
                    <div id="leather-list" class="col-12">
                        <h3>Leather</h3>
                        <p>The leather bracers are worn in place of gauntlets, not in addition to</p>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p><button class="btn tracker-btn reset-btn">Reset Page</button>Click here to reset all items (clears data for <strong>all</strong> pages)</p>
                    </div>
                </div>
            </section>

        </main>

        <footer>
            <?php
                include "footer.php";
            ?>
        </footer>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="assets/js/armour.js"></script>
        <script src="assets/js/script.js"></script>
    </body>

</html>
