import React from 'react'

const LinkCard = ({link,refreshLinks}) => {

    const archiveLink = async ()=>{
        link.archived = !link.archived;
        try {
            await fetch('api/updateLink',{
                method:"PUT",
                body:JSON.stringify(link)
            });
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    }
    const deleteLink = async ()=>{
        const id = link._id
        try {
            await fetch('api/deleteLink',{
                method:"DELETE",
                body:JSON.stringify({id})
            })
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='card mb-5'>
        <div className="card-header">{link.name}</div>
        <div className="card-body">
            <a href={link.url}>{link.url}</a>
            <p>{link.description}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-warning mx-2" onClick={archiveLink}>{link.archived ? "Unarchive" : "Archive" }</button>
            <button className="btn btn-danger " onClick={deleteLink}>Delete</button>
        </div>
    </div>

  )
}

export default LinkCard
