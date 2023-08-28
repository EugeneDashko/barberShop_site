import { API_URL } from "..";
import { addPreload, removePreload } from "./preload";
import { renderProf } from "./renderProf";

const addDisabled = (arr) => {
    arr.forEach(element => {
        //добавляю disabled
        element.disabled = true;
    });
};

const removeDisabled = (arr) => {
    arr.forEach(element => {
        //удаляю disabled
        element.disabled = false;
    });

};

export const initReserve = () => {
    const reserveForm = document.querySelector('.reserve__form');
    // console.log('reserveForm: ', reserveForm);
    //получаю все радиогнокпи с радио 'name': professional
    // console.log('reserveForm: ', reserveForm.professional);

    //деструктуризация: вытаскиваю из reserveForm эти элементы
    // const создает переменные с такими именами( к которым потом мы ниже обращаемся):
    const {fieldprof, fielddata, fieldmonth, fieldday, fieldtime, btn} = reserveForm;

    // change смотрю на изменения внутри формы:
    reserveForm.addEventListener('change', async (event) => {
        const target  = event.target;

        if (target.name === 'service') {
            fieldprof.innerHTML = '<legend class="reserve__legend">Специалист</legend>';
            addPreload(fieldprof);

            // способ отличный от fetch: async/ await
            // получаю с сервера барберов по value .reserve__form :
            const response = await fetch(`${API_URL}/api?service=${target.value}`);
            const data = await response.json();
            console.log('data: список барберов: ', data);

            renderProf(fieldprof, data);
            removePreload(fieldprof);
            removeDisabled([fieldprof]);

        }
    })

    addDisabled ([
        reserveForm.fieldprof,
        reserveForm.fielddata,
        reserveForm.fieldmonth,
        reserveForm.fieldday,
        reserveForm.fieldtime,
        reserveForm.btn,
    ]);
};