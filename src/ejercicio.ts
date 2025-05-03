interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
};
// Las interfaces se utilizan principalmente para describir la forma de un objeto y son extensibles 
// - Los types son más generales y pueden representar no solo objetos, sino también uniones, intersecciones, 
//   tipos primitivos, etc. Sin embargo, no son extensibles como las interfaces.


// Ejercicio 2

export const userList: Usuario[] = [
    { id: 1, nombre: 'Juan', edad: 25, email: 'mail1@gmail.com',activo: true },
    { id: 2, nombre: 'Pedro', edad: 30, email: 'mail3@gmail.com',activo: true },
    {id: 3, nombre: 'Maria', edad: 28, email: 'mail2@gmail.com',activo: true },
]

const usersss = userList.filter((user)=> user.activo === true)
console.log(usersss)

// Ejercicio 3

class UsuarioClass implements Usuario{
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
    }

    toggleActivo() {
        this.activo = !this.activo;
    }
}

const usuario1 = new UsuarioClass(1, 'Juan', 25, 'juanmail@gmail.com', true);
const usuario2 = new UsuarioClass(2, 'Pedro', 30, 'pedromail@gmail.com,',false);
console.log(usuario1);
console.log(usuario2);

// Ejercicio 4

class AdminUsuario extends UsuarioClass {
    permisos: string[];
    
        constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
            super(id, nombre, edad, email, activo);
            this.permisos = permisos;
        }
    
        
}
const admin1 = new AdminUsuario(3, 'Maria', 28, 'admimail@gmail.com', true, ['crear', 'editar']);
console.log(admin1);

// Ejercicio 5
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    }
        
const productList: Producto [] = [
    { id: 1, nombre: 'Producto 1', precio: 10, stock: 100 },
    { id: 2, nombre: 'Producto 2', precio: 20, stock: 50 },
    { id: 3, nombre: 'Producto 3', precio: 30, stock: 0 },
    { id: 4, nombre: 'Producto 4', precio: 40, stock: 20 },
]

const nombreProducto = productList.map((p)=> p.nombre)
console.log(nombreProducto)
const stockDispponible = productList.filter((p)=> p.stock > 0)
console.log(stockDispponible)

// Ejercicio 6

const productoOrdenado = productList.sort()
console.log("Producto ordenado: ",productoOrdenado)
productList.push({ id: 5, nombre: 'Producto 5', precio: 50, stock: 10 });
console.log(productList)
productList.pop()
console.log(productList)

// Ejercicio 7

function getRandomItem<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
getRandomItem([1, 2, 3, 4, 5]); 
getRandomItem(['a', 'b', 'c']); 
getRandomItem(userList);

// Ejercicio 8

interface Caja<T>{
    contenido: T;
}
class CajaClass<T> implements Caja<T>{
    contenido:T;

    constructor(contenido: T){
        this.contenido = contenido;
    }
}

new CajaClass(UsuarioClass);
new CajaClass(AdminUsuario)

// Ejercico 9
const obtenerDatos = async()=>{
    setTimeout(() => {
        return ["elemento 1", "elemento 2", "elemento 3"]        
    }, 1000);
}

const data = await obtenerDatos();
console.log(data)

//Ejercicio 10

const response = fetch("https://jsonplaceholder.typicode.com/users")
console.log(response)

// Ejercicio 11

export function renderUserList(users: Usuario[]): void {
    const userListElement = document.getElementById('user-list');
    if (userListElement) {
        userListElement.innerHTML = users
            .map(user => `<li>${user.nombre} - ${user.email}</li>`)
            .join('');
    }
}
