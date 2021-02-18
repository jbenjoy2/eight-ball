import React, { useState } from 'react';
import './EightBall.css';

function randChoice(arr) {
	const randIdx = Math.floor(Math.random() * arr.length);
	return arr[randIdx];
}

const EightBall = ({ answers }) => {
	// use state for message and color
	const [ msg, setMsg ] = useState('Think of a question...');
    const [ color, setColor ] = useState('black');
    const [ cursor, setCursor] = useState('pointer')
    const [clicked, setClicked] = useState(false)
	const clickHandler = () => {
		const { msg, color } = randChoice(answers);
		if(!clicked) {
            setColor(color);
            setMsg(msg);
            setClicked(true);
            setCursor('not-allowed')
        }
        
    };
    const reset = () =>{
        setColor('black');
        setMsg("Think of a question...")
        setClicked(false);
        setCursor('pointer')
    }

	return (
        <>
            <div className="EightBall" onClick={clickHandler} style={{ backgroundColor: color, cursor: cursor }}>
                <div className="EightBall-triangle">
                    <span className="EightBall-msg">{msg}</span>
                </div>
            </div>
            <button className="EightBall-button" onClick={reset}>Start Again</button>
            
        </>
	);
};

EightBall.defaultProps = {
	answers : [
		{ msg: 'It is certain.', color: 'green' },
		{ msg: 'It is decidedly so.', color: 'green' },
		{ msg: 'Without a doubt.', color: 'green' },
		{ msg: 'Yes - definitely.', color: 'green' },
		{ msg: 'You may rely on it.', color: 'green' },
		{ msg: 'As I see it, yes.', color: 'green' },
		{ msg: 'Most likely.', color: 'green' },
		{ msg: 'Outlook good.', color: 'green' },
		{ msg: 'Yes.', color: 'green' },
		{ msg: 'Signs point to yes.', color: 'goldenrod' },
		{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
		{ msg: 'Ask again later.', color: 'goldenrod' },
		{ msg: 'Better not tell you now.', color: 'goldenrod' },
		{ msg: 'Cannot predict now.', color: 'goldenrod' },
		{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
		{ msg: "Don't count on it.", color: 'red' },
		{ msg: 'My reply is no.', color: 'red' },
		{ msg: 'My sources say no.', color: 'red' },
		{ msg: 'Outlook not so good.', color: 'red' },
		{ msg: 'Very doubtful.', color: 'red' }
	]
};

export default EightBall;
