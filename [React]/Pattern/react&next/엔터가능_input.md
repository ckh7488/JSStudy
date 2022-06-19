## 간단한 엔터가능 input

const Post = () => {
    const [inputVal, setInputval] = useState('');
    const handleInputChange = (e)=>{
        setInputval(e.target.value);
    }
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <p>Post : {id}</p>
            <input
                value={inputVal}
                onChange={handleInputChange}
                onKeyUp={(e)=>{if(e.key==='Enter') router.push(`/post/${inputVal}`)}}
            >
            
            </input>
            <Link href={`/post/${inputVal}`} replace>asd</Link>
        </>
    )
}
