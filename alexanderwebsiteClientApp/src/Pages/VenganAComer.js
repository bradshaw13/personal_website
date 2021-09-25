import * as React from 'react'
import './VenganAComer.css';

function VenganAComer() {
    
    return (
        <div className="mainContent">
            <h1 className="messageParagraph">"Vengan A Comer"</h1>
            <div className="intro">
                Vengan A Comer is a collection of family recipes that have been passed on for generations. My mother Graciela Cuellar Bradshaw
                previously built a cookbook for each family members compiled of all the recipes my abuelita, lita as we call her used to make while she was
                growing up. I have decided to make this cookbook digital the recipes and the memories associated with them never fade. Below is a letter
                my Lita wrote addressing all of the family about the history of "Vengan A Comer".
            </div>

            <div className='message'>
                <p className="infoRight">November 2006</p>
                <p className="messageParagraph">&emsp;&emsp;&emsp;Dear Kids, Grandkids, and Great Grandkids,</p>
                <p className="messageParagraph">&emsp;&emsp;&emsp;I learned to cook at a very young age from my mother. Being that we lived in a small community there was only one grocery store that belonged to my father's sister Eduarda.
                    At this store they didn't have any fresh meats or vegetables. The fresh meats were from another small town, or by raising our own livestock. We had to grow our own vegetables.
                    My mother Adelaida enjoyed gardening. 
                </p>
                <p className="messageParagraph">&emsp;&emsp;&emsp;We would make flour or corn tortillas. The flour we could buy, but the corn we had coooked with lime to soften the kernels. We would then wash and rinse the corn and rub it between our hands to get the skin off to grind it.
                    My mother would make the best fresh corn tortillas. I remember she would get up early in the morning and cook for us then we would go to school. My father would then go to work. When we returned we would help her to cook, dinner, wash dishes, and clean the kitchen.
                </p>
                <p className="messageParagraph">&emsp;&emsp;&emsp;
                    Another memory is we used to attend church in the evening to pray the roasry. The priest would drive by in his black car and he would have his arm out rining a little hand bell letting the people know it was time for the rosary or the church bell rang.
                    We would then be in a hurry to make supper and walk a mile to get to church. If the sky was clear, we knew the moon would be shining and we didn't need to carry a lantern.
                </p>
                <p className="messageParagraph">&emsp;&emsp;&emsp;
                    My husband Rigoberto wanted to eat only Mexican food, but I wanted to teach my children how to enjoy different tastes so I would cook a variety of foods at home. I hope you will continue to savor the foods you grew up with and "Vengan a Comer".
                </p>
                <div className="infoRight">
                    <p className="messageParagraph">
                        Love<br/>
                        Your Mother "Lita"
                    </p>
                </div>
                <div className="messageParagraph">
                    p.s Con hambre no hay mal pan. <br/>
                    "With hunger there is no bad bread"
                </div>
                
            </div>
        </div>
    )
}

export default VenganAComer