<!DOCTYPE html>
<html lang="en">
    @include('layouts.admin_header')

    <body class="sb-nav-fixed">
        <div id="app">
            
        @include('layouts.admin_navbar')

        <div id="layoutSidenav">
            @include('layouts.admin_sidebar')
            <div id="layoutSidenav_content">
                <main>
               {{--  @yield('content') --}}
                <admin-master></admin-master>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>

        @include('layouts.admin_footer')
        </div>
    </body>
</html>








