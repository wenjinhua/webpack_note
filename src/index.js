// import _ from 'lodash';
// import printMe from './print';
import { cube } from './math';

  function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');

//    // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     btn.innerHTML = 'click me and check the console';
//     btn.onClick = printMe;
    
//     element.appendChild(btn);

//     return element;

//tree shaking
    var element = document.createElement('pre');

    element.innerHTML = [
        'hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element;
  }

  document.body.appendChild(component());

//   if(module.hot){
//       module.hot.accept('./print.js', function(){
//           console.log('Accepting the updated printMe module!');
//           printMe();
//       })
//   }