import React from 'react'

const Footer = ({name}) => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-warning">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; {name}</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref ="#bootstrap"/></svg>
    </a>

 
  </footer>
  )
}
Footer.defaultProps = {
name: "2023 Company, Inc"
}
export default Footer
