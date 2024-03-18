import React from 'react';
import style from './Description.module.css'
function Description({Description}) {
    
    function renderDescription() {

        // VERIFICANDO SE OS DADOS JÁ FORAM CARREGADOS
        
        if (Description && Description.en) {

            let description = Description.en;

            //RETORNANDO UM JSX QUE CORRIGE O BUG DAS TAGS (<a>) DA API
            return <div dangerouslySetInnerHTML={{ __html: description }} />;
        } 
        
        else {

            return;
        }
    }



    return (
        <div className={style.DescriptionCointaner}>

            <p className={style.Paragraph}>

                {renderDescription()}

            </p>
        </div>
    );

}

export default Description;