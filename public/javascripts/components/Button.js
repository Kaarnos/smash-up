export default class Button
{
    constructor () {
        const template = document.createElement('template');
        template.innerHTML = `<button type="button" class="btn btn-primary">Primary</button>`;
        const btn = template.content.firstElementChild;

        btn.addEventListener('click', () => {
            console.log('click on button');
        });

        return btn;       
    }

}