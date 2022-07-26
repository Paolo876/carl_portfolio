import React, { useState } from 'react';
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import "./ProjectImage.scss"

export default function ProjectImage({src, index, onClick }) {
  let domain = new URL(src);
  const newUrl = `https://ik.imagekit.io/q5892cimh/tr:w-1100/${domain.pathname}${domain.search}`;

  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <li className={`project-image col-${index + 1}`} onClick={onClick}>
        <img src={newUrl} alt="project-showcase" onLoad={() => setIsLoading(false)} loading="lazy"/>
        {isLoading && <LoadingSpinner isInverted={true} />}

    </li>
  )
}
