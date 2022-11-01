import React from "react"

export default function Quiz(props) {
    const questionLength = 5

    function genQuestions() {
        const elementArray = []
        for(let i = 0; i < questionLength; i++){
            elementArray.push(
                <div className="question-cont">
                    <h2 className="question-header">Question nr: {i + 1}</h2>
                    <p className="question-text">Alternative Nr: 1</p>
                    <p className="question-text">Alternative Nr: 2</p>
                    <p className="question-text">Alternative Nr: 3</p>
                    <p className="question-text">Alternative Nr: 4</p>
                </div>
            )
        }
        return elementArray
    }
    return (
        <div className="questions"style={{display: props.display}}>
            {genQuestions()}
        </div>
)
}