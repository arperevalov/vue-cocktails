import axios from "axios";
import { defineStore } from "pinia";

const useDefaultStore = defineStore(
    "default",
    {
        state: () => ({
            cocktails: {} as {[cocktailName: string]: CocktailInterface;},
        }),
        getters: {
            getCocktail(state) {
                return (name: string) => {
                    return state.cocktails[name];
                }
            }
        },
        actions: {
            async setCocktail(name: string) {
                try {
                    if (!this.cocktails[name]) {
                        const response = await axios.get(`${import.meta.env.VITE_API}/search.php?s=${name}`);
                        const value = response.data.drinks[0];

                        console.log(value);

                        this.cocktails = {
                            ...this.cocktails,
                            [name]: {
                                ...value
                            }
                        }
                    }
                } catch (error) {
                    
                }
            },
        }
    }
);

export default useDefaultStore;