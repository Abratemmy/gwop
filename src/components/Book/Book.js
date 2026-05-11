import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Book.css';
import { IoMdClose } from 'react-icons/io'
import booksData from "./BookData";


function Book({ closeBtn }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // simulate API loading
        const timer = setTimeout(() => {
            setData(booksData);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='book'>
            <div className='close-Btn'>
                <div className='close' onClick={closeBtn}><IoMdClose className="icon" /> </div>
            </div>
            <div className='heading'>GWOP RESOURCES</div>
            {loading ?

                <div className='loadingContainer'>
                    <div
                        className='loading'
                        style={{ paddingBottom: '30px' }}
                    ></div>

                    <p>Loading books...</p>
                </div>

                :
                <div className='containerWrapper'>
                    {data?.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt))).map((post, i) => (
                        <div className='cardWrapper' key={i}>
                            <div className='image'>
                                <img src={post.image} alt="" />
                            </div>
                            <div className='wrapper'>
                                <div className='name'>{post.title}</div>
                                <div className='text'>
                                    <div className='author'>
                                        Author:{' '} <span>{post.author}</span>
                                    </div>
                                    <div className='author'>
                                        Date: <span>{moment(post.createdAt).format('DD/ MMM /YYYY')}</span>
                                    </div>
                                </div>
                                <div className='postcontent'>
                                    {post.content}
                                </div>

                                {/* <a href={post.link} download={post.link} onClick={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                > */}
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="downloadLink"
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