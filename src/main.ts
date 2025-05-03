import './style.css';
import { renderUserList } from './ejercicio';
import { userList } from './ejercicio'; // Asegúrate de exportar `userList` desde `interfaz.ts`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="app">
    <button id="show-users">Mostrar Usuarios</button>
    <ul id="user-list"></ul>
  </div>
`;

// Agregar el evento al botón
document.getElementById('show-users')?.addEventListener('click', () => {
  renderUserList(userList); // Renderiza la lista de usuarios al hacer clic
});