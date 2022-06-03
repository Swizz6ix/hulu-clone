import React from 'react'

function LoginCard({tab}) {
  return (
    <div>LoginCard
        <img alt={tab.name} src={tab.image1} />
    </div>
  )
}

export default LoginCard