import React from "react";
import robStyles from "@/styles/robsStyles/Training.module.css";
import { useState } from 'react';

// function ShapeColorGame() {
//     const [shape, setShape] = useState('');
//     const [color, setColor] = useState('');
//     const [score, setScore] = useState(0);
//     // ...
// }

// const shapes = ['circle', 'square', 'triangle'];
// const colors = ['red', 'blue', 'green'];

// function generateRandomShapeAndColor() {
//     const randomShapeIndex = Math.floor(Math.random() * shapes.length);
//     const randomColorIndex = Math.floor(Math.random() * colors.length);
//     const shape = shapes[randomShapeIndex];
//     const color = colors[randomColorIndex];
//     return { shape, color };
// }

// function updateShapeAndColor() {
//     const { shape, color } = generateRandomShapeAndColor();
//     setShape(shape);
//     setColor(color);
// }

// function updateShapeAndColor() {
//     const { shape, color } = generateRandomShapeAndColor();
//     const userShape = prompt(`What shape is ${color}?`).toLowerCase();
//     if (userShape === shape) {
//       setShape(shape);
//       setColor(color);
//       setScore(score => score + 1);
//     } else {
//       alert('Incorrect! Try again.');
//     }
//   }


const train1 = () => {


    return (
        <>
        <div className={robStyles.tempBox} >
            {/* <h1 >Traing game to test user vision, will have several div boxes with colors and the user will be promted to click on the correct colored box, only then will the user be able to advance to the next page</h1>
            <br/> */}
            <h1>Please remember that your vision is crucial for staying safe during space travel. Your eyes are your primary source of information about your surroundings, so make sure to use them to monitor your instruments, check for potential hazards, and maintain situational awareness. Take breaks when needed to rest your eyes, but also be vigilant and attentive to any changes in your environment. Stay safe and keep a watchful eye on your surroundings.</h1>
            {/* <div>
                <h1> {shape}  {color }</h1>
                <button onClick={updateShapeAndColor}>Next</button>
                <h2>Score: {score}</h2>
            </div> */}
        </div>

        
        
        {/* <div className={robStyles.train1Box}>
            <div className={robStyles.clrBox1} >
                <h1>What is the Color or SHape of this Image?</h1>
                <button></button>
                <div></div>
                <button></button>
            </div>
            <div className={robStyles.clrBox2} >
                <h1>What is the Color or SHape of this Image?</h1>
                <button></button>
                <div></div>
                <button></button>
            </div>
            <div className={robStyles.clrBox3} >
                <h1>What is the Color or SHape of this Image?</h1>
                <button></button>
                <div></div>
                <button></button>
            </div>
        
        </div> */}
        </>
    )
}

export default train1;