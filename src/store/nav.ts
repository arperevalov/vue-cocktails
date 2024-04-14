import { defineStore } from "pinia";

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
            ] as {name: string, id: string, visible: boolean}[]
        }),
        getters: {
            getItems(state) {
                return () => state.items
            }
        },
        actions: {
            hideItem(id: string) {
                const item = this.items.find((item) => item.id === id);

                if (item) {
                    item.visible = false;
                }
            },

            restoreItems() {
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    item.visible = true;
                }
            }
        }
    }
)

export default useNavStore;