import { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";
import SkeletonElement from "../skeletons/SkeletonElement";

const Article = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout( async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setArticles(data)
        }, 5000)
    })
    return ( 
        <div className="articles">
            <h2>Article</h2>
            <div className="set">
                {articles && articles.map(article => (
                        <div className="article" key={article.id}>
                            <h4>{article.title}</h4>
                            <p>{article.body}</p>
                        </div>
                    ))
                }
                {!articles && [1,2,3,4,5,6].map(n => <SkeletonArticle key={n}/>)}
            </div>
        </div>
     );
}
 
export default Article;