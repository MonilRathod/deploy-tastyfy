import React from 'react';
import Upper from './Upper/upper';
import Description from './Description/description';
import Ingredients from './Ingredients/ingredients';
import Instruction from './Instruction/instruction';
import Classes from "./RecipeDetail.module.css"

const receipeDetail = ({Rec}) => {
    return (
        <div className={Classes.Container}>
            <Upper Rec={Rec}></Upper>
            <div className={Classes.partition}></div>
            <Description description = {Rec.description}></Description>
            <Ingredients ingredients={Rec.ingredients}></Ingredients>
            <Instruction instruction={Rec.procedure}></Instruction>
        </div>
    );
}

export default receipeDetail;
