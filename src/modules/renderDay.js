import { year } from "..";

export const renderDay = (wrapper, data, month) => {
    const labels = data.map(day => {
        const label = document.createElement('label');
        label.classList.add('radio');
        label.innerHTML = `
        <input class="radio__input" type="radio" name="day" value = ${day}>
        <span class="radio__label">${new Intl.DateTimeFormat('ru-RU', {
            month: 'long', day: 'numeric'
        }).format(new Date(year, month, day)) }</span>
        `;
        return label;
    });
    wrapper.append(...labels);
}