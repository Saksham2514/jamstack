import React from 'react'
import LinkCard from './LinkCard'

const LinkList = ({links,refreshLinks}) => {
  return (
    <div>
        <h2 className="my-4">Links</h2>
        {links && links.filter(item=>!item.archived).map((link)=>
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>
        )}
        <h2 className="my-4">Archive Links</h2>
        {links && links.filter(item=>item.archived).map((link)=>
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>
        )}
    </div>
  )
}

export default LinkList
