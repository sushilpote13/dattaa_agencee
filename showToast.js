export const showToast = (task, id) => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    if (task === "delete") {
        toast.textContent = `Product has been removed`;
    } else {
        toast.textContent = `Product has been added`;
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
};