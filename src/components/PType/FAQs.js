"use client"

import { useState } from 'react';
import SingleQuestion from './SingleQuestion'
import data from '../../data/pType/data.json'

function FAQs() {
    const [questions, setQuestions] = useState(data);
    return (
        <div className="mx-auto mb-8 p-5 max-w-xl sm:max-w-2xl md:max-w-4xl md:px-4 lg:max-w-5xl xl:max-w-7xl xl:px-2 text-center">
            <h1 className="lg:text-2xl text-xl font-semibold mb-5">FAQs</h1>
            {questions?.map((question) => (
                <SingleQuestion key={question.idx} {...question} />
            ))}
        </div>
    )
}

export default FAQs