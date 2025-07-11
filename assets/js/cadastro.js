document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const formTitle = document.getElementById('form-title');
    const userIdInput = document.getElementById('userId');
    const nomeCompletoInput = document.getElementById('nomeCompleto');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const relacaoInput = document.getElementById('relacao');
    const btnSubmitForm = document.getElementById('btnSubmitForm');
    const btnClearForm = document.getElementById('btnClearForm');

    const userTableBody = document.getElementById('userTableBody');
    const searchInput = document.getElementById('searchInput');
    const userCountElement = document.getElementById('userCount');

    let users = [];
    let editingUserId = null;

    // --- Local Storage ---
    function saveUsersToLocalStorage() {
        localStorage.setItem('communityUsers', JSON.stringify(users));
    }

    function loadUsersFromLocalStorage() {
        const storedUsers = localStorage.getItem('communityUsers');
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        }
    }

    // --- Tabela ---
    function renderTable(usersToRender = users) {
        userTableBody.innerHTML = '';
        if (usersToRender.length === 0 && users.length > 0 && searchInput.value.trim() !== '') {
             const row = userTableBody.insertRow();
             const cell = row.insertCell();
             cell.colSpan = 5;
             cell.textContent = 'Nenhum usuário encontrado com os termos da busca.';
             cell.style.textAlign = 'center';
        } else if (usersToRender.length === 0) {
            const row = userTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 5;
            cell.textContent = 'Nenhum usuário cadastrado ainda.';
            cell.style.textAlign = 'center';
        } else {
            usersToRender.forEach(user => {
                const row = userTableBody.insertRow();
                row.insertCell().textContent = user.nomeCompleto;
                row.insertCell().textContent = user.email;
                row.insertCell().textContent = user.telefone;
                row.insertCell().textContent = user.relacao;

                const actionsCell = row.insertCell();
                actionsCell.classList.add('actions');

                const editButton = document.createElement('button');
                editButton.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`;
                editButton.title = "Editar";
                editButton.classList.add('btn-edit-user');
                editButton.addEventListener('click', () => startEditUser(user.id));
                actionsCell.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;
                deleteButton.title = "Excluir";
                deleteButton.classList.add('btn-delete-user');
                deleteButton.addEventListener('click', () => deleteUser(user.id));
                actionsCell.appendChild(deleteButton);
            });
        }
        updateUserCount(usersToRender.length, users.length);
    }

    function updateUserCount(displayedCount, totalCount) {
        if (searchInput.value.trim() !== '' && totalCount > 0) {
             userCountElement.textContent = `${displayedCount} usuário(s) encontrado(s) de ${totalCount} cadastrado(s).`;
        } else {
             userCountElement.textContent = `${totalCount} usuário(s) cadastrado(s).`;
        }
    }

    // --- Formulário ---
    function clearForm() {
        userForm.reset();
        userIdInput.value = '';
        editingUserId = null;
        formTitle.textContent = 'Cadastro de Usuário';
        btnSubmitForm.textContent = 'Cadastrar';
        nomeCompletoInput.focus();
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const userData = {
            id: editingUserId || Date.now().toString(), // Usa ID existente ou cria novo
            nomeCompleto: nomeCompletoInput.value.trim(),
            email: emailInput.value.trim(),
            telefone: telefoneInput.value.trim(),
            relacao: relacaoInput.value
        };

        if (!userData.nomeCompleto || !userData.email || !userData.relacao) {
            alert('Por favor, preencha os campos obrigatórios: Nome Completo, Email e Relação.');
            return;
        }

        if (editingUserId) {
            // Editando
            const userIndex = users.findIndex(user => user.id === editingUserId);
            if (userIndex > -1) {
                users[userIndex] = userData;
            }
        } else {
            // Cadastrando novo
            users.push(userData);
        }

        saveUsersToLocalStorage();
        renderTableBasedOnSearch();
        clearForm();
    }

    // --- Ações do Usuário ---
    function startEditUser(id) {
        const userToEdit = users.find(user => user.id === id);
        if (userToEdit) {
            editingUserId = id;
            userIdInput.value = userToEdit.id;
            nomeCompletoInput.value = userToEdit.nomeCompleto;
            emailInput.value = userToEdit.email;
            telefoneInput.value = userToEdit.telefone;
            relacaoInput.value = userToEdit.relacao;

            formTitle.textContent = 'Editar Usuário';
            btnSubmitForm.textContent = 'Salvar Alterações';
            window.scrollTo({ top: userForm.offsetTop - 20, behavior: 'smooth' }); // Rola para o formulário
            nomeCompletoInput.focus();
        }
    }

    function deleteUser(id) {
        if (confirm('Tem certeza que deseja excluir este usuário?')) {
            users = users.filter(user => user.id !== id);
            saveUsersToLocalStorage();
            renderTableBasedOnSearch();
            if (editingUserId === id) { // Se estava editando o usuário excluído
                clearForm();
            }
        }
    }

    // --- Busca ---
    function filterUsers() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) {
            return users; // Retorna todos se a busca estiver vazia
        }
        return users.filter(user => {
            return user.nomeCompleto.toLowerCase().includes(searchTerm) ||
                   user.email.toLowerCase().includes(searchTerm) ||
                   user.relacao.toLowerCase().includes(searchTerm);
        });
    }

    function renderTableBasedOnSearch() {
        const filteredUsers = filterUsers();
        renderTable(filteredUsers);
    }

    // --- Event Listeners ---
    userForm.addEventListener('submit', handleFormSubmit);
    btnClearForm.addEventListener('click', clearForm);
    searchInput.addEventListener('input', renderTableBasedOnSearch);

    // --- Inicialização ---
    loadUsersFromLocalStorage();
    renderTable(); // Renderiza a tabela inicial com todos os usuários
});