import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Image from 'react-image-resizer';
 
 

const Antelop = ({name, continent, weight, height, horns, picture, key}) => (
    <div className={"box ${name}"}>
        <span className="picture">
   				<Image
          src={picture}
  					width={100}
  					height={80}
				/>
				
        </span>
        
        <span className="name">{name}</span>
        <span className="continent">{continent}</span>
        <span className="weight">{weight}</span>
        <span className="height">{height}</span>
        <span className="horns">{horns}</span>
    </div>
)

/*<span>
        	<Image
 	 				src={"cache.png"}
  					width={100}
  					height={100}
			/>
		</span>*/

export default Antelop