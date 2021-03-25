export const peticion = {
    obtenerLista: (entidad: string) => {
        const list = localStorage.getItem(entidad);
        const listJson = JSON.parse(list);
        return list == undefined ? [] : listJson;
    },
    agregarElemento: (entidad: string,elemento: any) => {
        const list = localStorage.getItem(entidad);
        const listJson = list == undefined ? [] : JSON.parse(list);
        listJson.push(elemento);
        localStorage.setItem(entidad,JSON.stringify(listJson));
        return true;
    },
    editartElemento: (entidad: string,elemento: any) => {
        const list = localStorage.getItem(entidad);
        let listJson = list == undefined ? [] : JSON.parse(list);
        listJson = listJson.map(item => item.id == elemento.id ? elemento : item);
        localStorage.setItem(entidad,JSON.stringify(listJson));
        return true;
    },
    eliminar: (entidad: string, id: string) => {
        const list = localStorage.getItem(entidad);
        let listJson = list == undefined ? [] : JSON.parse(list);
        listJson = listJson.filter(item => item.id !== id );
        localStorage.setItem(entidad,JSON.stringify(listJson));
        return true;
    },
    
}