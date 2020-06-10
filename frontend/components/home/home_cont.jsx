import React from "react";
import BookIndexContainer from "../books/book_index_container";

class HomeCont extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div className="color" >

           <BookIndexContainer />

           </div>
        )
    }
}

export default HomeCont;