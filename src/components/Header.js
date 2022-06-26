import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
        <h1> {title} </h1>
        <Button color={showAdd ? 'darkred' : 'darkgreen'} text={showAdd ? 'Close' : 'Add holiday'} onClick={onAdd} />
        
        
    </header>
  )
}

Header.defaultProps = {
    title: 'Holiday-Reminder'
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Header