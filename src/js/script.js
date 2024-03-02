window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.todo__input'),
          form = document.querySelector('form'),
          taskTitle = document.querySelector('.tasks__title');

    function tasksList () {
        
        input.value = input.value.trim();
        if(input.value){

            taskTitle.style.display = 'block';

            const tasksWrapper = document.createElement('div');
            tasksWrapper.classList.add('tasks__wrapper');
            document.querySelector('.tasks .container').append(tasksWrapper);

            const tasksContent = document.createElement('div');
            tasksContent.classList.add('tasks__content');
            tasksWrapper.append(tasksContent);

            const tasksAction = document.createElement('div');
            tasksAction.classList.add('tasks__actions');
            tasksWrapper.append(tasksAction);

            const tasksInput = document.createElement('input');
            tasksInput.classList.add('tasks__input');
            tasksInput.setAttribute('readonly', 'readonly');
            tasksInput.value = `${input.value}`;
            tasksContent.append(tasksInput);

            const edit = document.createElement('button');
            edit.classList.add('edit');
            edit.classList.add('tasks__actions-head');
            edit.textContent = 'Edit';
            tasksAction.append(edit);

            const del = document.createElement('button');
            del.classList.add('delete');
            del.classList.add('tasks__actions-head');
            del.textContent = 'Delete';
            tasksAction.append(del);

            edit.addEventListener('click', () => {
                if(edit.textContent == 'Save'){
                    tasksInput.setAttribute('readonly', '');
                    edit.textContent = 'Edit';
                    
                } else if(edit.textContent == 'Edit'){
                    tasksInput.removeAttribute('readonly', 'readonly');
                    tasksInput.focus();
                    edit.textContent = 'Save';
                }
            });

            del.addEventListener('click', () => {
                del.remove();
                const div = document.createElement('div');
                div.classList.add('choice');
                tasksAction.append(div);
                const yes = document.createElement('button');
                const imgYes = document.createElement('img');
                yes.classList.add('yes');
                imgYes.setAttribute('src', '../icons/yes.svg');
                div.append(yes);
                yes.append(imgYes);

                const cancel = document.createElement('button');
                const imgCancel = document.createElement('img');
                cancel.classList.add('cancel');
                imgCancel.setAttribute('src', '../icons/no.svg');
                div.append(cancel);
                cancel.append(imgCancel);

                yes.addEventListener('click', () => {
                    tasksWrapper.remove();
                    if(document.querySelectorAll('.tasks__wrapper').length == 0) {
                        taskTitle.style.display = 'none';
                    }
                });
                cancel.addEventListener('click', () => {
                    div.remove();
                    tasksAction.append(del);
                })
            })
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        tasksList();
        form.reset();
    });
})
