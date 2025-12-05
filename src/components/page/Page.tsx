import React from 'react';

import './page.css';
import { Box } from '@mui/material';
import { Flashcard } from '../flashcard/Flashcard';


type Flashcard = {
    question: string;
    answer: string;
}
export interface PageProps {
    flashcardData?: Flashcard[];

}
export const Page: React.FC<PageProps> = ({ flashcardData = [] }) => {

    return (
        <article>


            <section className="storybook-page">


                <Box height={"100%"} sx={{ height: "100%", display: "flex", flexDirection: "column" }} >
                    {flashcardData.length !== 0 ? (
                        flashcardData.map((card: Flashcard) => (
                            <div style={{
                                display: "flex", paddingBottom: "10px", alignSelf: "center"
                            }}>
                                <Flashcard key={card.question} flashcard={card} />
                            </div>))
                    ) : (
                        <h4>No flashcards available</h4>
                    )}

                </Box>
            </section>
        </article>
    );
};
