import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

// import First from './components/First';
// import WithParameter from './components/WithParameter';
import WithChildren from './components/WithChildrem';

ReactDOM.render(

    <div>
         {/* <First />
         
         <WithParameter Title = 'Hello' SubTitle = 'World' /> 

         <WithParameter Title = 'Next' SubTitle = 'Level' />  */}
        
         <WithChildren>
             <ul>
                 <li>Felipe</li>
                 <li>Marcella</li>
                 <li>Yuno</li>
                 <li>Floop</li>
             </ul>
         </WithChildren>
    </div>,
   
    document.getElementById('root')
)