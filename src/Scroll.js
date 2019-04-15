import React from 'react';

const Scroll=(props) =>{
	return (
		<div style={{overflowY:'scroll', border:'0.5px solid navy', height:'100%', width:'100%'}}>
		{props.children}
		</div>); 
}
export default Scroll;