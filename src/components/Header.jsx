import PropTypes from 'prop-types'

function Header({text, bgColor,textCol}) {
const headerStyle={backgroundColor:bgColor,
    textColor:textCol
}
    
  return (
    <header style={headerStyle}>
      <h2>
        {text}
      </h2>
    </header>
  )
}


Header.defaultProps={
    text:'Feedback UI',
    bgColor: 'rgba(0,0,0,0.5)',
    textCol: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
