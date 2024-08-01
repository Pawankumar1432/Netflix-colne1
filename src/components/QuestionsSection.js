import React, { useState } from 'react';
import styled from 'styled-components';

// Define styled components
const FAQSection = styled.section`
    padding: 20px;
    background-color: #333;
    color: white;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
`;

const FAQHeading = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const FAQItem = styled.div`
    margin-bottom: 15px;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #444;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #555;
    }
`;

const FAQQuestion = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 18px;
`;

const FAQAnswer = styled.div`
    padding: 10px;
    border-top: 1px solid #444;
    background-color: #333;
`;

const QNA = styled.span`
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
`;

const HeroButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #444;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 400px;
    background-color: #555;
    color: white;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    background-color: #e50914;
    color: white;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #f40612;
    }
`;

export default function QuestionsSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
        { question: 'How much does Netflix cost?', answer: 'Netflix offers several pricing tiers based on your viewing needs and the number of screens that can stream simultaneously.' },
        { question: 'What can I watch?', answer: 'You can enjoy a diverse array of content on Netflix, including TV shows, movies, documentaries, and exclusive Netflix Originals.' },
        { question: 'How do I cancel?', answer: 'To cancel your Netflix subscription, go to your account settings and follow the instructions for cancellation.' },
        { question: 'What can I watch on Netflix?', answer: 'Netflix provides a wide range of content including movies, TV shows, documentaries, and exclusive Netflix Originals.' },
        { question: 'Is Netflix good for kids?', answer: 'Yes, Netflix offers a range of family-friendly and kid-friendly content, along with parental controls to manage what your children can watch.' },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <FAQSection>
                <FAQHeading>Frequently Asked Questions</FAQHeading>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} onClick={() => handleToggle(index)}>
                        <FAQQuestion>
                            <span>{faq.question}</span>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 4V20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4 12H20"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </FAQQuestion>
                        {openIndex === index && (
                            <FAQAnswer>
                                <p>{faq.answer}</p>
                            </FAQAnswer>
                        )}
                    </FAQItem>
                ))}
                <QNA>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </QNA>
                <HeroButtons>
                    <Input
                        type="email"
                        placeholder="Email Address"
                    />
                    <Button>
                        Get Started &gt;
                    </Button>
                </HeroButtons>
            </FAQSection>
        </div>
    );
}
