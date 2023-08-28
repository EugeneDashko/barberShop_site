
//Сортировка: data.sort((a,b) => a > b ? 1: -1)
export const renderTime = (wrapper, data) =>{
    const labels = data.map(time => {
        const label = document.createElement('label');
        label.classList.add('radio');
        label.innerHTML = `
        <input class="radio__input" type="radio" name="time" value = ${time}>
        <span class="radio__label">${time}</span>
        `;
        return label;
    });
    wrapper.append(...labels);
}