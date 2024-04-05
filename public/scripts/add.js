const answerForm = document.querySelector('.answerForm')

if (answerForm) {
    answerForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const { answer, dataset } = event.target;
        console.log(dataset)
        const res = await fetch('/api/question', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer.value,
                questionId: dataset.questionid
            })
        })
        const data = await res.json()
        const messageResponse = document.querySelector('.messageResponse')
        if (res.ok ) {
            answerForm.reset()
            messageResponse.innerHTML = data.message
        } else {
            answerForm.reset()
            messageResponse.innerHTML = data.message
        }
    })
}