export const ScrollTo = (id) => {
    console.log(`Scrolling to ${id}`);
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });  // Chamei a função corretamente
    }
}