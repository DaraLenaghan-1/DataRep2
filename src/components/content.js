import React from "react";

export class Content extends React.Component{ <!-- Made a folder under src/ called components and added a component to your application that will display the content as in part two. Your component logic should be
added to a file called content. -->
    render(){
        return(
            <div>
            <h1>hello world</h1>
             <h2>It is {new Date().toLocaleTimeString()}.</h2> <!-- dsiplays real time -->
            </div>
        )
    }
}
