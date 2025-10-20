'use client'

import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Hero, getHeroById } from '../Hero'
import * as heroData from '../../../data/heroes.json'
import * as modifiedHeroData from '../../../data/heroes.json'


const shuffledHeroes: Hero[] = (modifiedHeroData as Array<Hero>).sort((a, b) => 0.5 - Math.random())!;

type QuestionItem = {
    id: number
    heroId: number
    result: boolean
    hero: Hero
    answers: Hero[]
}


const Question = (
    { hero }: { hero: Hero }
) => {

    let image = hero.image
    //let hero = getHeroById( heroData, heroId)
    if ( hero.aiImages && hero.aiImages.length>0) {
        image = "/api/images/" + hero.aiImages[ Math.floor(Math.random() *  hero.aiImages.length)]
    }

    //let image = (hero.aiImages) = 

    return (
        <div>
            What hero is this
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}


const Choice = (
    { text, cb, isRight }: { text: string, isRight: boolean, cb: (answer: boolean) => void }
) => {
    //console.log("-> " + text + " " + isRight)
    return (
        <Button key={text} variant="primary" onClick={() => cb(isRight)}>{text}</Button>
    )
}


function getRandomizedQuestions(count: number): QuestionItem[] {

    let answers: Array<QuestionItem> = []

    for (var i = 0; i < count; i++) {
        answers.push({
            id: i,
            heroId: shuffledHeroes[0].id,
            result: false,
            hero: shuffledHeroes[0],
            answers: []
        })
        shuffledHeroes.shift()
    }

    //console.log(answers)

    return answers
}

function getRandomAnswers(count: number, hero: Hero): Hero[] {
    let selectedHeroes = [hero]
    for (let index = 0; index < count; index++) {
        selectedHeroes.push(shuffledHeroes[0])
        shuffledHeroes.shift()
    }
    return selectedHeroes.sort((a, b) => 0.5 - Math.random())
}



export default function Page() {


    // prepare questions


    const [questionCount, setQuestionCount] = useState<number>(5)               // length of the quiz
    const [progress, setProgress] = useState<number>(0)                         // current question
    const [result, setResult] = useState<number>(0)                             // right answers
    const [questions, setQuestions] = useState<Array<QuestionItem>>(getRandomizedQuestions(questionCount)) // answers

    const handleAnswer = (isRight: boolean): void => {
        setQuestions(questions.map(q =>
            q.id === progress ? { ...q, result: isRight } : q
        ))
        setResult(result + ((isRight) ? 1 : 0))
        setProgress(progress + 1)
    };


    return (


        <div>
            <h1>Dota AI Hero Quiz</h1>

            <ProgressBar>
                {questions.map((answer, index) => (
                    <ProgressBar key={index} now={(index < progress) ? (100 / questionCount) : 0} variant={(answer.result) ? "success" : "danger"} />
                ))}
            </ProgressBar>

            <Question hero={questions[progress].hero} />

            {getRandomAnswers(3, questions[progress].hero).map((answer, index) => (

                <Choice key={index}
                    cb={handleAnswer}
                    text={answer.name}
                    isRight={(questions[progress].heroId === answer.id) ? true : false}
                />
            ))}
            
        </div>
    )
}