import styles from "./Card.module.css";
import {useSelector} from "react-redux";
import {getIsLoading, getSearchType} from "../../reducers/githubSlice.js";

export default function Card({data}) {

    const type = useSelector(getSearchType);
    const isLoading = useSelector(getIsLoading);

    return (
        <>

            {isLoading ? <div className={`${styles.skeleton}`}>
                <div className={`${styles.line} ${styles.h17} ${styles.w40} ${styles.m10}`}></div>
                <div className={`${styles.line} ${styles.h8} ${styles.w40}`}></div>
                    <div className={`${styles.line} ${styles.h8} ${styles.w40}`}></div>
                    <div className={`${styles.line} ${styles.h8} ${styles.w75}`}></div>
                    <div className={`${styles.line} ${styles.h8} ${styles.w75}`}></div>
                    <div className={`${styles.line} ${styles.h8} ${styles.w50}`}></div>
                <div className={`${styles.line} ${styles.w75}`}></div>
            </div> :

                <div className={`${styles.card}`}>
                    {type === "users" ?
                        <>
                            <p>Avatar: {data.avatar_url}</p>
                            <p>Username: {data.login}</p>
                            <p>URL: {data.url}</p>
                            <p>Organization: {data.organizations_url}</p>
                        </>
                        :
                        <>
                            <p>Name: {data.name}</p>
                            <p>Full Name: {data.full_name}</p>
                            <p>URL: {data.url}</p>
                            <p>Owner: {data.owner.login}</p>
                        </>}
                </div>}



            </>
    )
}
