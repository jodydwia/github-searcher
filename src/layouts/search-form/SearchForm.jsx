import Input from "../../components/input/Input";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./Searchform.module.css";
import {useEffect, useState} from 'react';
import {searchGithub} from "../../services/apiGithub.js";
import {setIsLoading, setSearchType, updateGithub} from "../../reducers/githubSlice.js";
import {useDispatch} from "react-redux";


export default function SearchForm() {
    const options = [
        {key: 'users', value: 'users', name: 'Users'},
        {key: 'repositories', value: 'repositories', name: 'Repositories'}
    ]

    const [value, setValue] = useState("");
    const [type, setType] = useState("users");
    const dispatch = useDispatch();

    useEffect( ()=> {
        dispatch(setIsLoading(true))
        async function fetchData() {
            return await searchGithub(value, type);
        }
        fetchData().then(data => {
            dispatch(updateGithub(data))
            dispatch(setSearchType(type))
        }).then(() => dispatch(setIsLoading(false)))
    },[value, type])

    return (
        <>
            <section className={styles.searchForm}>
                <Input value={value} setValue={(e)=>setValue(e.target.value)} />
                <Dropdown options={options} type={type} setType={(e)=>setType(e.target.value)} />
            </section>
        </>
    )
}
