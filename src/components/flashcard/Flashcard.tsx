import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Button } from "../button/Button";
import "./Flashcard.css";

type FlashcardData = {
    question: string;
    answer: string;
};
export interface FlashcardProps {

    flashcard: FlashcardData;
}

export const Flashcard = ({ flashcard }: FlashcardProps) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <Card className="flashcard rounded-2xl shadow-sm border">
            <div className="flashcard-container">
                <div className={`flashcard-inner ${showAnswer ? 'flipped' : ''}`}>
                    <CardContent className="flashcard-front">
                        <div className="flashcard-label">Question</div>
                        <Typography variant="h6" className="font-semibold mb-2">
                            {flashcard.question}
                        </Typography>
                        <Button
                            severity="medium"
                            onClick={() => setShowAnswer(true)}
                            label="Show Answer"
                        />
                    </CardContent>
                    <CardContent className="flashcard-back">
                        <div className="flashcard-label">Answer</div>
                        <Typography variant="body1" className="text-gray-700">
                            {flashcard.answer}
                        </Typography>
                        <Button
                            severity="low"
                            onClick={() => setShowAnswer(false)}
                            label="Show Question"
                        />
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}
