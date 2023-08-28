
export const renderMonth = (wrapper, data) => {
    const labels = data.map(month => {
        const label = document.createElement('label');
        label.classList.add('radio');
        label.innerHTML = `
        <input class="radio__input" type="radio" name="month" value = ${month}>
        <span class="radio__label">${new Intl.DateTimeFormat('ru-RU', {
            month: 'long'
        }).format(new Date(month)) }</span>
        `;
        return label;
    });
    wrapper.append(...labels);
}