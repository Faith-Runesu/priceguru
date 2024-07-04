"use client";
import {useTypewriter} from "react-simple-typewriter";

const Header = () => {
    const words = ["For", "the", "right", "prices,", "trust", "the", "Guru."];
    const fullSentence = words.join(" ");

    const [text] = useTypewriter({
        words: [fullSentence],
        loop: 0,
    });

    // Split the text to separate the last word
    const textParts = text.split(" ");
    const lastWord = textParts.pop();
    const sentenceWithoutLastWord = textParts.join(" ");
    return (
        <div className='min-h-[200px]'>
            <p className="small-text">Start shopping smarter today</p>
            <h1 className="text-5xl">
                {sentenceWithoutLastWord}
                <span className="text-primary">{lastWord}</span>
            </h1>
            <p className="mt-6">
                Price comparison for tech and gadgets made easy, start saving with us
                today
            </p>
        </div>
    );
};

export default Header;
