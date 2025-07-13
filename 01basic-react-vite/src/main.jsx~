import React from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
	return(
		<h1>Custom App | Tea</h1>
	)
}


const reactElement = { type: 'a', 
	props: {
		href: 'https://google.com',
		target: '_blank'
	},
	children: 'Click me to visit Google'
}

const anotherElement = (<a href='https://google.com' target='_blank'>Visit Google</a>)	

const anotherReactElement = React.createElement('a', {
	'href': 'https://google.com', 
	'target': '_blank',
}, 'Click here to visit google')

createRoot(document.getElementById('root')).render( 
	
	//<MyApp/>
	
	// these react elements will not work
	
	// this means that we are calling reactElement() function and reactElement is an object.
	// <reactElement/> 
	
	// similar for this ReactElement() function
	// <ReactElement/> 
	
	// this is true syntax for object. for object we jsut write it we do not call it.
	// ReactElement
	
	// the following runs because it gets converted into object the react expects the keys values are those which are defined by react.
	// anotherElement
	
	anotherReactElement
)
