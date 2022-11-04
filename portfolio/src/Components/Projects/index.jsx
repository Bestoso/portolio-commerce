import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStoreContext } from '../../Context/StoreContext'

export const Projects = () => {
    return (
        <section className='works-section'>
            <div className='works-container'id='works'>
                <Products />
            </div>
        </section>
    )
}

const Products = React.memo(() => {

    const { product, getFireElements } = useStoreContext();

    useEffect(() => {
        getFireElements();
    }, [])

    return (
        <div data-scroll>
        {
            product.map((project, key) => {
                return (
                    <div className='project'
                    key={ key } data-scroll>
                        <div className='project-left'>
                            <p className='project-number'> 0{ project.projectNumber } </p>
                            <div className='text-content'>
                                <p
                                    className='title'>
                                    { project.title }
                                </p>
                                <p
                                    className='subtitle'>
                                    { project.subtitle }
                                </p>
                                <p
                                    className='description'>
                                    { project.description }
                                </p>
                                <Link
                                    className='detailButton'
                                    to={'/products/' + project.id }> View more
                                </Link>
                            </div>
                            <div className='floating'>
                                <p className='category'>
                                    { project.category }
                                </p>
                            </div>
                        </div>
                        <div className='project-right'>
                            <div className='image-container'>
                                <img src={ project.image }
                                className='project-image'
                                alt='project' />
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
})