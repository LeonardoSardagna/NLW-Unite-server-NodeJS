export function generateSlug(text: string): string {
    return text
        .toLowerCase() // converter para minúsculas
        .normalize("NFD") // normalizar caracteres unicode
        .replace(/[\u0300-\u036f]/g, "") // remover diacríticos
        .replace(/[^\w\s]/g, "") // remover símbolos
        .replace(/\s+/g, "-"); // substituir espaços por hífens
}