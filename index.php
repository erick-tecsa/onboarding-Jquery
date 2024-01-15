<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CRUD-JQUERY</title>

        <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    </head>

    <body>

        <div id="toast-place"></div>
       

        <header class="bg-light">

            <nav class="navbar navbar-expand-md navbar-light bg-light container">
                <button type="button" class="btn btn-primary create" data-bs-toggle="modal" data-bs-target="#createModal"
                    data-bs-whatever="@mdo"> Criar contato
                </button>
                <div class="container-fluid searchContainer">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
    </header>

        <!--Create Contact Modal-->

        <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cadastre o usuário abaixo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="createName" class="col-form-label">Nome:</label>
                                <input type="text" class="form-control" id="createName" >
                            </div>
                            <div class="mb-3">
                                <label for="createLastName" class="col-form-label">Sobrenome:</label>
                                <input type="text" class="form-control" id="createLastName" >
                            </div>
                            <div class="mb-3">
                                <label for="createEmail" class="col-form-label">E-mail:</label>
                                <input type="email" class="form-control" id="createEmail" >
                            </div>
                            <div class="mb-3">
                                <label for="createPhone" class="col-form-label">Telefone:</label>
                                <input type="tel" class="form-control" id="createPhone" >
                            </div>
                            <div class="mb-3">
                                <label for="createTitle" class="col-form-label">Título:</label>
                                <input type="text" class="form-control" id="createTitle" >
                            </div>
                           
                        </div>
                        <div id="div-erro" style="color: #dd1128; display:none; text-align: center;">Os dados de nome, sobrenome, e-mail, telefone e título são obrigatórios</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary bg-danger border-0"
                            data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary bg-success border-0 saveButton">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Update Contact Modal -->

        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edite o usuário abaixo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="updateName" class="col-form-label">Nome:</label>
                                <input type="text" class="form-control" id="updateName" required>
                            </div>
                            <div class="mb-3">
                                <label for="updateLastName" class="col-form-label">Sobrenome:</label>
                                <input type="text" class="form-control" id="updateLastName" required>
                            </div>
                            <div class="mb-3">
                                <label for="updateEmail" class="col-form-label">E-mail:</label>
                                <input type="email" class="form-control" id="updateEmail" required>
                            </div>
                            <div class="mb-3">
                                <label for="updatePhone" class="col-form-label">Telefone:</label>
                                <input type="tel" class="form-control" id="updatePhone" required>
                            </div>
                            <div class="mb-3">
                                <label for="updateTitle" class="col-form-label">Título:</label>
                                <input type="text" class="form-control" id="updateTitle" required>
                            </div>
                           
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary bg-danger border-0"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary bg-success border-0 updateButton">Salvar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->

        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Atenção!!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Tem certeza que deseja deletar o contato?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger deleteButton">Deletar</button>
            </div>
            </div>
        </div>
        </div>

        <!-- Table -->
        <main class="container">
            
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sobrenome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Tîtulo</th>
                            <th scope="col">Criado em </th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody id="tbodyList"></tbody>
            </table>
        </main>

        <script src=" ./assets/js/jquery.min.js"></script>
        <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="./routes/routes.js" type="module"></script>

    </body>

</html>