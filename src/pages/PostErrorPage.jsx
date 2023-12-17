import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function PostErrorPage() {

    const error = useRouteError()
  return (
    <> 
    <div>Oops! Something bad happened</div>

    <p>{error.message}</p>
    </>
    
  )
}

// json-server --watch data/db.json --port 8000