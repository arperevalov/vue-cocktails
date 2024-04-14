import { defineStore } from "pinia";
import useLocalStorageDeletedCocktails from "../composables/useLocalStorageDeletedCocktails";

const { appendStorageItem, resetStorageItems } = useLocalStorageDeletedCocktails();

const useNavStore = defineStore(
    "nav",
    {
        state: () => ({
            items: [
                {
                    name: "Margarita",
                    id: 'margarita',
                    visible: true,
                },
                {
                    name: "Mojito",
                    id: 'mojito',
                    visible: true,
                },
                {
                    name: "A1",
                    id: 'a1',
                    visible: true,
                },
                {
                    name: "Kir",
                    id: 'kir',
                    visible: true,
                },
            ] as {name: string, id: string, visible: boolean}[],
            removedItems: [] as string[],
        }),
        getters: {
            getItems(state) {
                return () => state.items.filter((item) => !state.removedItems.includes(item.id))
            }
        },
        actions: {
            hideItem(id: string) {
                const item = this.items.find((item) => item.id === id);

                if (item) {
                    this.appendRemovedValue(id);
                    item.visible = false;
                }
            },

            restoreItems() {
                this.resetRemovedValues();
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    item.visible = true;
                }
            },

            setRemovedValues(values: string[]) {
                this.removedItems = values;
            },
            
            resetRemovedValues() {
                resetStorageItems();
                this.removedItems = [];
            },

            appendRemovedValue(id: string) {
                appendStorageItem(id);
                this.removedItems = [...this.removedItems, id];
            }
        }
    }
)

export default useNavStore;