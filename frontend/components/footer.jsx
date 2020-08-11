import React from "react";


class Footer extends React.Component {
    render() {
        return (
                <div className="footer2">
                    <div className={"footer"}>
                        <div className={"column1"}>
                            <h3>About</h3>
                            <a href="https://www.linkedin.com/in/emina-ramovic-858835187/">LinkedIn</a>
                            <br/>
                            <a href="https://github.com/Emina288">GitHub</a>
                            <br/>
                            < a href="mailto:eminaramovic@hotmail.com">Email me </a>
                            <br/>
                        <a href="https://angel.co/u/emina-ramovic">AngelList</a>
                        </div>

                        <div className={"column2"}>
                            <h3>Books</h3>
                            <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">Best Seller</a>
                            <br/>
                            <a href="https://en.wikipedia.org/wiki/Where_the_Crawdads_Sing">2020 Favorite</a>
                            <br/>
                            <a href="https://en.wikipedia.org/wiki/The_Gambler_(novel)">Classic</a>
                            <br/>
                            <a href="https://en.wikipedia.org/wiki/Oh,_the_Places_You%27ll_Go!">Kids</a>
                        </div>


                    </div>

                </div>
        )
    }

}

export default Footer;