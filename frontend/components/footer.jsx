import React from "react";


class Footer extends React.Component {
    render() {
        return (
                <div>
                    <div className={"footer"}>
                        <div className={"column1"}>
                            <h3>About</h3>
                            <a href="https://www.linkedin.com/in/emina-ramovic-858835187/">Linkedin</a>
                            <br/>
                            <a href="https://github.com/Emina288">Github</a>
                            <br/>
                            < a href="mailto:eminaramovic@hotmail.com">Email me </a>
                            <br/>
                            <a href="https://instagram.com">Instagram</a>
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

                        <div className={"column3"}> 
                            <a href="https://apps.apple.com/app/apple-store/id355833469">
                                <img src={window.app} width="135px" height="40px"/>
                            </a>

                            <a href="https://play.google.com/store/apps/details?id=com.goodreads&utm_source=mw_footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                                <img src={window.play} width="135px" height="40px"/>
                            </a>

                        </div>

                    </div>

                </div>
        )
    }

}

export default Footer;