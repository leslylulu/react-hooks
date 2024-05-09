import React, { useContext } from 'react';
import TypeContext from '../../TypeContext';
import './index.css';

const MyButton = () => {
	const type = useContext(TypeContext);
  return (
		<>
			{
				type === 'primary' && <button className={`button button-primary`} >primary</button>
			}
			{
				type === 'secondary' && <button className={`button button-secondary`} >secondary</button>
			}
			{
				type === 'default' && <button className={`button button-default`} >default</button>
			}
		</>
  );
}

export default MyButton;