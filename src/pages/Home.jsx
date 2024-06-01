import Container from "../layouts/container/Container.jsx";
import {useSelector} from "react-redux";
import {getGithubData} from "../reducers/githubSlice.js";

export default function Home() {
    const items = useSelector(getGithubData)
    return (
        <>
            <Container items={items} />
        </>
    )
}

