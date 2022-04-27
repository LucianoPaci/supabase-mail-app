import React from 'react'

function PrintJson({ values }) {
  return <pre>{JSON.stringify(values, null, 2)}</pre>
}

export default PrintJson
