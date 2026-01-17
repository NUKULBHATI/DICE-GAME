import React, { useEffect as useffect } from 'react'
import './gameplay.css'
import './roledice.css'

const gameplay = () => {
    const [isResetting, setIsResetting] = React.useState(false);
    const [error, setError] = React.useState("");
    const [score, setScore] = React.useState(0);
    const [diceNumber, setDiceNumber] = React.useState(null);
    const [selectedNumber, setSelectedNumber] = React.useState(null);
    console.log(selectedNumber);


    const generaterandomNumber = () => {
        if (selectedNumber === null) {
            setError(true);     // show error
            return;             // ❌ STOP rolling
        }

        setError(false);        // clear error
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber);

        setIsResetting(true);

        setTimeout(() => {
            setSelectedNumber(null);  // number unselect
            setDiceNumber(null);
            setIsResetting(false);
        }, 1500);
    };

    const handleNumberSelect = (num) => {
        setSelectedNumber(num);
        setError(false);
    };
    useffect(() => {
        if (selectedNumber && diceNumber) {
            if (selectedNumber === diceNumber) {
                setScore(prevScore => prevScore + diceNumber);
            }
        }
    }, [diceNumber, selectedNumber]);


    const diceImages = {
        1: 'dice_1.png',
        2: 'dice_2.png',
        3: 'dice_3.png',
        4: 'dice_4.png',
        5: 'dice_5.png',
        6: 'dice_6.png',
    };




    return (
        <div>
            <div className='navbar'>
                <div className='score'>
                    <h1>{score}</h1>
                    <p className='ts'>Total Score</p>
                </div>

                <div className='select'>
                    {error && (
                        <p style={{ color: "red", fontWeight: "bold" }}>
                            Please select a number before rolling the dice.
                        </p>
                    )}

                    <div className='number'>
                        <p style={{ backgroundColor: selectedNumber === 1 ? 'black' : 'white', color: selectedNumber === 1 ? 'white' : 'black' }} onClick={() => handleNumberSelect(1)}>1</p>
                        <p style={{ backgroundColor: selectedNumber === 2 ? 'black' : 'white', color: selectedNumber === 2 ? 'white' : 'black' }} onClick={() => handleNumberSelect(2)}>2</p>
                        <p style={{ backgroundColor: selectedNumber === 3 ? 'black' : 'white', color: selectedNumber === 3 ? 'white' : 'black' }} onClick={() => handleNumberSelect(3)}>3</p>
                        <p style={{ backgroundColor: selectedNumber === 4 ? 'black' : 'white', color: selectedNumber === 4 ? 'white' : 'black' }} onClick={() => handleNumberSelect(4)}>4</p>
                        <p style={{ backgroundColor: selectedNumber === 5 ? 'black' : 'white', color: selectedNumber === 5 ? 'white' : 'black' }} onClick={() => handleNumberSelect(5)}>5</p>
                        <p style={{ backgroundColor: selectedNumber === 6 ? 'black' : 'white', color: selectedNumber === 6 ? 'white' : 'black' }} onClick={() => handleNumberSelect(6)}>6</p>
                    </div>
                    <div className='sn'>
                        <p>Select Number</p>
                    </div>
                </div>
            </div>

            {/* <div onClick={() => generaterandomNumber(1, 6)} className='roledice'>
                <img src={diceImages[diceNumber] || "dice_1.png"} alt="" />
                <p className='txt'>Click On Dice to Roll</p>
                {isResetting && (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                        Please wait! Dice is resetting...
                    </p>
                )}
            </div> */}

            <div
                className='roledice'
                onClick={!isResetting ? generaterandomNumber : undefined}
                style={{ pointerEvents: isResetting ? "none" : "auto", opacity: isResetting ? 0.6 : 1 }}
            >
                <img src={diceImages[diceNumber] || "dice_1.png"} alt="" />
                <p className='txt'>Click On Dice to Roll</p>
            </div>


            <div className='results'>

                {
                    selectedNumber && <div className='selectednumber'>
                        <h2>Your Selected Number is: {selectedNumber}</h2>
                    </div>
                }
                {/* {
                    diceNumber && <div className='diceresult'>
                        <h2>Dice Rolled Number is: {diceNumber}</h2>
                    </div>
                }

                {
                    (selectedNumber && diceNumber) && (selectedNumber === diceNumber ?
                        <div className='resultwin'>
                            <h1>You Win!</h1>

                        </div>
                        : <div className='resultlose'>
                            <h1>You Lose!</h1>
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}

export default gameplay
