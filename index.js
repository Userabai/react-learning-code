



                                    // here is

      function tick () {

            const element =  (

                    <div>

                          <h1> Hello world </h1>

                          <h2> It is {new Date().toLocaleTimestring()}.</h2>

                    </div>

                );
                 root.render(element);
              }

              setInterval(tick,1000);




                             // here is functional props

        function greeting (props) {

            <h1> How are you? {props.name} </h1>

        }


                                     // here is class props

        class greeting extends React.Component {

            render () {

                return <h1> {this.props.name} </h1>

            }
        }


                                        const root = ReactDOM.createRoot(

                                        document.getElementById('root'));

                                        const element = <greeting name = 'Abai'/>

                                         root.render(element);





             function product (props) {

                return (

                     <div>

                         <h1>  Купить {props.name} </h1>

                     </div>

                )
             }




             function App () {

                 return (

                     <div>

                         <product name = 'Game 1'/>

                         <product name = 'Game 2'/>

                         <product name = 'Game 3'/>

                         <product name = 'Game 4'/>

                         <product name = 'Game 5'/>

                     </div>

                 );
             }

                                    // now it will be Купить Game 1 , Game 2, Game 1 , Game 2

                   function Avatar (props) {

                       <img className = 'Avatar'

                            src = {props.author.avatarUrl}

                            alt = {props.author.name}

                       />

                   }

                   function UserInfo (props) {

                       // UserInfo start

                       <div className = 'UserInfo'>

                           // avatar start

                           <Avatar user = {props.author} />

                           // avatar start

                           //username start

                       </div>

                       //username start

                       // UserInfo end

                   }



             function Comment (props)  {

                 return (

                       <div className = 'Comment'>

                        <UserInfo user {props.author} />

                       <div/>


                                    // UserComment start

                         <div className = 'UserComment'>

                           <UserName user = {props.author.name} />

                         </div>

                                    // UserComment end



                              // Comment date start

                         <div className = 'CommentDate'>

                             {formaDate(props.date)}

                         </div>

                              // Comment date end

                     </div>

                 )

             }



                                // lifecycle

       const root = ReactDOM.createRoot(document.getElementById('root'));

         function Clock (props) {

             return (

                     <div>

                         <h1 Привет {props.name}> </h1>

                         <h2> Осталось {props.date.toLocaleTimeString()} </h2>

                     </div>

             );

         }

          function tick () {

             root.render(<Clock date = {NewDate()}/>);

          }

          setInterval(tick,1000);




          const root =  ReactDOM.render(document.getElementById('root'));





          function Clock (props) {

              return (

                   <div>

                  <h1> Сейчас {props.date.toLocaleTimeString()} </h1>

                  </div>

              )

          }



          function tick () {

             root.render(<Clock date = {new Date} />);

          }

          setInterval(tick,1000);



                    // class


                                    class React.Component {

                                        constructor(x,y)
                                        {

                                            this.props = x;

                                            this.props = y;

                                        }

                                        componentDidMount() {


                                        }

                                        componentDidUpdate() {


                                        }

                                    }


                                    class User extends React.Component {

                                        componentDidMount() {

                                            alert('Hi');

                                        }
                                        render();
                                    }

               let user1 = new User({name:'Aleksey',login:'aleksey@gmail.com'});

               let jsx = user1.render();

               rootDiv.append(jsx.toDOM());

               user1.componentDidMount();



            this.setStae({ 








