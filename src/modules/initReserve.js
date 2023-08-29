import { API_URL } from "..";
import { addPreload, removePreload } from "./preload";
import { renderDay } from "./renderDay";
import { renderMonth } from "./renderMonth";
import { renderProf } from "./renderProf";
import { renderTime } from "./renderTime";

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

    //получаю все радиогнокпи с радио 'name': professional

    //деструктуризация: вытаскиваю из reserveForm эти элементы
    // const создает переменные с такими именами( к которым потом мы ниже обращаемся):
    const {fieldservice, fieldprof, fielddata, fieldmonth, fieldday, fieldtime, btn} = reserveForm;
        // addDisabled ([
    //     reserveForm.fieldprof,
    //     reserveForm.fielddata,
    //     reserveForm.fieldmonth,
    //     reserveForm.fieldday,
    //     reserveForm.fieldtime,
    //     reserveForm.btn,
    // ]);
    addDisabled ([fieldprof, fielddata, fieldmonth, fieldday, fieldtime, btn]);

    // change смотрю на изменения внутри формы:
    reserveForm.addEventListener('change', async (event) => {
        const target  = event.target;

        if (target.name === 'service') {
            addDisabled ([fieldprof, fielddata, fieldmonth, fieldday, fieldtime, btn]);

            fieldprof.innerHTML = '<legend class="reserve__legend">Специалист</legend>';
            addPreload(fieldprof);

            // способ отличный от fetch: async/ await
            // получаю с сервера барберов по value .reserve__form :
            const response = await fetch(`${API_URL}/api?service=${target.value}`);
            const data = await response.json();

            renderProf(fieldprof, data);
            removePreload(fieldprof);
            removeDisabled([fieldprof]);

        }

        if (target.name === 'professional') {
            addDisabled ([fielddata, fieldmonth, fieldday, fieldtime, btn]);

            addPreload(fieldmonth);

            const response = await fetch(`${API_URL}/api?spec=${target.value}`);
            const data = await response.json();

            fieldmonth.textContent = '';
            renderMonth(fieldmonth, data);
            removePreload(fieldmonth);
            removeDisabled([fielddata, fieldmonth]);

        }

        if (target.name === 'month') {
            addDisabled ([fieldday, fieldtime, btn]);

            addPreload(fieldday);

            const response = await fetch(`${API_URL}/api?spec=${reserveForm.professional.value}&month=${reserveForm.month.value}`);
            const data = await response.json() ;

            fieldday.textContent = '';
            renderDay(fieldday, data, reserveForm.month.value);
            removePreload(fieldday);
            removeDisabled([fieldday]);
        }


        if (target.name === 'day') {
            addDisabled ([fieldtime, btn]);

            addPreload(fieldtime);

            const response = await fetch(`${API_URL}/api?spec=${reserveForm.professional.value}&month=${reserveForm.month.value}&day=${reserveForm.day.value}`);
            const data = await response.json() ;


            fieldtime.textContent = '';
            renderTime(fieldtime, data);
            removePreload(fieldtime);
            removeDisabled([fieldtime]);
        }

        if (target.name === 'time') {
            removeDisabled([btn]);
        }
    });

    //отправка на сервер:
    reserveForm.addEventListener('submit', async (e) => {
        //отменяю перезагрузку страницы при нажатии на кнопку:
        e.preventDefault();

        const formData = new FormData(reserveForm);

        const json = JSON.stringify(Object.fromEntries(formData))
        // console.log('json: ', json);

        const response = await fetch(`${API_URL}/api/order`, {
            method: 'post',
            body: json,
        });

        const data = await response.json();

        addDisabled ([fieldservice, fieldprof, fielddata, fieldmonth, fieldday, fieldtime, btn]);

        const p = document.createElement('p');
        p.textContent = `
        Спасибо за бронь, №${data.id}!
        Ждем вас ${new Intl.DateTimeFormat('ru-RU', {
            month: 'long',
            day: 'numeric',
        }).format(new Date(`${data.month}/${data.day}`))},
        время ${data.time}
        `;
        reserveForm.append(p);
    });
};