"use client"

import React, { useState } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SingleQuestion({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between border-2 p-3 my-2 rounded-md">
                <h2
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="text-base font-medium text-black cursor-pointer"
                >
                    {question}
                </h2>
                {showAnswer ? (
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                ) : (
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                       <FontAwesomeIcon icon={faPlus} /> 
                       {/* <BsPlus className="text-xl" /> */}
                    </button>
                )}
            </div>
            <div className="px-5">{showAnswer && <p className='text-left text-base font-medium text-grey-700'>{answer}</p>}</div>
        </>
    )
}

export default SingleQuestion