export async function getFollowingPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`, {
        next: {
            tags: ['posts', 'followings']
        },
        // cache: 'force-cache' // no-store 가 기본값, no-cache 는 서버에 요청을 보내지만 캐시를 사용하지 않음
    })

    if (!res.ok) {
        throw new Error('Fail to fetch Data');
    }

    return res.json();
}