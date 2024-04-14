function useLocalStorageDeletedCocktails() {
    const key = "deleted-cocktails";

    const appendStorageItem = (id: string) => {
        const items = getStorageItems();
        const value = JSON.stringify([...items, id]);
        localStorage.setItem(key, value);
    }

    const resetStorageItems = () => {
        localStorage.removeItem(key);
    }

    const getStorageItems = (): string[] => {
        const storageValue = localStorage.getItem(key);
        return storageValue ? JSON.parse(storageValue) : [];
    }

    return {
        appendStorageItem,
        resetStorageItems,
        getStorageItems,
    }
}

export default useLocalStorageDeletedCocktails;