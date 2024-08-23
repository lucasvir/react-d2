export const login = (customValue?: string): void => {
    if (!customValue) {
        alert("Bem vindo!");
        return;
    }

    const firstEmailName = customValue?.split("@")[0];
    alert(`Bem vindo ${firstEmailName}`);
};
