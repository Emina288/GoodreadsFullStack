import React from "react";


class MainContent extends React.Component {
    render() {
        return (
           <div className={"main-cont"}>
               <div className={"main"}>
               <div className={"book"} >
                   <div  className={"books"} >
                   <a href="https://en.wikipedia.org/wiki/Angels_%26_Demons">
                   <img src={window.angels}width="269"/> 
                   </a>
                   </div>
                   <div className={"book-prew"}>
                       <h4>Angels and Demons</h4>
                       <br/>
                       <br/>
                       <p>When world-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a mysterious symbol — seared into the chest of a murdered physicist — he discovers evidence of the unimaginable: the resurgence of an ancient secret brotherhood known as the Illuminati… the most powerful underground organization ever to walk the earth.</p>
                   </div>
                </div>
                   <br/>

                   <div className={"book"} >
                       <div className={"books"}> 
                        <a href="https://en.wikipedia.org/wiki/The_Da_Vinci_Code">
                        <img src={window.code}  width="269"/>
                        </a>
                    </div>
                    <div className={"book-prew"}>
                        <h4>The Da Vinci Code</h4>
                        <br/>
                        <br/>
                        <p>While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call: the elderly curator of the Louvre has been murdered inside the museum. Near the body, police have found a baffling cipher. Solving the enigmatic riddle, Langdon is stunned to discover it leads to a trail of clues hidden in the works of da Vinci…clues visible for all to see…and yet ingeniously disguised by the painter.</p>
                    </div>
                   </div>
    
                   <br/>

                   <div className={"book"} >
                       <div className={"books"} >
                            <a href="https://en.wikipedia.org/wiki/The_Lost_Symbol" >
                            <img src={window.symbol}  width="269"/>
                            </a>
                            </div>
                            <div className={"book-prew"}>
                                <h4>The Lost Symbol</h4>
                                <br/>
                                <br/>
                                <p>The Lost Symbol is a masterstroke of storytelling–a deadly race through a real-world labyrinth of codes, secrets, and unseen truths… all under the watchful eye of Brown’s most terrifying villain to date. Set within the hidden chambers, tunnels, and temples of Washington, D.C., The Lost Symbol accelerates through a startling landscape toward an unthinkable finale.</p>
                            
                            </div>
                    </div>

                </div>

           </div> 
        )
    }

}

export default MainContent;