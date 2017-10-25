// import React from 'react';
// // import Posts from '../Posts/Posts';

// import * as firebase from "firebase";

// import config from './firebase-config';

// class InputForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//                 idea: "",
//                 location: "TBD",
//                 date: "TBD",
//                 budget: "TBD",
//                 allInfo: [],
//         }
//         this.update = this.update.bind(this)
        
//         firebase.initializeApp(config);
//     }
//     update(e){
//         this.setState({[e.target.name]: e.target.value})
//     }
//     addIdea(e){
//         e.preventDefault();

//         if (this.state.idea === "") {
//             alert("Please include an idea before submitting.");
//         } else {

//         const {idea, location, date, budget, allInfo} = this.state;

//         let ideaPanel = {
//             idea,
//             location,
//             date,
//             budget, 
//         };

//         const copy = allInfo.slice();

//         copy.push(ideaPanel);
//         this.setState({
//             allInfo: copy
//         });

//         console.log(this);

//         // save to firebase

//         this.state.firebase.ref('posts').push({
//             title: this.state.title,
//             location: this.state.location,
//             date: this.state.date,
//             budget: this.state.budget,            
//           });
      

//     }
// }

//     render() { 
//         console.log(this.state)
//         return (
//             <div>
//                 <form onSubmit={this.addIdea.bind(this)}>
//                     <input name="idea" 
//                     placeholder="Idea Name" 
//                     type="text"
//                     onChange={this.update}
//                     />
//                     <input name="location" 
//                     placeholder="Location(optional)" 
//                     type="text"
//                     onChange={this.update}
//                     />
//                     <input name="date" 
//                     placeholder="Date(s)(optional)" 
//                     type="text"
//                     onChange={this.update}
//                     />
//                     <input name="budget" 
//                     placeholder="Budget(optional)" 
//                     type="text"
//                     onChange={this.update}
//                     />
//                     <button type="submit">Submit Idea
//                     </button>
//                 </form> 
                
//                 {/* {
//                     this.state.allInfo.map((i) => {
//                         return <Posts
//                             idea={i.idea}
//                             date={i.date}
//                             location={i.location}
//                             budget={i.budget}
//                           />
//                       })
//                   }  */}
//             </div>
//         )
//     }
// }

// export default InputForm;



import React from 'react';

class AddPost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      location: "",
      date: "",
      budget: "",
      allInfo: []      
    };
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({[e.target.name]: e.target.value})    
  }

  addIdea(e){
    e.preventDefault();

    this.props.firebase.ref('posts').push({
      title: this.state.title,
      date: this.state.date,
      location: this.state.location,
      budget: this.state.budget,
      upvote: 0,
    });

    this.setState({
      title: '',
      location: "",
      date: "",
      budget: ""
    });
  }

  render() {
    return (
      <AddPost>
        <form onSubmit={this.addIdea.bind(this)}>
            <input name="title" 
            placeholder="Idea Name" 
            type="text"
            onChange={this.update}
            />
            <input name="location" 
            placeholder="Location(optional)" 
            type="text"
            onChange={this.update}
            />
            <input name="date" 
            placeholder="Date(s)(optional)" 
            type="text"
            onChange={this.update}
            />
            <input name="budget" 
            placeholder="Budget(optional)" 
            type="text"
            onChange={this.update}
            />
            <button type="submit">Submit Idea
            </button>
        </form> 
      </AddPost>
    );
  }
}

export default AddPost;
