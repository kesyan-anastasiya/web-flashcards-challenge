const answerForm = document.querySelector('.answerForm')

if (answerForm) {
    answerForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const { answer, dataset } = event.target;
        const res = await fetch('/api/question', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer.value,
                questionId: dataset.questionId
            })
        })
        const data = await res.json()
        if (data.message === 'Ну каков умничка!!') {
            answer.reset()
            messageResponse.innerHTML = 'Умница! Мама с папой гордятся тобой!'
        } else {
            answer.reset()
            messageResponse.innerHTML = 'Не в этот раз, подумай еще'
        }
    })
}