import styles from "./Container.module.css";
import Card from "../../components/card/Card.jsx";
import Pagination from "../../components/pagination/Pagination";
import {useState} from "react";

function Container({items}) {

    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <section className={styles.container}>
                {currentItems && currentItems.map((github) =>
                    (<Card key={github.id} data={github} />)
                )}
            </section>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </>
    )
}

export default Container;

