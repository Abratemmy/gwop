import React from 'react';
import moment from 'moment';
import './Book.css';
import { IoMdClose } from 'react-icons/io'
function Book({ data, loading, closeBtn }) {

    return (
        <div className='book'>
            <div className='close-Btn'>
                <div className='close' onClick={closeBtn}><IoMdClose className="icon" /> </div>
            </div>
            <div className='heading'>GWOP RESOURCES</div>
            {loading ? (<div>
                <div className="loading" style={{ paddingBottom: "30px" }}></div>
            </div>) :
                <div className='containerWrapper'>
                    {data?.sort((a, b) => moment(new Date(b.id)) - moment(new Date(a.id))).map((post, i) => (
                        <div className='cardWrapper' key={i}>
                            <div className='image'>
                                <img src={post.image} alt="" />
                            </div>
                            <div className='wrapper'>
                                <div className='name'>{post.title}</div>
                                <div className='text'>
                                    <div className='author'>
                                        author: <span>{post.author}</span>
                                    </div>
                                    <div className='author'>
                                        Date: <span>{moment(post.createdAt).format('DD/ MMM /YYYY')}</span>
                                    </div>
                                </div>
                                <div className='postcontent'>
                                    {post.content}
                                </div>

                                <a href={post.link} download={post.link} onClick={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className='download'>
                                        Read Book or Download
                                    </div>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Book