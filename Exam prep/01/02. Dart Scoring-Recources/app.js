window.addEventListener("load", solve);

function solve() {
    let playerNameInput = document.getElementById('player');
    let playerScoreInput = document.getElementById('score');
    let roundInput = document.getElementById('round');

    let publishButton = document.getElementById('add-btn');
    let clearButton = document.querySelector('.clear');

    let formElement = document.querySelector('form')

    publishButton.addEventListener('click',publish);

    function publish() {
        let isInvalidInput = playerNameInput.value === '' ||
            playerScoreInput.value === '' ||
            roundInput.value === ''

        if (isInvalidInput) {
            return;
        }

        let reviewList = document.getElementById('sure-list')
        let publishedList = document.getElementById('scoreboard-list')

        let li = document.createElement('li');
        li.classList.add('dart-item');

        let articleElement = document.createElement('article');

        let nameParagraph = document.createElement('p');
        nameParagraph.textContent = playerNameInput.value;

        let nameVal = playerNameInput.value

        let scoreParagraph = document.createElement('p');
        scoreParagraph.textContent = `Score: ${playerScoreInput.value}`;

        let scoreVal = playerScoreInput.value

        let roundParagraph = document.createElement('p');
        roundParagraph.textContent = `Round: ${roundInput.value}`;

        let roundVal = roundInput.value

        articleElement.appendChild(nameParagraph);
        articleElement.appendChild(scoreParagraph);
        articleElement.appendChild(roundParagraph);

        let editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('edit');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', edit);

        let postButton = document.createElement('button');
        postButton.classList.add('btn');
        postButton.classList.add('ok');
        postButton.textContent = 'ok';
        postButton.addEventListener('click', post);

        li.appendChild(articleElement);
        li.appendChild(editButton);
        li.appendChild(postButton);

        reviewList.appendChild(li);

        publishButton.disabled = true;
        formElement.reset();

        function edit() {
            playerNameInput.value = nameVal;
            playerScoreInput.value = scoreVal;
            roundInput.value = roundVal;

            reviewList.removeChild(li);

            publishButton.disabled = false;
        }

        function post() {
            reviewList.removeChild(li);
            li.removeChild(postButton);
            li.removeChild(editButton);
            publishedList.appendChild(li);
            publishButton.disabled = false;
            clearButton.addEventListener('click', () => {
                location.reload();
            })
        }
    }
}
  