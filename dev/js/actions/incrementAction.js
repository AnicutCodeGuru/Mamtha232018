
export const incrementCounter = (incrementValue) => {
     console.log("You clicked increment button: ", incrementValue );
    return {
        type: 'INCREMENT',
        payload: incrementValue
    }
};