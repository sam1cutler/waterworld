import { useState, useEffect } from 'react';
import articlesHelpers from './misc-helpers';


const Articles = () => {

    const [ articlesList, setArticlesList ] = useState( [] );
    const [ titleDirection, setTitleDirection ] = useState( 'ascending' );
    const [ authorDirection, setAuthorDirection ] = useState( 'ascending' );
    const [ commentsDirection, setCommentsDirection ] = useState( 'descending' );

    useEffect( () => {

        fetch(`https://jsonmock.hackerrank.com/api/articles`)
            .then(response => response.json())
            .then(responseJson => {
                setArticlesList(responseJson.data);
            })

    }, [] );

    

    const handleTitleClick = () => {

        setArticlesList(
            articlesHelpers.sortArticleListByAlpha(articlesList, 'title', titleDirection)
        );

        if (titleDirection === 'ascending') {
            setTitleDirection('descending');
        } else if (titleDirection === 'descending') {
            setTitleDirection('ascending');
        }
            
    }

    const handleAuthorClick = () => {

        setArticlesList(
            articlesHelpers.sortArticleListByAlpha(articlesList, 'author', authorDirection)
        );

        if (authorDirection === 'ascending') {
            setAuthorDirection('descending');
        } else if (authorDirection === 'descending') {
            setAuthorDirection('ascending');
        }
            
    }

    const handleCommentsClick = () => {

        setArticlesList(
            articlesHelpers.sortArticleListByComments(articlesList, commentsDirection)
        );

        if (commentsDirection === 'ascending') {
            setCommentsDirection('descending');
        } else if (commentsDirection === 'descending') {
            setCommentsDirection('ascending');
        }
            
    }

    const renderArticlesList = (listOfArticles) => {

        return listOfArticles.map( activeArticle => {

            const { title, story_title, url, story_url, author, num_comments, created_at } = activeArticle;

            let finalTitle = '';
            title ? finalTitle = title : finalTitle = story_title
            
            let finalUrl = '';
            url ? finalUrl = url : finalUrl = story_url

            let finalComments = 0;
            num_comments ? finalComments = num_comments : finalComments = 0;

            return (

                <div
                    key={created_at}
                    className='individual-article'
                >
                    <h3><a href={finalUrl}>{finalTitle}</a></h3>
                    <p>by {author}</p>
                    <p>{finalComments} comments</p>
                </div>

            )

        })

    }

    return (

        <div className='content-container'>
            <h2>Articles!</h2>
            <div className='sorting-section'>
                <h3>Sort by...</h3>
                <div className='sort-options-container'>
                    <button onClick={handleTitleClick} className={`${titleDirection}-button`}>
                        Title
                    </button>
                    <button onClick={handleAuthorClick} className={`${authorDirection}-button`}>
                        Author
                    </button>
                    <button onClick={handleCommentsClick} className={`${commentsDirection}-button`}>
                        Number of comments
                    </button>
                </div>

            </div>
            { articlesList[0] === undefined
                ? <div>Loading...</div>
                : renderArticlesList(articlesList)
            }
        </div>

    )

}

export default Articles;