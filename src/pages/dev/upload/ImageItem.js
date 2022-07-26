import React from 'react';

export default function ImageItem({src}) {
  let domain = new URL(src);
  const newUrl = `https://ik.imagekit.io/q5892cimh/tr:w-300/${domain.pathname}${domain.search}`
  return (
        <img src={newUrl} alt="preview" />
  )
}
