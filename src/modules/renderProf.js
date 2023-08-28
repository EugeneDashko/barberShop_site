import { API_URL } from "..";

export const renderProf = (wrapper, data) => {

    const labels = data.map(item => {
        const label = document.createElement('label');
        label.classList.add('radio');
        label.innerHTML = `
        <input class="radio__input" type="radio" name="professional" value = ${item.id}>
        <span class="radio__label radio__label_professional" style="--bg-image: url(${API_URL}${item.img})">${item.name}</span>
        `;
        return label;
    });
    wrapper.append(...labels);
};