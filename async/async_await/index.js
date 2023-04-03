const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (res.status !== 200) {
        throw new Error("ERROR: in the api status")
    }

    const data = await res.json();
    return data;
}

getPosts()
    .then(posts => console.log({ posts }))
    .catch(error => console.log({ error }))