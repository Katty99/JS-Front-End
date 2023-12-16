window.addEventListener("load", solve);

function solve() {
    let studentNameInput = document.getElementById('student');
    let universityInput = document.getElementById('university');
    let scoreInput = document.getElementById('score');

    let nextButton = document.getElementById('next-btn');

    let formElement = document.querySelector('.applyContent')

    nextButton.addEventListener('click',publish);

    function publish() {
        let isInvalidInput = studentNameInput.value === '' ||
            universityInput.value === '' ||
            scoreInput.value === ''

        if (isInvalidInput) {
            return;
        }

        let reviewList = document.getElementById('preview-list')
        let publishedList = document.getElementById('candidates-list')

        let li = document.createElement('li');
        li.classList.add('application');

        let articleElement = document.createElement('article');

        let nameHeading = document.createElement('h4');
        nameHeading.textContent = studentNameInput.value;

        let nameVal = studentNameInput.value

        let universityParagraph = document.createElement('p');
        universityParagraph.textContent = `University: ${universityInput.value}`;

        let universityVal = universityInput.value

        let scoreParagraph = document.createElement('p');
        scoreParagraph.textContent = `Score: ${scoreInput.value}`;

        let scoreVal = scoreInput.value

        articleElement.appendChild(nameHeading);
        articleElement.appendChild(universityParagraph);
        articleElement.appendChild(scoreParagraph);

        let editButton = document.createElement('button');
        editButton.classList.add('action-btn');
        editButton.classList.add('edit');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', edit);

        let postButton = document.createElement('button');
        postButton.classList.add('action-btn');
        postButton.classList.add('apply');
        postButton.textContent = 'apply';
        postButton.addEventListener('click', post);

        li.appendChild(articleElement);
        li.appendChild(editButton);
        li.appendChild(postButton);

        reviewList.appendChild(li);

        nextButton.disabled = true;
        formElement.reset();

        function edit() {
            studentNameInput.value = nameVal;
            universityInput.value = universityVal;
            scoreInput.value = scoreVal;

            reviewList.removeChild(li);

            nextButton.disabled = false;
        }

        function post() {
            reviewList.removeChild(li);
            li.removeChild(postButton);
            li.removeChild(editButton);
            publishedList.appendChild(li);
            nextButton.disabled = false;
        }
    }
}
  