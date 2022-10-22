export const normalizeString = (str: string): string => {
    return deleteAccents(str).toLowerCase().trim()
}

export const deleteAccents = (str:string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const cleanStrJson = (str: string): string => {
    return str.replace(/\\/g, "");
}
